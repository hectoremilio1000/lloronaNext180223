import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  const { method } = req;

  if (method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { respuestas, candidatoId, examenId } = req.body;

    if (!respuestas || !candidatoId || !examenId) {
      return res.status(400).json({
        message: 'Respuestas, candidatoId y examenId son requeridos',
      });
    }

    // Obtener el número de intentos previos para este candidato
    const [intentosPrevios] = await poolCandidatos.query(
      `SELECT MAX(intento_id) AS ultimoIntento 
   FROM respuestas 
   WHERE candidato_id = ?`,
      [candidatoId]
    );

    // Determinar el nuevo intento_id global para el candidato
    const intentoId = (intentosPrevios[0]?.ultimoIntento || 0) + 1;

    // Registrar las respuestas
    const results = [];
    for (const [preguntaId, { seleccionada }] of Object.entries(respuestas)) {
      try {
        // Obtener datos de la pregunta
        const [pregunta] = await poolCandidatos.query(
          `SELECT 
            p.peso_${seleccionada} AS peso_respuesta, 
            p.peso_pregunta, 
            p.respuesta_correcta 
          FROM preguntas p 
          WHERE p.id = ?`,
          [preguntaId]
        );

        if (pregunta.length === 0) {
          console.error(`Pregunta con ID ${preguntaId} no encontrada`);
          continue;
        }

        const {
          peso_respuesta = 0,
          peso_pregunta = 0,
          respuesta_correcta,
        } = pregunta[0];

        // Determinar si la respuesta es correcta
        const esCorrecta = respuesta_correcta === seleccionada ? 1 : 0;

        // Insertar la respuesta en la base de datos
        const [result] = await poolCandidatos.query(
          `INSERT INTO respuestas 
            (intento_id, candidato_id, pregunta_id, peso_pregunta, 
             respuesta_seleccionada, peso_respuesta, es_correcta, timestamp, 
             examen_id, nombre_examen, version_examen) 
           VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), ?, ?, ?)`,
          [
            intentoId,
            candidatoId,
            preguntaId,
            peso_pregunta,
            seleccionada,
            peso_respuesta,
            esCorrecta,
            examenId,
            'Psicométrico/Conocimientos', // Aquí puedes reemplazar con un nombre dinámico si es necesario
            1, // Versión del examen, puedes calcular dinámicamente si lo necesitas
          ]
        );

        results.push(result);
      } catch (error) {
        console.error(
          `Error al insertar respuesta para pregunta ${preguntaId}:`,
          error
        );
      }
    }

    // Validar si todas las respuestas se guardaron correctamente
    if (results.length !== Object.keys(respuestas).length) {
      return res.status(500).json({
        message: 'Error al guardar todas las respuestas',
      });
    }

    return res.status(201).json({
      message: 'Respuestas guardadas exitosamente',
      intentoId,
    });
  } catch (error) {
    console.error('Error en la API de respuestas:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
