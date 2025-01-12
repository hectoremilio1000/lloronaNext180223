import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { candidatoId, intentoId, puesto } = req.body;

    if (!candidatoId || !intentoId || !puesto) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }

    // Obtener respuestas del candidato para el intento actual
    const [respuestas] = await poolCandidatos.query(
      `SELECT r.*, p.peso_pregunta, p.examen_id, e.nombre AS examen_nombre, e.version AS examen_version
       FROM respuestas r
       JOIN preguntas p ON r.pregunta_id = p.id
       JOIN examenes e ON p.examen_id = e.id
       WHERE r.candidato_id = ? AND r.intento_id = ?`,
      [candidatoId, intentoId]
    );

    if (!respuestas.length) {
      return res.status(404).json({ message: 'No se encontraron respuestas' });
    }

    // Inicializar resultados
    const resultados = {
      candidato_id: candidatoId,
      puesto,
      puntaje_bondad: 0,
      puntaje_optimismo: 0,
      puntaje_etica_trabajo: 0,
      puntaje_curiosidad: 0,
      puntaje_integridad: 0,
      puntaje_autoconciencia: 0,
      puntaje_empatia: 0,
      puntaje_conocimientos: 0,
      bondad_examen_id: null,
      bondad_version: null,
      optimismo_examen_id: null,
      optimismo_version: null,
      etica_trabajo_examen_id: null,
      etica_trabajo_version: null,
      curiosidad_examen_id: null,
      curiosidad_version: null,
      integridad_examen_id: null,
      integridad_version: null,
      autoconciencia_examen_id: null,
      autoconciencia_version: null,
      empatia_examen_id: null,
      empatia_version: null,
      conocimientos_examen_id: null,
      conocimientos_version: null,
    };

    // Procesar respuestas para calcular puntajes
    respuestas.forEach((respuesta) => {
      const puntaje = respuesta.peso_respuesta * respuesta.peso_pregunta;

      switch (respuesta.examen_nombre) {
        case 'Bondad':
          resultados.puntaje_bondad += puntaje;
          resultados.bondad_examen_id = respuesta.examen_id;
          resultados.bondad_version = respuesta.examen_version;
          break;
        case 'Optimismo':
          resultados.puntaje_optimismo += puntaje;
          resultados.optimismo_examen_id = respuesta.examen_id;
          resultados.optimismo_version = respuesta.examen_version;
          break;
        case 'Ética en el Trabajo':
          resultados.puntaje_etica_trabajo += puntaje;
          resultados.etica_trabajo_examen_id = respuesta.examen_id;
          resultados.etica_trabajo_version = respuesta.examen_version;
          break;
        case 'Inteligencia Curiosa':
          resultados.puntaje_curiosidad += puntaje;
          resultados.curiosidad_examen_id = respuesta.examen_id;
          resultados.curiosidad_version = respuesta.examen_version;
          break;
        case 'Integridad':
          resultados.puntaje_integridad += puntaje;
          resultados.integridad_examen_id = respuesta.examen_id;
          resultados.integridad_version = respuesta.examen_version;
          break;
        case 'Autoconciencia':
          resultados.puntaje_autoconciencia += puntaje;
          resultados.autoconciencia_examen_id = respuesta.examen_id;
          resultados.autoconciencia_version = respuesta.examen_version;
          break;
        case 'Empatía':
          resultados.puntaje_empatia += puntaje;
          resultados.empatia_examen_id = respuesta.examen_id;
          resultados.empatia_version = respuesta.examen_version;
          break;
        case 'Conocimientos':
          resultados.puntaje_conocimientos += puntaje;
          resultados.conocimientos_examen_id = respuesta.examen_id;
          resultados.conocimientos_version = respuesta.examen_version;
          break;
        default:
          console.warn(`Examen desconocido: ${respuesta.examen_nombre}`);
          break;
      }
    });

    // Validar y asignar campos de conocimientos si no se calcularon correctamente
    if (!resultados.conocimientos_examen_id) {
      const [conocimiento] = await poolCandidatos.query(
        `SELECT id AS examen_id, version 
         FROM examenes 
         WHERE nombre = ? AND tipo = 'Conocimientos' AND activo = 1`,
        [puesto]
      );

      if (conocimiento.length) {
        resultados.conocimientos_examen_id = conocimiento[0].examen_id;
        resultados.conocimientos_version = conocimiento[0].version;
      } else {
        console.error(
          `No se encontró un examen de conocimientos para el puesto: ${puesto}`
        );
      }
    }

    // Validar y calcular puntaje de conocimientos si sigue siendo 0
    if (
      resultados.puntaje_conocimientos === 0 &&
      resultados.conocimientos_examen_id
    ) {
      const [puntajeConocimientos] = await poolCandidatos.query(
        `SELECT SUM(r.peso_respuesta * p.peso_pregunta) AS puntaje 
         FROM respuestas r
         JOIN preguntas p ON r.pregunta_id = p.id
         WHERE r.candidato_id = ? AND r.intento_id = ? AND p.examen_id = ?`,
        [candidatoId, intentoId, resultados.conocimientos_examen_id]
      );

      resultados.puntaje_conocimientos = puntajeConocimientos[0]?.puntaje || 0;
    }

    // Guardar resultados en la tabla
    await poolCandidatos.query(`INSERT INTO resultados SET ?, fecha = NOW()`, [
      resultados,
    ]);

    return res
      .status(201)
      .json({ message: 'Resultados calculados y guardados exitosamente' });
  } catch (error) {
    console.error('Error al calcular resultados:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
