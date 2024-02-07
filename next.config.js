/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/Kairos-Website",
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
