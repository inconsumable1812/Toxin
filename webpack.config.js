const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const devMode = process.env.NODE_ENV === 'development'

const pagesDir = './src/pages'

const createEntriesFromPageList = (pages) => {
  const webpackPageEntries = {}
  const htmlWebpackPageInstances = []

  pages.forEach((pageName) => {
    webpackPageEntries[pageName] = `${pagesDir}/${pageName}/${pageName}.js`
    htmlWebpackPageInstances.push(
      new HtmlWebpackPlugin({
        filename: `${pageName}.html`,
        template: `${pagesDir}/${pageName}/${pageName}.pug`,
        chunks: [pageName],
      })
    )
  })

  return [webpackPageEntries, htmlWebpackPageInstances]
}

const [webpackPageEntries, htmlWebpackPageInstances] = createEntriesFromPageList(fs.readdirSync(pagesDir))

const config = {
  entry: {
    favicon: './src/favicons/favicons.js',
    logo: './src/components/logo/logo.js',
    ...webpackPageEntries,
  },
  output: {
    filename: devMode ? '[name].js' : '[name].[hash].js',
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader', options: {} },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          {
            loader: 'resolve-url-loader',
            options: {
              debug: true,
              sourceMap: false,
              removeCR: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [path.resolve(__dirname, './src/img/'), path.resolve(__dirname, './src/components/')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        exclude: [path.resolve(__dirname, './src/assets'), path.resolve(__dirname, './src/favicons/')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 4200,
    hot: true,
    compress: true,
    open: true,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    ...htmlWebpackPageInstances,
  ],
}

module.exports = config
