// pages/reservar.js

export async function getServerSideProps({ query }) {
  // 1) Tu número con lada
  const PHONE = '525549242477';

  // 2) Mensaje por defecto si no mandas ninguno
  const defaultText =
    'Hola, quiero reservar mesa familiar este domingo en Cantina La Llorona. Personas: __ Hora: __';

  // 3) Permite sobreescribir el mensaje con ?m=...
  const textParam = typeof query.m === 'string' ? query.m : defaultText;

  // 4) Construye el link de WhatsApp
  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(textParam)}`;

  // 5) Redirección 301 desde tu dominio al WhatsApp
  return {
    redirect: {
      destination: waUrl,
      permanent: true,
    },
  };
}

export default function Reservar() {
  // Nunca se renderiza porque redirige del lado servidor
  return null;
}
