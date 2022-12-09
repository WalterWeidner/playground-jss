const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
      publicPath: "/",
      watch: true,
    },
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
    watchFiles: ["src/**/*", "node_modules/**/*"],
  },
  entry: path.resolve(__dirname, "./src/index.tsx"),
  mode: "development",
  module: {
    rules: [
      {
        include: path.resolve(__dirname, "./src"),
        test: /\.(ts|tsx)$/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve("./public/index.html"),
      template: path.resolve("./src/index.html"),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  snapshot: {
    managedPaths: [],
  },
};
