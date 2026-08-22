module.exports = {
  siteUrl: process.env.SITE_URL || 'https://lalloronacantina.com',
  generateRobotsTxt: true, // (optional)
  // Sin outDir: next-sitemap escribe a public/, que es lo que Vercel sirve.
  // Antes apuntaba a './out' (del export estatico, ya desactivado en
  // next.config.js), asi que el sitemap se generaba donde nadie lo leia y
  // el sitio servia un public/sitemap-0.xml congelado desde marzo 2023 con
  // solo 14 URLs de las 96 reales.
};
