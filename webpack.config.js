const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  // mode: "development",
  entry : {
    main : './index.js'
    // main : './src/components/button/index.js'
  },
  output: {
    filename: "index.js",
    path : path.join(__dirname,'./dist'),
    library : 'index.js',
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js','.jsx','.json','.vue'],
    alias : {
      '@':path.join(__dirname,'./src')
    }
  },
  module: {
    rules : [
      {
        test : /\.css$/,use : ['style-loader','css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test : /\.vue$/,loader : 'vue-loader'
      },
      {
        // 处理 html 中 img 资源
        test: /\.html$/,
        // 负责引入img，从而能被url-loader进行处理
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot : true,
    port: 8081,
    host : 'localhost',
    open: true
  },
  plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template : './index.html',
        filename : 'index.html'
      }),
      new VueLoaderPlugin()
  ]
}

module.exports = config
