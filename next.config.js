module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        /* config options here */
    }
    module.exports = {
        images: {
            unoptimized: true
        }
    }
    return nextConfig
}