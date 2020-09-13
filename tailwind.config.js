module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {},
  },
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
