const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: [ 'style', 'css-loader', 'postcss-loader' ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded',
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192',
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, '../')
      }
    ]
  }
};
