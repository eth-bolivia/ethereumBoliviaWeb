import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'aclyw5rm3tvukr5i.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
