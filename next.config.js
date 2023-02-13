/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
  },
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["media.graphassets.com"],
  },
};

module.exports = nextConfig;
