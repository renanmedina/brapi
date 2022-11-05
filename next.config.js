/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    appDir: true,
    transpilePackages: [
      'react-syntax-highlighter',
      'swagger-client',
      'swagger-ui-react',
    ],
  },
};
