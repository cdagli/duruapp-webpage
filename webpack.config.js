var HtmlWebpackPlugin = require('html-webpack-plugin');
var resolve = require('path').resolve; 

var webpackConfig = {
  context: resolve('./src'),
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
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
    }
  ]
},
  plugins: [new HtmlWebpackPlugin({
    template: __dirname + "/src/index.tmpl.html"
  })]
};

module.exports = webpackConfig;