const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src/components');
var DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        // test: /\.(js|jsx)$/,
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader']
      }
    ]
  }
};