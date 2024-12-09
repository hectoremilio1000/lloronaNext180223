import React, { useEffect, useState } from 'react';

export default function Inversionistasrevisar() {
  const [contactos, setContactos] = useState([]); // Estado para guardar los contactos
  const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga

  useEffect(() => {
    // Función para obtener los datos desde la API
    const fetchContactos = async () => {
      try {
        const response = await fetch('/api/getContactos'); // Llama a la API
        const data = await response.json(); // Convierte la respuesta a JSON
        setContactos(data); // Guarda los datos en el estado
        setLoading(false); // Desactiva el estado de carga
      } catch (error) {
        console.error('Error al obtener contactos:', error);
        setLoading(false);
      }
    };

    fetchContactos(); // Llama a la función al cargar el componente
  }, []);

  if (loading) {
    return <p>Cargando contactos...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Contactos</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Nombre</th>
            <th className="border border-gray-300 px-4 py-2">WhatsApp</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">
              Fecha de Registro
            </th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => (
            <tr key={contacto.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {contacto.id}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {contacto.nombre}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {contacto.whatsapp}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {contacto.email}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(contacto.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
