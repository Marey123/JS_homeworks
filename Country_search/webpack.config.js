const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: `./src/script/script.js`,
  },
  output: {
    filename: `[name].bundle.js`,
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "style.css" }),
    new HtmlWebpackPlugin({
      template: `./src/html/index.html`,
    }),
    new CleanWebpackPlugin({}),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 2200,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", 
        {loader: MiniCssExtractPlugin.loader, options: { esModule: false }},"css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
    ],
  },
};