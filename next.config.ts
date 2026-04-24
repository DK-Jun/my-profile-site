import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-profile-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
