/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  trailingSlash: true,
  // output: "export",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Slug viejo con guion bajo: Google lo lee como una sola palabra.
      // 301 permanente para conservar el posicionamiento y los links ya compartidos.
      {
        source: '/chile_en_nogada',
        destination: '/chiles-en-nogada-cdmx/',
        permanent: true,
      },
      // Copias casi identicas de /jueves_mariachi que competian por la misma
      // busqueda. Ninguna recibia enlaces internos, asi que se consolidan ahi.
      // (/reserva NO se redirige: 208 enlaces internos apuntan a ella y es la
      // pagina general de reservas del sitio.)
      {
        source: '/reserva_jueves',
        destination: '/jueves_mariachi/',
        permanent: true,
      },
      {
        source: '/reservaciones',
        destination: '/jueves_mariachi/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
