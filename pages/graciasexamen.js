import React from 'react';

function Graciasexamen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600">
          ¡Gracias por completar el examen!
        </h1>
        <p className="text-gray-700 mt-4">
          Tus respuestas han sido registradas con éxito. Nuestro equipo se
          pondrá en contacto contigo pronto.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow transition duration-200"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Graciasexamen;
