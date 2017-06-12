const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "eventsource-polyfill", // necessary for hot reloading with IE
    "webpack-hot-middleware/client",
    "./src/index",
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      tensuConfig: "tensuConfig",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      tensuConfig: path.join(path.resolve(), "taupahji.config.js"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader", "strict-loader"],
        include: path.join(__dirname, "src"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
        use: {
          loader: "url-loader",
          options: { limit: 1 },
        },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
};
