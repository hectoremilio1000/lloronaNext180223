import Head from 'next/head';
import React, { useState } from 'react';
import NavBar from '../components/NavBarEs/NavBarEs';
import MySwiper from '../components/SwiperCantina';
import { useAppContext } from '../components/context/Context';

function Recursoshumanos() {
  const { ingles, espa, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    email: '',
    puesto: '',
    referencia1_empresa: '',
    referencia1_cargo: '',
    referencia1_nombre: '',
    referencia1_tiempo: '',
    referencia1_whatsapp: '',
    referencia2_empresa: '',
    referencia2_cargo: '',
    referencia2_nombre: '',
    referencia2_tiempo: '',
    referencia2_whatsapp: '',
  });

  const [cv, setCv] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCv(file);
      console.log('Archivo seleccionado:', file.name); // Verifica que el archivo sea capturado
    } else {
      console.log('No se seleccionó ningún archivo');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    if (cv) {
      data.append('cv', cv);
    } else {
      alert('Por favor, selecciona un archivo para continuar.');
      return;
    }

    try {
      const response = await fetch('/api/candidatos/post', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Candidato registrado exitosamente.');
        setFormData({
          nombre: '',
          whatsapp: '',
          email: '',
          puesto: '',
        });
        setCv(null);
      } else {
        const result = await response.json();
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Hubo un problema al enviar los datos.');
    }
  };

  console.log('Archivo seleccionado:', cv);
  console.log('Datos del formulario:', formData);

  const bannerData = espa
    ? {
        title: 'Únete al mejor equipo',
        imageURL:
          'https://imagenesrutalab.s3.us-east-1.amazonaws.com/llorona/nextImage/recursoshumanos/recursos%2Bhumanos%2Bllorona%2Bcantina.jpg',
      }
    : {
        title: 'From the sea to your palate',
        imageURL:
          'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/comida/mariscos.jpg',
      };

  return (
    <div>
      <Head>
        <title>La Llorona | Recursos Humanos</title>
        <meta name="description" content="Únete al mejor equipo" />
      </Head>
      <NavBar />
      <MySwiper title={bannerData.title} imageURL={bannerData.imageURL} />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Aplicación de Candidatos
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-lg"
        >
          {/* Campo de puesto */}
          <div>
            <label className="block text-lg font-medium mb-2">Puesto</label>
            <select
              name="puesto"
              required
              onChange={handleChange}
              value={formData.puesto}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled>
                Selecciona el puesto
              </option>
              <option value="Mesero">Mesero</option>
              <option value="Gerente">Gerente</option>
              <option value="Subgerente">Subgerente</option>
              <option value="Barman">Barman</option>
              <option value="Backbar">Backbar</option>
              <option value="Jefe de Barra">Jefe de Barra</option>
              <option value="Cocinero">Cocinero</option>
              <option value="Lavaloza">Lavaloza</option>
              <option value="Ayudante de Cocina">Ayudante de Cocina</option>
              <option value="Subjefe de Cocina">Subjefe de Cocina</option>
              <option value="Jefe de Cocina">Jefe de Cocina</option>
              <option value="Capitán">Capitán</option>
              <option value="Garrotero">Garrotero</option>
            </select>
          </div>
          {/* Información Personal */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              name="nombre"
              required
              onChange={handleChange}
              value={formData.nombre}
              placeholder="Escribe tu nombre completo"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium mb-2">WhatsApp</label>
              <input
                type="text"
                name="whatsapp"
                required
                onChange={handleChange}
                value={formData.whatsapp}
                placeholder="Escribe tu número de WhatsApp"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                value={formData.email}
                placeholder="Escribe tu correo electrónico"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          {/* Subir CV */}
          <div>
            <label className="block text-lg font-medium mb-2">Sube tu CV</label>
            <input
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx,.jpg,.png"
              onChange={(e) => handleFileChange(e)}
              className="block w-full text-gray-700 p-2 border rounded"
            />
          </div>
          {/* Referencias Laborales */}
          {['referencia1', 'referencia2'].map((ref, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold mt-4 mb-2">
                Referencia Laboral {index + 1}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-medium mb-2">
                    Nombre de la Empresa
                  </label>
                  <input
                    type="text"
                    name={`${ref}_empresa`}
                    onChange={handleChange}
                    value={formData[`${ref}_empresa`]}
                    placeholder="Ej: Empresa XYZ"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-2">
                    Cargo
                  </label>
                  <input
                    type="text"
                    name={`${ref}_cargo`}
                    onChange={handleChange}
                    value={formData[`${ref}_cargo`]}
                    placeholder="Ej: Supervisor"
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-medium mb-2">
                    Nombre de la Persona
                  </label>
                  <input
                    type="text"
                    name={`${ref}_nombre`}
                    onChange={handleChange}
                    value={formData[`${ref}_nombre`]}
                    placeholder="Ej: Juan Pérez"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-2">
                    Tiempo Laborado
                  </label>
                  <input
                    type="text"
                    name={`${ref}_tiempo`}
                    onChange={handleChange}
                    value={formData[`${ref}_tiempo`]}
                    placeholder="Ej: 2 años"
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">
                  WhatsApp de Contacto
                </label>
                <input
                  type="text"
                  name={`${ref}_whatsapp`}
                  onChange={handleChange}
                  value={formData[`${ref}_whatsapp`]}
                  placeholder="Ej: 5512345678"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          ))}
          {/* Botón de envío */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 font-bold rounded hover:bg-blue-700"
          >
            Quiero ser parte de este equipo
          </button>
        </form>
      </div>
    </div>
  );
}

export default Recursoshumanos;
