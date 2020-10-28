const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "nit-black": "#111111",
        "nit-grey": "#717171",
        "nit-light-grey": "#c2c2c2",
        "nit-white": "#ffffff",
        "nit-dark": "#8f6233",
        "nit-primary": "#c69662",
        "nit-light": "#e1C8ad",
        "nit-earth": "#41e783",
        "nit-water": "#2986ff",
      },
    },
  },
  variants: false,
  experimental: {
    darkModeVariant: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
