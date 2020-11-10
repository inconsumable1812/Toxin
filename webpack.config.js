const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//const { ALL } = require('dns')
const CopyWepbackPlugin = require('copy-webpack-plugin')
const MiniCssWebpackPlugin = require('mini-css-extract-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/*const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pug/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))*/

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  /* resolve: {
    extension: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },*/
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWepbackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon.png'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
    ],
  },
}
