/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["alwin-ecommerce.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
