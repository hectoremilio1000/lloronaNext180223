/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  target: 'server',
  trailingSlash: true,
  // output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
