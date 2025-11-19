import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Временно отключаем React Compiler из-за несовместимости с WASM (@lottiefiles/dotlottie-react)
  reactCompiler: false,
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;
