/** @type {import('next').NextConfig} */
const nextConfig = {
  // Retirer 'output: standalone' pour Netlify
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Nécessaire pour Netlify sans Next.js Image Optimization
  },
}

module.exports = nextConfig
