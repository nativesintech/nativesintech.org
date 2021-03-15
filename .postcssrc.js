/**
 * When storybook tries to load from postcss.config.js
 * it fails because it expects the plugins to be wrapped
 * in a require statements. When I try to run nextjs
 * with the plugins wrapped in a require statement it
 * tells me they should not be wrapped in a require statement.
 * In order to simplify this process, I created this file which
 * storybook looks for *before* postcss.config.js. That means,
 * this config is used for storybook while the other is used for
 * nextjs 🙄
 */

module.exports = {
  plugins: {
    "@tailwindcss/jit": {},
    autoprefixer: {},
  },
};
