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
      Hola, ${nombreUsuario} soy un asistente especializado en negocios gastronómicos y estratégicos.

      Este es un resumen de las respuestas del usuario ${nombreUsuario}:
      ${respuestasTexto}

      Con base en estas respuestas, proporciona recomendaciones personalizadas y prácticas que incluyan:
      
      1. **Inspiración Visionaria:**
      - Ofrece ideas innovadoras basadas en ejemplos de líderes mundiales como Danny Meyer, René Redzepi, Howard Schultz, y Massimo Bottura dependiendo de las respuestas que hayan dado los usuarios y sobre el campo en acción que ellos te dirían dependiendo de donde está su mayor skill y de las preguntas y respuestas que respondieron, se muy particular como cada uno de ellos aportaría en cada cuestión dependiendo siempre de analizar las preguntas y respuestas ${respuestasTexto} .
      - Muestra cómo sus estrategias podrían aplicarse en el negocio dependiendo de ${respuestasTexto}.

      2. **Planificación Práctica dependiendo de ${respuestasTexto} :**
      - Detalla cómo estructurar un plan de trabajo para el primer año.
      - Incluye pasos específicos como investigación de mercado, definición de productos estrella, y estrategias iniciales de marketing siempre di cuales y ejemplos prácticos dependiendo de su ${respuestasTexto} adaptándote.

      3. **Tecnología y Equipamiento Vanguardista dependiendo de ${respuestasTexto}:**
      - Recomienda las herramientas tecnológicas más recientes para optimizar procesos.
      - Sugiere equipo moderno que se alinee con el presupuesto mencionado.

      #### 4. Soporte Integral con "Impulso Restaurantero":
- Explica cómo "Impulso Restaurantero" puede ayudar al usuario, basándote en ${respuestasTexto}.
- Cada punto debe tener un mínimo de **300 palabras** y detallar cómo adaptamos nuestras soluciones a las respuestas proporcionadas. 
      - Ayuda para saber cuales son los requisitos legales para operar óptimamente tu restaurante.
      - Estrategias de growth hacking y marketing digital modernas que te ayudaríamos a implementar con inteligencia artificial (di algunos ejemplos innovadores y como han impactado en tik tok, en instagram y en google ads)  
      - Inteligencia Artificial para análisis y decisiones (di cuestiones innovadoras y utiliza las últimas relevancias en el mercado para dar ejemplo que obtengas y habla como impulso restaurantero te ayudaría a generarlas en ti).
        - Sistemas de punto de venta, reservas, y encuestas inteligentes (siempre di cuestiones innovadoras).
        - Manuales y capacitación con IA (describe varios puntos de como te va a ayudar esto a tener un equipo de alto rendimiento para que tengas una operación sumamente estable).
        - Creación de tu pagína web con sistema de calendario eficiente (di como lo vamos a crear con tecnología de punto para que siempre tengas el mejor ranking e indexación en google, define estategias innovadoras que utilizariamos con tecnología de punta como nextjs o sistemas muy modernos como calendly y que beneficios tiene esto).
        - Inventarios inteligentes y monitoreo en tiempo real (como te ayudamos a tener mejores inventarios que se adapten a como organizas tus compras, etc).
        - Financiamiento a tasas bajas (como te podríamos ayudar a financiarte tu crecimiento, o máquinas para mejorar tu productividad, di algunas máquinas te te podríamos ayudar como hornos rational o tipo de máquina de café que eleven la experiencia del cliente y como te ayudarían).
        - Programas de lealtad para fidelizar clientes (ayudarte a generar algún programa de lealtad para que tengas clientes felices).
        - Cómo te ayudaríamos a monitorear tu negocio para que no tengas robo hormiga, entre otras cuestiones.

      #### 5. Plan de Ejecución a Corto Plazo:
- Diseña un plan de acción con objetivos claros para:
  - 15 días.
  - 1 mes.
  - 3 meses.
  - 6 meses.
  - 1 año.
- Cada etapa debe incluir un mínimo de **200 palabras** con recomendaciones específicas, explicando cómo evaluar resultados y ajustar estrategias según las necesidades del usuario.

      - Termina con una frase inspiradora siempre diferente dependiendo de ${respuestasTexto} y explica cómo "Impulso Restaurantero" aplicará esa visión para apoyar al usuario.

Asegúrate de que las recomendaciones sean detalladas, específicas y alineadas con las ${respuestasTexto}, evitando generalidades.

      `;

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'Eres un asistente especializado en negocios gastronómicos y estratégicos que va a ayudar con impulso restaurantero a las personas para que crezcan su negocio.',
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
