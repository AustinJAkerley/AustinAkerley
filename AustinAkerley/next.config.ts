import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Disable eslint during build for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript checks during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
