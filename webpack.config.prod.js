let { merge } = require('webpack-merge')
let base = require('./webpack.config')

module.exports = merge(base,{
  mode: 'production',
  entry : {
    main : './src/components/button/index.js'
  }
})
