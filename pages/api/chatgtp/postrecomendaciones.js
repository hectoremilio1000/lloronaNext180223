import OpenAI from 'openai';
import poolCandidatos from '../../../lib/dbChat';

export default async function handler(req, res) {
  const openai = new OpenAI();

  if (req.method === 'POST') {
    try {
      const { id_usuario } = req.body;

      if (!id_usuario) {
        return res.status(400).json({ error: 'ID de usuario requerido.' });
      }

      // Obtener el nombre del usuario
      const [usuario] = await poolCandidatos.query(
        'SELECT nombre FROM usuarios WHERE id = ?',
        [id_usuario]
      );

      if (!usuario || usuario.length === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      const nombreUsuario = usuario[0].nombre;

      // Obtener las respuestas seleccionadas
      const [respuestas] = await poolCandidatos.query(
        `
        SELECT p.texto AS pregunta, GROUP_CONCAT(o.texto SEPARATOR ', ') AS respuestas
        FROM respuestas r
        INNER JOIN preguntas p ON r.id_pregunta = p.id
        INNER JOIN opciones o ON r.id_opcion = o.id
        WHERE r.id_usuario = ?
        GROUP BY p.id
        `,
        [id_usuario]
      );

      const respuestasTexto = respuestas
        .map(
          (detalle) =>
            `Pregunta: ${detalle.pregunta}\nRespuestas: ${detalle.respuestas}`
        )
        .join('\n\n');

      // Crear el prompt para OpenAI
      const prompt = `
      Hola, soy un asistente especializado en negocios gastronómicos.

      Este es un resumen de las respuestas del usuario ${nombreUsuario}:
      ${respuestasTexto}

      Basándote en las respuestas del usuario, proporciona recomendaciones personalizadas de alto valor en las siguientes categorías:
      (Detalles similares a los de tu prompt original).
      `;

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'Eres un asistente especializado en negocios gastronómicos.',
          },
          { role: 'user', content: prompt },
        ],
      });

      const recomendacion = completion.choices[0].message.content.trim();

      // Guardar la recomendación en la base de datos
      await poolCandidatos.query(
        'INSERT INTO recomendaciones (id_usuario, texto) VALUES (?, ?)',
        [id_usuario, recomendacion]
      );

      res.status(201).json({
        message: 'Recomendación generada y guardada correctamente.',
        recomendacion,
      });
    } catch (error) {
      console.error('Error en la API postrecomendaciones:', error.message);
      res.status(500).json({ error: 'Error al generar recomendación.' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido.' });
  }
}
