const path = require('path')
const MiniCssExtractorPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
   'hello': './src/hello.js',
   'kiwi': './src/kiwi.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      automaticNameDelimiter: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractorPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractorPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    //for separate bundle css
    new MiniCssExtractorPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'hello.html',
      chunks: ['hello', 'vendors~hello-world-kiwi'],
      title: 'learn Webpack 5',
      template: 'src/page-template.hbs',
    }),
    new HtmlWebpackPlugin({
      filename: 'kiwi.html',
      chunks: ['kiwi', 'vendors~hello-world-kiwi'],
      title: 'learn Webpack 5',
      template: 'src/page-template.hbs',
    }),
  ],
}
