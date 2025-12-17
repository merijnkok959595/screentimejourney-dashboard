/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Point to marketing-site directory
  distDir: './marketing-site/.next',
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**',
      },
    ],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Tell Next.js where to find the source files
  experimental: {
    outputFileTracingRoot: path.join(__dirname, './marketing-site'),
  }
};

module.exports = nextConfig;