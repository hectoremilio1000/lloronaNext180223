export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido.' });
  }

  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'La contraseña es requerida.' });
  }

  if (password === process.env.SUPERADMIN_PASSWORD) {
    res.status(200).json({ message: 'Contraseña válida.' });
  } else {
    res.status(401).json({ message: 'Contraseña incorrecta.' });
  }
}
