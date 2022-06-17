/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path(.*)',
          has: [{ type: 'query', key: 'proxy', value: 'true' }],
          destination: '/api/proxy?path=:path',
        },
      ],
    }
  },
}

module.exports = nextConfig
