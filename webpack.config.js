
const HtmlWebpackPlugin = require("html-webpack-plugin");
const hotState = process.env.NODE_ENV === 'production' ? false : true


module.exports = {
    mode: 'development',
    entry: './src/index.js',
   devServer: {
     static: './dist',
     port: 3001,
     hot: hotState,
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