/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'antopolis-backend-du9t.onrender.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
