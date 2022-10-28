const withOffline = require("next-offline");
require("dotenv").config();

const nextConfig = {
  target: "serverless",
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
      "/community": { page: "/community" },
      "/projects": { page: "/projects" },
    };
  },
  i18n: {
    locales: ["en", "es", "mi"],
    defaultLocale: "en",
  },
};

module.exports = withOffline(nextConfig);
