import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ["https://preview-chat-519fe884-68c2-4fb3-a58a-1c487e2cf9f1.space-z.ai"],
};

export default nextConfig;
