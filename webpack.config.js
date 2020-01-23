const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const VENDOR_LIBS = ["react", "react-dom"];

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src", "public", "js", "main.jsx"),
    vendor: VENDOR_LIBS
  },

  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[chunkhash].js",
    publicPath: "./"
  },
  devServer: {
    contentBase: "./dist"
  },
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output

              hmr: process.env.NODE_ENV === "production"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 40000 }
          },
          "image-webpack-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        },
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  }
};
