module.exports = {
  plugins: {
    tailwindcss: {},
    ...(process.env.NODE_ENV === `production`
      ? {
          "@fullhuman/postcss-purgecss": {
            content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          },
          autoprefixer: {}
        }
      : {}),
    "postcss-preset-env": {}
  }
};
