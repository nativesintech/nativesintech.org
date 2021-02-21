const withOffline = require("next-offline");
require("dotenv").config();

const nextConfig = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/donate": { page: "/donate" },
      "/conference": { page: "/conference" },
      "/contact": { page: "/contact" },
    };
  },
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: `/\.(?:png|jpg|jpeg|svg)$/`,
        handler: "CacheFirst",
        options: {
          cacheName: "images",
          expiration: {
            maxAgeSeconds: 30 * 24 * 60 * 60,
            maxEntries: 20,
          },
        },
      },
      {
        urlPattern: `/\.(?:ttf)$/`,
        handler: "CacheFirst",
        options: {
          cacheName: "fonts",
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365,
            maxEntries: 20,
          },
        },
      },
    ],
  },
};

module.exports = withOffline(nextConfig);
