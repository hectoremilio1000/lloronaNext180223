import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { tipoExamen = '', nombreExamen = '', version = '' } = req.query;

      const filtrosQuery = `
        SELECT DISTINCT tipo AS tipoExamen, nombre AS nombreExamen, version 
        FROM examenes 
        WHERE activo = 1
      `;

      let preguntasQuery = `
        SELECT p.id, p.examen_id, p.texto, p.peso_a, p.peso_b, p.peso_c, p.peso_d, p.peso_e, 
               p.a, p.b, p.c, p.d, p.e, p.respuesta_correcta
        FROM preguntas p
        JOIN examenes e ON p.examen_id = e.id
        WHERE 1=1
      `;
      const params = [];

      if (tipoExamen) {
        preguntasQuery += ' AND e.tipo = ?';
        params.push(tipoExamen);
      }
      if (nombreExamen) {
        preguntasQuery += ' AND e.nombre = ?';
        params.push(nombreExamen);
      }
      if (version) {
        preguntasQuery += ' AND e.version = ?';
        params.push(version);
      }

      const [filtros] = await poolCandidatos.query(filtrosQuery);
      const [preguntas] = await poolCandidatos.query(preguntasQuery, params);

      res.status(200).json({
        filtros: {
          tipos: [...new Set(filtros.map((row) => row.tipoExamen))],
          nombres: [...new Set(filtros.map((row) => row.nombreExamen))],
          versiones: [...new Set(filtros.map((row) => row.version))],
        },
        preguntas,
      });
    } catch (error) {
      console.error('Error al obtener filtros o preguntas:', error);
      res.status(500).json({ error: 'Error interno del servidor.' });
    }
  } else if (req.method === 'PUT') {
    const {
      id,
      texto,
      a,
      b,
      c,
      d,
      e,
      peso_a,
      peso_b,
      peso_c,
      peso_d,
      peso_e,
      respuesta_correcta,
    } = req.body;

    try {
      const query = `
        UPDATE preguntas
        SET texto = ?, a = ?, b = ?, c = ?, d = ?, e = ?, 
            peso_a = ?, peso_b = ?, peso_c = ?, peso_d = ?, peso_e = ?, 
            respuesta_correcta = ?
        WHERE id = ?
      `;
      const values = [
        texto,
        a,
        b,
        c,
        d,
        e,
        peso_a,
        peso_b,
        peso_c,
        peso_d,
        peso_e,
        respuesta_correcta,
        id,
      ];
      await poolCandidatos.query(query, values);

      res.status(200).json({ message: 'Pregunta actualizada correctamente.' });
    } catch (error) {
      console.error('Error al actualizar la pregunta:', error);
      res.status(500).json({ error: 'Error interno del servidor.' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido.' });
  }
}
