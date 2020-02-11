const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ["./src/index.js"],
  mode: 'development',
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
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
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|html)$/i,
        // test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
        ],
      },
      // {
      //   test: /\.html$/i,
      //   use: ['html-loader?root=index.html', 'svg-inline-loader'],
      // },
    ],
  },
};
