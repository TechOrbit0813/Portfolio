import type { NextConfig } from "next";

// Server mode is the default so the built-in /api/chat route can run on Vercel
// or another Node.js host. `npm run build:static` enables static export for
// GitHub Pages and temporarily excludes the server-only API route.
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const } : {}),
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
