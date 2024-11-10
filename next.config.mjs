import autoCert from 'anchor-pki/auto-cert/integrations/next'

const withAutoCert = autoCert({
  enabledEnv: 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict mode forces components render twice, it breaks some functionality
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.bolt.eu',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

export default withAutoCert(nextConfig)
