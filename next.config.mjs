/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co'
      },
      {
        protocol: 'https',
        hostname: 'images.bolt.eu'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
}

export default nextConfig
