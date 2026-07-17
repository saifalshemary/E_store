import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   eslint: {
     // هذا السطر يخبر Vercel بتجاهل تحذيرات ESLint أثناء عملية الـ Build
     ignoreDuringBuilds: true,
   },
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