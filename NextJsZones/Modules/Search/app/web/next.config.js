/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/search',
  assetPrefix: '/search',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;

