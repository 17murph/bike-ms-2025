/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default (async () => {
  let userConfig;
  try {
    userConfig = (await import('./v0-user-next.config')).default;
  } catch (e) {
    // No user config found; proceed with default config
  }

  if (userConfig) {
    for (const key in userConfig) {
      if (
        typeof nextConfig[key] === 'object' &&
        !Array.isArray(nextConfig[key])
      ) {
        nextConfig[key] = {
          ...nextConfig[key],
          ...userConfig[key],
        };
      } else {
        nextConfig[key] = userConfig[key];
      }
    }
  }

  return nextConfig;
})();