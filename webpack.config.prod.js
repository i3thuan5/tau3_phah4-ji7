const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: [
    "babel-polyfill",
    "./src/index",
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      sourceMap: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
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
