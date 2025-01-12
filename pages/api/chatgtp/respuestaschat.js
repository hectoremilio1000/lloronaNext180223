import poolCandidatos from '../../../lib/dbChat';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { id_usuario, respuestas } = req.body;

      // Validar id_usuario y respuestas
      if (!id_usuario || !Array.isArray(respuestas)) {
        return res.status(400).json({
          error: 'Datos inválidos. Se requieren id_usuario y respuestas.',
        });
      }

      // Verificar conexión a la base de datos
      if (!poolCandidatos) {
        throw new Error('No se pudo conectar a la base de datos.');
      }

      // Iterar sobre las respuestas y guardar en la base de datos
      for (const respuesta of respuestas) {
        const { id_pregunta, ids_opciones } = respuesta;

        if (!id_pregunta || !Array.isArray(ids_opciones)) {
          return res.status(400).json({
            error:
              'Cada respuesta debe incluir id_pregunta y una lista de ids_opciones.',
          });
        }

        // Insertar cada opción seleccionada
        for (const id_opcion of ids_opciones) {
          try {
            await poolCandidatos.query(
              'INSERT INTO respuestas (id_usuario, id_pregunta, id_opcion) VALUES (?, ?, ?)',
              [id_usuario, id_pregunta, id_opcion]
            );
          } catch (insertError) {
            console.error(
              `Error al insertar respuesta: Usuario ${id_usuario}, Pregunta ${id_pregunta}, Opción ${id_opcion}`,
              insertError
            );
          }
        }
      }

      res.status(201).json({ message: 'Respuestas guardadas con éxito.' });
    } catch (error) {
      console.error('Error en la API respuestaschat:', error.message);
      res.status(500).json({ error: 'Error al guardar respuestas.' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido.' });
  }
}
