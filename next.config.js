/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
};

module.exports = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
