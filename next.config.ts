import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "femacedogomes.github.io",
        port: "",
        pathname: "/portfolio/**",
      },
    ],
  },
  trailingSlash: true,
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  distDir: "dist",
};

export default nextConfig;
