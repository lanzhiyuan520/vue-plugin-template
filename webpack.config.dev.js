let { merge } = require('webpack-merge')
let base = require('./webpack.config')

module.exports = merge(base,{
  mode: 'development',
  entry : {
    main : './index.js'
  }
})
