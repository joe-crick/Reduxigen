module.exports = {
  entry: {
    index: "./esm/index.js",
    connect: "./esm/connected/connected",
    actions: "./esm/action-creator/action-creator"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    react: "commonjs react"
  },
  resolve: {
    extensions: ["*", ".js"]
  }
};
