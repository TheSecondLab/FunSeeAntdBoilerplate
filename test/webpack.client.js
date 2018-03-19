const path = require('path');

module.exports = {
  entry: './test.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'test.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    }]
  }
};
