const path = require('path');

const config = {
  entry: __dirname + '/src/app.tsx',
  html: './index.html',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {loader: 'ts-loader'}
        ]
      }
    ]
  },
  devServer: {
    inline: true,
    hot: true
  }
};

module.exports = config;
