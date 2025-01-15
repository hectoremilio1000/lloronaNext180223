import poolCandidatos from '../../../lib/dbCandidatos';

// Función genérica para calcular puntajes
function calcularPuntajePorExamen(respuestas, examenNombre) {
  let puntaje = 0;

  respuestas.forEach((respuesta) => {
    if (respuesta.examen_nombre === examenNombre) {
      const calculo = respuesta.peso_respuesta * respuesta.peso_pregunta;
      puntaje += calculo;

      // Log detallado para depuración
      console.log(
        `${examenNombre} -> Pregunta ID: ${respuesta.pregunta_id}, Peso Respuesta: ${respuesta.peso_respuesta}, Peso Pregunta: ${respuesta.peso_pregunta}, Puntaje Calculado: ${calculo}`
      );
    }
  });

  // Asegurarse de que el puntaje no exceda 10
  return Math.min(puntaje, 10);
}

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
    };

    // Paso 1: Calcular puntajes psicométricos
    const habilidadesPsicométricas = [
      'Bondad',
      'Optimismo',
      'Ética en el Trabajo',
      'Inteligencia Curiosa',
      'Integridad',
      'Autoconciencia',
      'Empatía',
    ];

    habilidadesPsicométricas.forEach((nombreExamen) => {
      const puntaje = calcularPuntajePorExamen(respuestas, nombreExamen);
      resultados[`puntaje_${nombreExamen.toLowerCase()}`] = puntaje;

      const examen = respuestas.find(
        (respuesta) => respuesta.examen_nombre === nombreExamen
      );

      if (examen) {
        resultados[`${nombreExamen.toLowerCase()}_examen_id`] =
          examen.examen_id;
        resultados[`${nombreExamen.toLowerCase()}_version`] =
          examen.examen_version;
      } else {
        resultados[`${nombreExamen.toLowerCase()}_examen_id`] = null;
        resultados[`${nombreExamen.toLowerCase()}_version`] = null;
      }
    });

    console.log('Puntajes psicométricos calculados:', resultados);

    // Paso 2: Calcular puntaje de conocimientos
    const [examenConocimientos] = await poolCandidatos.query(
      `SELECT id, version FROM examenes WHERE nombre = ? AND tipo = 'Conocimientos' AND activo = 1`,
      [puesto]
    );

    if (examenConocimientos.length) {
      const { id: conocimientosExamenId, version: conocimientosVersion } =
        examenConocimientos[0];

      resultados.puntaje_conocimientos = calcularPuntajePorExamen(
        respuestas,
        puesto
      );
      resultados.conocimientos_examen_id = conocimientosExamenId;
      resultados.conocimientos_version = conocimientosVersion;

      console.log(
        'Conocimientos -> Puntaje:',
        resultados.puntaje_conocimientos,
        'Examen ID:',
        conocimientosExamenId
      );
    } else {
      resultados.conocimientos_examen_id = null;
      resultados.conocimientos_version = null;

      console.log(
        'No se encontró examen de conocimientos para el puesto:',
        puesto
      );
    }

    // Log final antes de guardar
    console.log('Resultados completos:', resultados);

    // Paso 3: Guardar resultados en la base de datos
    await poolCandidatos.query(
      `INSERT INTO resultados (
        candidato_id, puesto, puntaje_bondad, puntaje_optimismo, puntaje_etica_trabajo,
        puntaje_curiosidad, puntaje_integridad, puntaje_autoconciencia, puntaje_empatia,
        puntaje_conocimientos, bondad_examen_id, bondad_version, optimismo_examen_id,
        optimismo_version, etica_trabajo_examen_id, etica_trabajo_version,
        curiosidad_examen_id, curiosidad_version, integridad_examen_id, integridad_version,
        autoconciencia_examen_id, autoconciencia_version, empatia_examen_id, empatia_version,
        conocimientos_examen_id, conocimientos_version, fecha
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
      [
        resultados.candidato_id,
        resultados.puesto,
        resultados.puntaje_bondad,
        resultados.puntaje_optimismo,
        resultados.puntaje_etica_trabajo,
        resultados.puntaje_curiosidad,
        resultados.puntaje_integridad,
        resultados.puntaje_autoconciencia,
        resultados.puntaje_empatia,
        resultados.puntaje_conocimientos,
        resultados.bondad_examen_id,
        resultados.bondad_version,
        resultados.optimismo_examen_id,
        resultados.optimismo_version,
        resultados.etica_trabajo_examen_id,
        resultados.etica_trabajo_version,
        resultados.curiosidad_examen_id,
        resultados.curiosidad_version,
        resultados.integridad_examen_id,
        resultados.integridad_version,
        resultados.autoconciencia_examen_id,
        resultados.autoconciencia_version,
        resultados.empatia_examen_id,
        resultados.empatia_version,
        resultados.conocimientos_examen_id,
        resultados.conocimientos_version,
      ]
    );

    return res
      .status(201)
      .json({ message: 'Resultados calculados y guardados exitosamente' });
  } catch (error) {
    console.error('Error al calcular resultados:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
