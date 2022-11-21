const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        // test: /\.css$/i,
        test: /\.scss$/i,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    // new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 4444,
    open: true,
    hot: true,
  },
  stats: 'errors-only',
};
