/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages (a project site served at /<repo>), the build
// needs a basePath/assetPrefix. Gated on GITHUB_PAGES so local dev and other
// hosts (e.g. Vercel) keep serving from the root.
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "cognito";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : undefined,
};

export default nextConfig;
