const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = (env, {mode}) => {
  console.log({mode})

  const isProduction = mode === 'production'

  const backendUrl = isProduction
    ? 'https://fierce-shelf-74800.herokuapp.com/api/'
    : 'http://localhost:3001/api/'

  return {
    // entry: './src/index.js' //emtry point, by default is the index.js
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(backendUrl)
      }),
      new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],
    devServer: {
      // contentBase: path.resolve(__dirname, 'build'), default,
      open: true, //open navigator
      //overlay: true, //open overlay with errors
      compress: true, //Compression is a simple, effective way to save bandwidth and speed up your site
      port: 3000,
    },
    devtool: 'source-map', //ONLY FOR DEV. allow to create a second map with our errors in the exactly lines
    module: {
      rules: [
        {
          test: /\.js$|jsx/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              [
                 '@babel/preset-react',
                {
                  "runtime": 'automatic'
                }
              ]
            ]
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(ttf|eot|svg)$/,
          type: 'asset/resource',
        },
      ]
    },
  }
}