const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const {
  proxy: { host, target },
} = require('./package.json')

module.exports = {
  mode: 'development',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    publicPath: '/',
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    compress: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
    },
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
}
