var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var resolve = require('path').resolve; 

var webpackConfig = {
  context: resolve('./src'),
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react','stage-1']
        }
      }
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    },
    {
      test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader : 'file-loader?name=/fonts/[name].[ext]'
    }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: __dirname + "/src/index.tmpl.html"
  }),
  new CopyWebpackPlugin([{
    from: 'img',
    to: 'img'
  }])]
};

module.exports = webpackConfig;