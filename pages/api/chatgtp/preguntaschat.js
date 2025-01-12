import poolCandidatos from '../../../lib/dbChat';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { contexto } = req.query;

      if (!contexto || !['planeacion', 'operando'].includes(contexto)) {
        return res
          .status(400)
          .json({ error: 'Contexto inválido o no proporcionado.' });
      }

      const [preguntas] = await poolCandidatos.query(
        'SELECT id, texto FROM preguntas WHERE contexto = ?',
        [contexto]
      );

      const preguntasConOpciones = await Promise.all(
        preguntas.map(async (pregunta) => {
          const [opciones] = await poolCandidatos.query(
            'SELECT id, texto FROM opciones WHERE id_pregunta = ?',
            [pregunta.id]
          );
          return { id: pregunta.id, texto: pregunta.texto, opciones };
        })
      );

      res.status(200).json(preguntasConOpciones);
    } catch (error) {
      console.error('Error en la API preguntaschat:', error.message);
      res.status(500).json({ error: 'Error al obtener preguntas y opciones.' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido.' });
  }
}
