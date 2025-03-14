import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        CONTENTSTACK_API_KEY: process.env.CONTENTSTACK_API_KEY ,
        CONTENTSTACK_DELIVERY_TOKEN: process.env.CONTENTSTACK_DELIVERY_TOKEN,
        CONTENTSTACK_BRANCH: process.env.CONTENTSTACK_BRANCH ? process.env.CONTENTSTACK_BRANCH : 'main',
        CONTENTSTACK_ENVIRONMENT: process.env.CONTENTSTACK_ENVIRONMENT,
        CONTENTSTACK_APP_HOST: process.env.CONTENTSTACK_APP_HOST,
        CONTENTSTACK_PREVIEW_HOST: process.env.CONTENTSTACK_PREVIEW_HOST,
        CONTENTSTACK_PREVIEW_TOKEN: process.env.CONTENTSTACK_PREVIEW_TOKEN,
        CONTENTSTACK_LIVE_EDIT_TAGS: process.env.CONTENTSTACK_LIVE_EDIT_TAGS,
        CONTENTSTACK_API_HOST: process.env.CONTENTSTACK_API_HOST,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'eu-images.contentstack.com'
            }
        ]
    }
};

export default nextConfig;
