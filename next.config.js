/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/api/sitemap',
        permanent: true,
      },
    ];
  },
};
