import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/wedding-memories" : "",
  assetPrefix: isGithubPages ? "/wedding-memories/" : "",
};

export default nextConfig;
