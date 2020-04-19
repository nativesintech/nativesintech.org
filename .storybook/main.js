const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

module.exports = {
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/preset-typescript",
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-react-jsx"],
          },
        },
        {
          loader: "@mdx-js/loader",
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve("@storybook/source-loader"),
      exclude: [/node_modules/],
      enforce: "pre",
    });
    return config;
  },
};
