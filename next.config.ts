import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   experimental: {
      serverActions: {
        bodySizeLimit: '5mb',
      },
    },
    images:{
      remotePatterns:[
        {
          protocol: 'https',
          hostname:'images.pexels.com',
          port:'',
          pathname:'/photos/**'
        },
        {
          protocol: 'https',
          hostname:'wvhkvkzrxvxifhckgvbz.supabase.co'
        },
        {
          protocol: 'https',
          hostname:'img.clerk.com'
        },
        {
          protocol: 'https',
          hostname:'images.clerk.dev'
        }
      ]
    }
    
};

export default nextConfig;