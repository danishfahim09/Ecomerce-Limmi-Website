/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io', 'cdn.uploadthing.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "b68tf4oq7h.ufs.sh",
        pathname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
