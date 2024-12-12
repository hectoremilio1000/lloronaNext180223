import React, { useEffect, useState } from 'react';

function Recursoshumanosrevisar() {
  const [candidatos, setCandidatos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener candidatos desde la API
  useEffect(() => {
    const fetchCandidatos = async () => {
      try {
        const response = await fetch('/api/getCandidatos');
        const data = await response.json();
        setCandidatos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener candidatos:', error);
        setLoading(false);
      }
    };

    fetchCandidatos();
  }, []);

  // Guardar comentarios en la base de datos
  const handleCommentSave = async (id, comentarios) => {
    try {
      const response = await fetch('/api/updateCandidato', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, comentarios }),
      });

      if (response.ok) {
        const updatedCandidato = await response.json();
        setCandidatos((prev) =>
          prev.map((candidato) =>
            candidato.id === id ? updatedCandidato : candidato
          )
        );
      } else {
        console.error('Error al guardar comentarios:', await response.json());
      }
    } catch (error) {
      console.error('Error al enviar los comentarios:', error);
    }
  };

  // Alternar el estado de descartado
  const handleToggleDescartar = async (id, currentState) => {
    try {
      const newState = currentState === 1 ? 0 : 1;
      const response = await fetch('/api/updateCandidato', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, descartado: newState }),
      });

      if (response.ok) {
        const updatedCandidato = await response.json();
        setCandidatos((prev) =>
          prev.map((candidato) =>
            candidato.id === id ? updatedCandidato : candidato
          )
        );
      } else {
        console.error(
          'Error al alternar estado de descartado:',
          await response.json()
        );
      }
    } catch (error) {
      console.error('Error al alternar estado de descartado:', error);
    }
  };

  if (loading) {
    return (
      <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '20px' }}>
        Cargando candidatos...
      </p>
    );
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
                <button
                  onClick={() =>
                    handleToggleDescartar(candidato.id, candidato.descartado)
                  }
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    padding: '5px 10px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  {Number(candidato.descartado) === 1
                    ? 'Quitar Descartado'
                    : 'Descartar'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recursoshumanosrevisar;
