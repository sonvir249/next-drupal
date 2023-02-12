/** @type {import('next').NextConfig} */

module.exports = async () => {
  const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
      ],
    },
  }
  return nextConfig  
}
