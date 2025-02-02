/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  basePath: "/fasy-midterm",  // Change to your GitHub repo name
  assetPrefix: "/fasy-midterm/",
  trailingSlash: true,  // ✅ Fix for GitHub Pages 404 issue
};

module.exports = nextConfig;
