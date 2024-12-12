import { IncomingForm } from 'formidable';
import fs from 'fs';
import poolCandidatos from '../../lib/dbCandidatos';

export const config = {
  api: {
    bodyParser: false, // Necesario para procesar archivos con formidable
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new IncomingForm({
      keepExtensions: true, // Mantener la extensión del archivo
      uploadDir: './public/uploads', // Carpeta para guardar los archivos subidos
    });

    form.parse(req, async (err, fields, files) => {
      console.log('Campos recibidos:', fields);
      console.log('Archivos recibidos:', files);

      if (err) {
        console.error('Error al procesar el formulario:', err);
        return res
          .status(500)
          .json({ message: 'Error al procesar el formulario' });
      }

      const {
        nombre,
        whatsapp,
        email,
        puesto,
        referencia1_empresa,
        referencia1_cargo,
        referencia1_nombre,
        referencia1_tiempo,
        referencia1_whatsapp,
        referencia2_empresa,
        referencia2_cargo,
        referencia2_nombre,
        referencia2_tiempo,
        referencia2_whatsapp,
      } = fields;

      if (!nombre || !whatsapp || !email || !puesto) {
        return res
          .status(400)
          .json({ message: 'Todos los campos son obligatorios' });
      }

      let cvPath = null;

      // Manejo del archivo (en caso de que sea un arreglo)
      const fileArray = Array.isArray(files.cv) ? files.cv : [files.cv];
      if (fileArray.length > 0 && fileArray[0]?.filepath) {
        try {
          const file = fileArray[0]; // Tomar el primer archivo
          const fileName = `${Date.now()}_${file.originalFilename}`;
          const newPath = `./public/uploads/${fileName}`;

          fs.renameSync(file.filepath, newPath); // Mover el archivo al destino final
          cvPath = `/uploads/${fileName}`; // Ruta relativa para el servidor
          console.log('Archivo guardado en:', cvPath);
        } catch (fileError) {
          console.error('Error al guardar el archivo:', fileError);
          return res
            .status(500)
            .json({ message: 'Error al guardar el archivo' });
        }
      } else {
        console.error('Archivo no recibido correctamente.');
        return res
          .status(400)
          .json({ message: 'Archivo no recibido correctamente.' });
      }

      try {
        const query = `
          INSERT INTO candidatos 
          (nombre, whatsapp, email, puesto, cv_path, referencia1_empresa, referencia1_cargo, referencia1_nombre, referencia1_tiempo, referencia1_whatsapp, referencia2_empresa, referencia2_cargo, referencia2_nombre, referencia2_tiempo, referencia2_whatsapp) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
          nombre,
          whatsapp,
          email,
          puesto,
          cvPath,
          referencia1_empresa,
          referencia1_cargo,
          referencia1_nombre,
          referencia1_tiempo,
          referencia1_whatsapp,
          referencia2_empresa,
          referencia2_cargo,
          referencia2_nombre,
          referencia2_tiempo,
          referencia2_whatsapp,
        ];

        await poolCandidatos.query(query, values);

        console.log('Candidato registrado con éxito.');
        res.status(201).json({ message: 'Candidato registrado exitosamente' });
      } catch (dbError) {
        console.error('Error al guardar en la base de datos:', dbError);
        res
          .status(500)
          .json({ message: 'Error al guardar los datos del candidato' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
