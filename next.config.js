/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    appDir: true,
    transpilePackages: [
      'react-syntax-highlighter',
      'swagger-client',
      'swagger-ui-react',
    ],
  },
};
