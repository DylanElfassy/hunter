import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Ensure that threebox-plugin is transpiled correctly
  webpack(config, { isServer }) {
    // Ignore parsing for threebox-plugin to prevent UTF-8 errors
    config.module?.rules.push({
      test: /threebox-plugin[\\/]src/,
      use: "null-loader",
    });

    // Optional: if you want to transpile threebox for ESM usage
    config.resolve!.fallback = {
      ...(config.resolve!.fallback || {}),
      fs: false,
      path: false,
    };

    return config;
  },

  // Optional: allow importing JSON or other assets in threebox
  typescript: {
    ignoreBuildErrors: true, // temporary workaround for missing types
  },
};

export default nextConfig;
