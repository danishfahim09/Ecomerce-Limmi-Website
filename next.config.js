/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
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

export default nextConfig;
