module.exports = {
  entry: {
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
          loader: "babel-loader",
          options: {
            babelrc: false,
            configFile: false,
            presets: [
              [require.resolve("@babel/preset-env"), { modules: "commonjs" }],
              [require.resolve("@babel/preset-react"), { runtime: "automatic" }]
            ]
          }
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
