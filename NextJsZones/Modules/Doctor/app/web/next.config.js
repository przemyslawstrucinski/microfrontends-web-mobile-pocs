/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/doctor',
  assetPrefix: '/doctor',
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

