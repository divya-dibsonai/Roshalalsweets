const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Trimmed from Next.js defaults (8 sizes) to just what your layouts actually need.
    // Adjust these to match your real breakpoints (check your <Image sizes="..."> props).
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [64, 128, 256],
    // Cache optimized images longer so they aren't regenerated as often (in seconds).
    // Default is 60s minimum; bumping this to 30 days cuts re-optimization a lot.
    minimumCacheTTL: 2592000,
  },
}

module.exports = withNextVideo(nextConfig)
