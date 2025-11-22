/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/search',
        destination: 'http://localhost:3001/search',
      },
      {
        source: '/search/:path*',
        destination: 'http://localhost:3001/search/:path*',
      },
      {
        source: '/doctor',
        destination: 'http://localhost:3010/doctor',
      },
      {
        source: '/doctor/:path*',
        destination: 'http://localhost:3010/doctor/:path*',
      },
    ];
  },
};

module.exports = nextConfig;

