const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: [
          MiniCSSExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      hash: true
    }),
    new MiniCSSExtractPlugin({
      filename: './css/styles.css'
    })
  ]
}
