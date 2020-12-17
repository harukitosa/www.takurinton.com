var path = require('path');
var webpack = require('webpack');
const marked = require('marked');
const markdownRenderer = new marked.Renderer();
var sassLintPlugin = require('sasslint-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index.tsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/',
    filename: 'dist/bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.md', 'txt'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'source-map-loader',
      exclude: /node_modules/,
      enforce: 'pre',
    }, {
      test: /\.tsx?$/,
      loader: 'tslint-loader',
      exclude: /node_modules/,
      enforce: 'pre',
    }, {
      test: /\.tsx?$/,
      loaders: [
        'react-hot-loader/webpack',
        'awesome-typescript-loader',
      ],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      // これ無意味
      //  use: ['html-loader', 'markdown-loader'] 
      test: /\.mdx$/,
      // loaders: ['html-lorder', 'markdown-loader', 'raw-loader']
      // use: [
      //   {
      //     loader: 'html-loader', 
      //     options: {
      //       esModule: true,
      //     }
      //   }, {
      //     loader: 'markdown-loader', 
      //     options: {
      //       pedantic: true,
      //       renderer: markdownRenderer
      //     }
      //   }]
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [images, emoji]
          }
        }
      ]
    }],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new sassLintPlugin({
      glob: 'src/**/*.s?(a|c)ss',
      ignoreFiles: ['src/normalize.scss'],
      failOnWarning: false, // Do it.
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './'
  },
};