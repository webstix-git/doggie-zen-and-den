/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      { source: '/index.html', destination: '/' },
      { source: '/thank-you.html', destination: '/thank-you' },
    ];
  },
};

export default nextConfig;
