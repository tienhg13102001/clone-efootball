import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['p9-sign-sg.tiktokcdn.com', "p16-sign-sg.tiktokcdn.com"], // Thêm hostname của TikTok
  },
};

export default nextConfig;
