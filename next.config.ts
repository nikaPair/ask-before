import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
