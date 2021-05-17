const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
      new MiniCssExtractPlugin({ filename: "styles.css" }),
      new HtmlWebpackPlugin({ template: "./src/index.html" }),
    ],
    entry: "./src/script.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
    },
  
    module: {
      rules: [
        {
            test: /\.svg$/,
            use: [
              {
                loader: "svg-url-loader",
                options: {
                  limit: 10000,
                },
              },
            ],
          },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            { loader: MiniCssExtractPlugin.loader, options: { esModule: false } },
            "css-loader",
          ],
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: ["file-loader"],
          },
          {
            test: /\.hbs$/,
            loader: "handlebars-loader",
          },
        {
            test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            { loader: MiniCssExtractPlugin.loader, options: { esModule: false } },
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin()],
     
    },
  
    devServer: {
      open: true,
    },
  };
  