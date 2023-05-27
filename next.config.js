/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
}

module.exports = {
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