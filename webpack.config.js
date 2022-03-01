const { resolve } = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "index.js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx|jsx$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
