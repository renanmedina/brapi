const withImages = require('next-images');
/** @type {import('next').NextConfig} */
module.exports = withImages({
  images: {
    domains: ['s3-symbol-logo.tradingview.com'],
  },
  swcMinify: true,
});
