/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.redd.it', 'preview.redd.it'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.redd.it',
      },
    ],
  },
}

module.exports = nextConfig

