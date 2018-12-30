import path from "path";

import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";

module.exports = (/* config: PhenomicConfig */) => ({
  entry: {
    "phenomic.main": [
      process.env.PHENOMIC_ENV !== "static" &&
        require.resolve("webpack-hot-middleware/client"),
      process.env.PHENOMIC_ENV !== "static" &&
        require.resolve("react-hot-loader/patch"),
      "./App.js"
    ].filter(Boolean)
  },
  output: {
    publicPath: "/",
    path: path.join(process.cwd(), "dist"),
    filename: "[name].js"
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          babelrc: false,
          presets: [
            require.resolve("@babel/preset-env"),
            require.resolve("@phenomic/babel-preset")
          ],
          plugins: [require.resolve("react-hot-loader/babel")]
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
      },
      {
        test: /\.svg$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    process.env.PHENOMIC_ENV === "static" &&
      new MiniCssExtractPlugin({
        filename: "styles.css"
      }),
    process.env.PHENOMIC_ENV !== "static" &&
      new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean),

  optimization: {
    minimizer: [
      process.env.NODE_ENV === "production" && new TerserPlugin()
    ].filter(Boolean)
  },

  resolve: {
    // react-native(-web) | react-primitives
    extensions: [".web.js", ".js", ".json"],
    alias: {
      "react-native": "react-native-web",

      // to ensure a single module is used
      react: path.resolve(path.join(process.cwd(), "node_modules", "react")),
      "react-dom": path.resolve(
        path.join(process.cwd(), "node_modules", "react-dom")
      ),
      "react-router": path.resolve(
        path.join(process.cwd(), "node_modules", "react-router")
      )
    }
  },

  // eslint-disable-next-line max-len
  // https://github.com/facebookincubator/create-react-app/blob/fbdff9d722d6ce669a090138022c4d3536ae95bb/packages/react-scripts/config/webpack.config.prod.js#L279-L285
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
});