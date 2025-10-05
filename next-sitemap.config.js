/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://betweensystems.com',
  generateRobotsTxt: true,
  outDir: './out',
  additionalSitemaps: [
    'https://betweensystems.com/sitemap-posts.xml',
  ],
};
