/** @type {import('next').NextConfig} */
const baseConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

let userConfig = {}
try {
  // Use `require()` instead of `await import()` to keep it synchronous
  userConfig = require('./v0-user-next.config')
} catch (e) {
  // ignore error
}

const mergedConfig = {
  ...baseConfig,
  ...userConfig,
  // If either config has nested objects (like `images`), merge those too
  images: {
    ...baseConfig.images,
    ...userConfig.images,
  },
  experimental: {
    ...baseConfig.experimental,
    ...userConfig.experimental,
  },
}

module.exports = mergedConfig