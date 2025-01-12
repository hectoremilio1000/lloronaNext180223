export default function handler(req, res) {
  if (req.method === 'POST') {
    const { password } = req.body;
    if (password === process.env.EXAM_PASSWORD) {
      res.status(200).send({ success: true });
    } else {
      res
        .status(401)
        .send({ success: false, message: 'Contraseña incorrecta.' });
    }
  } else {
    res.status(405).send({ message: 'Método no permitido.' });
  }
}
