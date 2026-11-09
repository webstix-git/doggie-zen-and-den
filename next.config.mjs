/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  // Render <title>/<meta> inside <head> for every visitor instead of streaming them into <body>.
  htmlLimitedBots: /.*/,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/thank-you.html', destination: '/thank-you', permanent: true },
    ];
  },
};

export default nextConfig;
