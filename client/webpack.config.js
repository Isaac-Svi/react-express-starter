const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {
  proxy: { host, target },
} = require('./package.json');

module.exports = {
  mode: 'development',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    compress: true,
    port: 3000,
    proxy: {
      [target]: host,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
    }),
  ],
};
