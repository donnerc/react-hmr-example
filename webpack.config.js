module.exports = {
  entry: [
    // these lignes allow the hot reloading within Cloud9 ...
    'webpack-dev-server/client?https://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    "./index.js",
  ],
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {
        presets: [ "es2015", "react", "react-hmre" ]
      }
    }]
  }
}
