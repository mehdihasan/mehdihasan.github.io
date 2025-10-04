/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://datadreamscape.com',
  generateRobotsTxt: true,
  outDir: './out',
  additionalSitemaps: [
    'https://datadreamscape.com/sitemap-posts.xml',
  ],
};
