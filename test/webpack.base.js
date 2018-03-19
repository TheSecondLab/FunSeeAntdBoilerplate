const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

function getExternals() {
  return fs.readdirSync(path.resolve(__dirname, '../node_modules'))
    .filter(filename => !filename.includes('.bin'))
    .reduce((externals, filename) => {
      externals[filename] = `commonjs ${filename}`;
      return externals;
    }, {});
}

const test = () => {
  const obj = getExternals();
  obj['any-promise'] = 'commonjs any-promise';

  return obj;
};

module.exports = {
  entry: './server/server.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  externals: test()
};
