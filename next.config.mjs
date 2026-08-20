/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['172.27.176.1'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
};

export default nextConfig;