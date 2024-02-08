const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: isProd, // Minify only in production
};

module.exports = {
  ...nextConfig,
  basePath: isProd ? '/Kairos-Website' : '', // Adjust with your repository name
  assetPrefix: isProd ? '/Kairos-Website/' : '', // Adjust with your repository name
};
