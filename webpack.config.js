
require('env.js')
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
    mode: 'development',
    entry: './src/index.js',
   devServer: {
     static: './dist',
     port: 3001,
     hot: process.env.NODE_ENV === 'production' ? require('configs/config.prod.js') : require('configs/config.dev.js'),
   },
    plugins: [
           new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    output: {
      filename: 'main.js',
    },
    stats: {
        children: false
    },
    devtool: 'inline-source-map',
  };