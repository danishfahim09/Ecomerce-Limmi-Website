/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "b68tf4oq7h.ufs.sh",
        pathname: '**',

      },
    ],
  }
};

export default nextConfig;
