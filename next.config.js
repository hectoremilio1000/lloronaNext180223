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
    i18n: {
        locales: ['es', 'en'], // Lista de códigos de idioma que deseas soportar
        defaultLocale: 'es', // El idioma predeterminado
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