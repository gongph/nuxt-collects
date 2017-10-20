const path = require('path')

// const NODE_ENV = process.env.NODE_ENV || 'development'
// const remoteUrl = 'http://nerisdev.csrc.gov.cn:2174/coding'
// const baseUrl = NODE_ENV === 'production' ? remoteUrl : '/'

module.exports = {
  cache: true,
  // build: {
  //   publicPath: baseUrl
  // },
  head: {
  	title: 'Coding | development\'s map',
  	meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyword', name: 'keyword', content: '前端网址导航，主流框架，前端工具，前端插件，前端手册/书籍' },
      { hid: 'description', name: 'description', content: '前端网址导航，前端开发者必备！' }
  	],
    script: [
      { src: './lib/jquery/jquery-slim.min.js' },
      { src: './lib/popper/popper.min.js' },
      { src: './lib/bootstrap/js/bootstrap.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: './lib/bootstrap/css/bootstrap.min.css' },
      { rel: 'favicon', href: 'favicon.ico' }
    ]
  }
}