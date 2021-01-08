const path = require('path')
const fs = require('fs')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//const { ALL } = require('dns')
const CopyWepbackPlugin = require('copy-webpack-plugin')
const MiniCssWebpackPlugin = require('mini-css-extract-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
//const TerserWebpackPlugin = require('terser-webpack-plugin')

const PATHS = {
  // src must be src
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  //assets: 'static/'
}

const PAGES_DIR = `${PATHS.src}/pages/pug`
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith('.pug'))

const PAGES_DIR_JS = `${PATHS.src}/`
const PAGES_JS = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith('.js'))

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      //new TerserWebpackPlugin(),
    ]
  }

  return config
}

function getEntires(pages) {
  return Object.assign(
    {},
    /*...pages.map(({ template }) => {
			if (!template) return {};

			return {
				[template]: [`./src/templates/${template}/${template}.js`],
			};
		}),*/
    ...pages.map(({ name }) => {
      if (!name) return {}

      return {
        [name]: [`./src/pages/entry/${name}.js`],
      }
    })
  )
}
const pages = [
  {
    name: 'colorsAndTypes',
    template: 'main',
  } /*
	{
		name: 'formElements',
		template: 'main',
	},
	{
		name: 'cards',
		template: 'main',
	},
	{
		name: 'headersAndFooters',
		template: 'main',
	},
	{
		name: 'index',
		template: 'main',
	},
	{
		name: 'search',
		template: 'main',
	},
	{
		name: 'room',
		template: 'main',
	},
	{
		name: 'login',
		template: 'main',
	},
	{
		name: 'registration',
		template: 'main',
	},*/,
]

module.exports = {
  //context: path.resolve(__dirname, './src/script/'),
  mode: 'development',
  entry: getEntires(pages),
  /*entry: {
    colorAndTypes: './colorAndTypes.js',
  },*/
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
  optimization: optimization(),

  plugins: [
    /* new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),*/
    ...PAGES.map(
      (page) =>
        new HTMLWebpackPlugin({
          template: `${PAGES_DIR}/${page}/`,
          filename: `./${page.replace(/\.pug/, '.html')}`,
          minify: {
            collapseWhitespace: isProd,
          },
        })
    ),
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
        test: /\.pug$/,
        loader: 'pug-loader?pretty=true',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            /*options: {
              hmr: true,
              reloadAll: true,
            },*/
          },
          'css-loader',
        ],
      },
      {
        test: /\.(sass|scss)$$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            /*options: {
              hmr: true,
              reloadAll: true,
            },*/
          },
          'css-loader',
          'sass-loader',
        ],
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
