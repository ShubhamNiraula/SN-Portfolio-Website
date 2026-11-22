/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Build a plain static website (HTML/CSS/JS) into the "out" folder,
  // which GitHub Pages can host.
  output: "export",
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true }
};

export default nextConfig;
