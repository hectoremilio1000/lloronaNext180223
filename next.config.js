/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
}

module.exports = {
    nextConfig,
    trailingSlash: true,
    images: {
        unoptimized: true,
    },

    async redirects() {
        return [
            {
                source: '/menullorona',
                destination: '/menullorona',
                permanent: true,
            },

        ];
    },
}