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
    ];
  },
};

module.exports = nextConfig;
