const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const VENDOR_LIBS = ["react", "react-dom"];

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src", "public", "js", "main.js"),
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?/,
        exclude: /node_modules/
      },
      { loader: ["style-loader", "css-loader"], test: /\.css$/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};
