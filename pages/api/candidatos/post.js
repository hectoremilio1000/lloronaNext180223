import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import poolCandidatos from '../../../lib/dbCandidatos';

export const config = {
  api: {
    bodyParser: false, // Necesario para manejar archivos con formidable
  },
};

// Crear carpeta si no existe
const uploadsDir = path.join(process.cwd(), '/public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const form = new IncomingForm({
    keepExtensions: true,
    uploadDir: uploadsDir,
    multiples: false, // Asegúrate de permitir solo un archivo
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error al procesar el formulario:', err);
      return res
        .status(500)
        .json({ message: 'Error al procesar el formulario' });
    }

    console.log('Campos recibidos:', fields);
    console.log('Archivos recibidos:', files);

    const { nombre, whatsapp, email, puesto } = fields;

    if (!nombre || !whatsapp || !email || !puesto) {
      return res
        .status(400)
        .json({ message: 'Todos los campos son obligatorios' });
    }

    let cvPath = null;

    // Verifica si files.cv es un array y accede al primer elemento
    const file = Array.isArray(files.cv) ? files.cv[0] : files.cv;

    if (file && file.filepath) {
      try {
        const fileName = `${Date.now()}_${file.originalFilename}`;
        const newPath = path.join(uploadsDir, fileName);

        // Mueve el archivo al directorio deseado
        fs.renameSync(file.filepath, newPath);
        cvPath = `/uploads/${fileName}`;
      } catch (fileError) {
        console.error('Error al guardar el archivo:', fileError);
        return res.status(500).json({ message: 'Error al guardar el archivo' });
      }
    } else {
      console.error('El archivo no se recibió correctamente');
      return res.status(400).json({ message: 'No se recibió el archivo' });
    }

    try {
      const query = `
        INSERT INTO candidatos 
        (nombre, whatsapp, email, puesto, cv_path, estado) 
        VALUES (?, ?, ?, ?, ?, ?)`;
      const values = [nombre, whatsapp, email, puesto, cvPath, 'Por Revisar'];
      await poolCandidatos.query(query, values);

      res.status(201).json({ message: 'Candidato registrado exitosamente' });
    } catch (dbError) {
      console.error('Error al guardar en la base de datos:', dbError);
      res
        .status(500)
        .json({ message: 'Error al guardar los datos del candidato' });
    }
  });
}
