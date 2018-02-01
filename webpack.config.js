var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./js/main.js',
          './css/main.scss'],
  output: {
    filename: './js/bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
      loader: 'css-loader?importLoaders=1',
      }),
    },
    {
    test: /\.(sass|scss)$/,
    loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }
  ]},
  plugins: [
    new ExtractTextPlugin({
      filename: './css/bundle.css',
      allChunks: true,
    })
  ],
  devServer: {
    port: 3000,
    contentBase: './',
    inline: true
  }
}
