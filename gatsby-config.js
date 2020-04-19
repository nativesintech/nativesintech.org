module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("postcss-preset-env"),
          ...(process.env.NODE_ENV === "production"
            ? [require("autoprefixer")]
            : []),
        ],
      },
    },
  ],
};
