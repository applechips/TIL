module.exports = {
  // tell webpack where our root component is:
  entry: './app/components/Main.js',
  // tell webpack where to put the new file after it's done combining everything into one file
  output: {
    filename: 'public/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }


};
