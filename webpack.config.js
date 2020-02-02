const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ["./src/libraries/impress.js", "./src/index.js"],
  mode: "development",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     "postcss-loader",
      //   ]
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          // "style-loader",
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // autoprefixer
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  }
};
