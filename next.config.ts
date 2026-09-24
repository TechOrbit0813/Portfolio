import type { NextConfig } from "next";

// Server mode is the default so the built-in /api/chat route can run on Vercel
// or another Node.js host. `npm run build:static` enables static export for
// GitHub Pages and temporarily excludes the server-only API route.
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.BASE_PATH || "";

const immutableAssetHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable",
  },
];

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const } : {}),
  ...(!isStaticExport
    ? {
        async headers() {
          return [
            {
              source: "/assets/optimized/:path*",
              headers: immutableAssetHeaders,
            },
            {
              source: "/assets/:path*",
              headers: [
                {
                  key: "Cache-Control",
                  value:
                    "public, max-age=604800, stale-while-revalidate=86400",
                },
              ],
            },
          ];
        },
      }
    : {}),
  basePath,
  compress: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  trailingSlash: true,
  // Allows the dev server to be reached from other devices on the LAN
  // (e.g. http://192.168.x.x:3000) without Next.js 16's dev-only
  // cross-origin guard blocking JS chunks and the HMR websocket with a 403.
  // Has no effect in production. Add more entries here if your LAN IP
  // changes or you test from other private-network ranges.
  allowedDevOrigins: ["192.168.0.56", "192.168.*.*"],
};

export default nextConfig;
