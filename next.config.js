/** @type {import('next').NextConfig} */

const repo = 'Kairos-Website'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
