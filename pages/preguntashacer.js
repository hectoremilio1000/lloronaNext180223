import { useState } from 'react';
import { useRouter } from 'next/router';
import ModalRegistroUsuario from '../components/chatgtp/ModalRegistroUsuario';
import Formulario from '../components/chatgtp/formulario';

export default function PreguntasHacer() {
  const [usuario, setUsuario] = useState(null);
  const [modalOpen, setModalOpen] = useState(true); // Forzar registro inicial
  const router = useRouter();

  const handleSaveUsuario = (nuevoUsuario) => {
    if (nuevoUsuario?.id_usuario) {
      console.log('Usuario registrado:', nuevoUsuario);
      setUsuario({ id: nuevoUsuario.id_usuario, ...nuevoUsuario });
      setModalOpen(false); // Cerrar modal después de registrar
    } else {
      alert('Error al registrar usuario. Por favor, intenta de nuevo.');
    }
  };

  const handleFormularioCompleto = async (respuestas) => {
    if (usuario?.id) {
      try {
        // Generar recomendaciones
        const res = await fetch('/api/chatgtp/postrecomendaciones', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id_usuario: usuario.id, respuestas }),
        });

        if (!res.ok) throw new Error('Error al generar recomendaciones.');

        console.log('Recomendaciones generadas con éxito.');
        router.push(`/recomendaciones?id_usuario=${usuario.id}`);
      } catch (error) {
        alert('Error al generar recomendaciones: ' + error.message);
      }
    } else {
      alert('Error: No se encontró el ID del usuario.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
        Preguntas
      </h1>
      {modalOpen && (
        <ModalRegistroUsuario
          onClose={() => setModalOpen(false)}
          onSave={handleSaveUsuario} // Llama a la API de registro de usuario
        />
      )}
      {usuario && (
        <Formulario usuario={usuario} onComplete={handleFormularioCompleto} />
      )}
    </div>
  );
}
