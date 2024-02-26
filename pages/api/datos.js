// pages/api/datos.js
import fs from "fs";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      let data = JSON.parse(fs.readFileSync("public/datos.json", "utf8"));
      const nuevoRegistro = req.body;
      if (!data.regalos) {
        data.regalos = [];
      }
      data.regalos.push(nuevoRegistro);
      fs.writeFileSync("public/datos.json", JSON.stringify(data));
      res.status(200).json({ message: "Datos actualizados correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al actualizar los datos" });
    }
  } else if (req.method === "GET") {
    try {
      let data = JSON.parse(fs.readFileSync("public/datos.json", "utf8"));
      const codigo = req.query.codigo;
      const registro = data.regalos.find((reg) => reg.codigoUnico === codigo);
      if (registro) {
        res.status(200).json({ registro });
      } else {
        res.status(404).json({ message: "Registro no encontrado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al buscar el registro" });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
