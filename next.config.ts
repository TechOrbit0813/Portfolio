import type { NextConfig } from "next";

// Static export so the site can be hosted on GitHub Pages.
// If deploying to https://<user>.github.io/portfolio/, set BASE_PATH=/portfolio
// (e.g. in the GitHub Actions build step). For a user/root site, leave it unset.
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
