/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  trailingSlash: true,
  // output: "export",
  images: {
    unoptimized: true,
  },
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Incrementa el límite a 10 MB
    },
  },
};

module.exports = nextConfig;
