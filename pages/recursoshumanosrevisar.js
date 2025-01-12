import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Recursoshumanosrevisar() {
  const [candidatos, setCandidatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Obtener candidatos desde la API
  const fetchCandidatos = async () => {
    try {
      const response = await fetch('/api/candidatos/get');
      const data = await response.json();
      setCandidatos(data);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener candidatos:', error);
      setLoading(false);
    }
  };

  // Guardar comentarios en la base de datos

  const handleCommentSave = async (id, comentarios) => {
    if (!id || !comentarios) {
      console.error('Datos faltantes:', { id, comentarios });
      return;
    }

    try {
      const response = await fetch('/api/candidatos/put', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, comentarios, estado: 'Por Revisar' }),
      });

      if (!response.ok) {
        console.error('Error al guardar comentarios:', await response.json());
      } else {
        console.log('Comentario guardado.');
      }
    } catch (error) {
      console.error('Error al enviar los comentarios:', error);
    }
  };

  const handleEstadoChange = async (id, newEstado, candidato) => {
    if (newEstado === 'Iniciar Examen') {
      try {
        const response = await fetch('/api/preguntas/preguntas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            candidatoId: id,
            puesto: candidato.puesto,
            etapa: 'psicométricos',
          }),
        });

        if (response.ok) {
          const data = await response.json();
          // Redirigir al examen con el intentoId calculado
          router.push(
            `/examen/${candidato.id}?intentoId=${data.intentoId}&puesto=${candidato.puesto}`
          );
        } else {
          const error = await response.json();
          console.error('Error al iniciar examen:', error);
        }
      } catch (error) {
        console.error('Error al cambiar estado:', error);
      }
      return;
    }

    // Lógica para otros estados
    try {
      const response = await fetch('/api/candidatos/put', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          estado: newEstado,
          comentarios: candidato.comentarios,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Error al actualizar el estado:', error);
      } else {
        console.log('Estado actualizado correctamente.');
        setCandidatos((prev) =>
          prev.map((c) => (c.id === id ? { ...c, estado: newEstado } : c))
        );
      }
    } catch (error) {
      console.error('Error al cambiar estado:', error);
    }
  };

  useEffect(() => {
    fetchCandidatos();
  }, []);

  if (loading) {
    return <p>Cargando candidatos...</p>;
  }

  if (candidatos.length === 0) {
    return <p>No hay candidatos registrados.</p>;
  }

  if (candidatos.length === 0) {
    return (
      <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '20px' }}>
        No hay candidatos registrados.
      </p>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      <h1
        style={{
          fontSize: '24px',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#374D3E',
        }}
      >
        Lista de Candidatos
      </h1>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}
      >
        <thead style={{ backgroundColor: '#374D3E', color: 'white' }}>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nombre</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>
              WhatsApp
            </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Puesto</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>CV</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>
              Referencia 1 Empresa
            </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>
              Referencia 1 WhatsApp
            </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>
              Referencia 2 Empresa
            </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>
              Referencia 2 WhatsApp
            </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>
              Comentarios
            </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {candidatos.map((candidato) => (
            <tr
              key={candidato.id}
              style={{
                backgroundColor:
                  Number(candidato.descartado) === 1
                    ? '#f8d7da'
                    : candidato.comentarios
                    ? '#d4edda'
                    : 'white',
              }}
            >
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'center',
                }}
              >
                {candidato.id}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {candidato.nombre}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <a
                  href={`https://wa.me/${candidato.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'green', textDecoration: 'underline' }}
                >
                  {candidato.whatsapp}
                </a>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {candidato.email}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {candidato.puesto}
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'center',
                }}
              >
                {candidato.cv_path && candidato.cv_path !== 'null' ? (
                  <a
                    href={candidato.cv_path}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Ver/Descargar CV
                  </a>
                ) : (
                  'No disponible'
                )}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {candidato.referencia1_empresa || 'N/A'}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <a
                  href={`https://wa.me/${candidato.referencia1_whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'green', textDecoration: 'underline' }}
                >
                  {candidato.referencia1_whatsapp || 'N/A'}
                </a>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {candidato.referencia2_empresa || 'N/A'}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <a
                  href={`https://wa.me/${candidato.referencia2_whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'green', textDecoration: 'underline' }}
                >
                  {candidato.referencia2_whatsapp || 'N/A'}
                </a>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <textarea
                  value={candidato.comentarios || ''}
                  onChange={(e) =>
                    setCandidatos((prev) =>
                      prev.map((c) =>
                        c.id === candidato.id
                          ? { ...c, comentarios: e.target.value }
                          : c
                      )
                    )
                  }
                  style={{
                    width: '100%',
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                  placeholder="Agregar comentarios"
                />
                <button
                  onClick={() =>
                    handleCommentSave(candidato.id, candidato.comentarios)
                  }
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '5px 10px',
                    marginTop: '5px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Guardar
                </button>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <select
                  value={candidato.estado || 'Por Revisar'}
                  onChange={(e) =>
                    handleEstadoChange(candidato.id, e.target.value, candidato)
                  }
                  style={{
                    padding: '5px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                >
                  <option value="Por Revisar">Por Revisar</option>
                  <option value="Iniciar Examen">Iniciar Examen</option>
                  <option value="Examen Finalizado">Examen Finalizado</option>
                  <option value="Aprobado">Aprobado</option>
                  <option value="Descartado">Descartado</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recursoshumanosrevisar;
