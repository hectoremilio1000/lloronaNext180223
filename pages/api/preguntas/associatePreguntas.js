// pages/api/preguntas/associatePreguntas.js
import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { examenId, preguntas } = req.body;

  if (!examenId || !preguntas || !Array.isArray(preguntas)) {
    return res.status(400).json({ message: 'Datos incompletos' });
  }

  try {
    // Asociar preguntas al examen
    const insertPromises = preguntas.map((pregunta) =>
      poolCandidatos.query(
        `INSERT INTO preguntas (examen_id, texto, peso_pregunta, a, peso_a, b, peso_b, c, peso_c, d, peso_d, e, peso_e, respuesta_correcta) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          examenId,
          pregunta.texto,
          pregunta.peso_pregunta,
          pregunta.a,
          pregunta.peso_a,
          pregunta.b,
          pregunta.peso_b,
          pregunta.c,
          pregunta.peso_c,
          pregunta.d,
          pregunta.peso_d,
          pregunta.e,
          pregunta.peso_e,
          pregunta.respuesta_correcta,
        ]
      )
    );

    await Promise.all(insertPromises);

    return res
      .status(201)
      .json({ message: 'Preguntas asociadas exitosamente' });
  } catch (error) {
    console.error('Error al asociar preguntas:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
