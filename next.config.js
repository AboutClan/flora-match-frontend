/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "studyabout.s3.ap-northeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "localhost:3000",
      },
    ],
  },
};

module.exports = nextConfig;
