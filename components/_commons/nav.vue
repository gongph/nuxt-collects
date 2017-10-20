<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top bd-navbar">
    <div class="container">

      <!-- logo -->
      <a class="navbar-brand" href="/">
        <img :src="logo" class="d-inline-block align-top">
      </a>

      <!-- response button -->
      <button class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- menus -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownFrames" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">主流框架</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownFrames">
                <a class="dropdown-item" href="/">Vue.js</a>
                <a class="dropdown-item" href="/#React">React</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#综合">综合</a>
              </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownTools" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">前端工具</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownTools">
                <a class="dropdown-item" href="/tools">自动化</a>
                <a class="dropdown-item" href="#React">预编译</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#综合">其他</a>
              </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">插件</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">设计＆交互</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">开发社区</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">公众号</a>
          </li>
        </ul>
        <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
          <li class="nav-item">
            <a href="https://github.com/gongph/nuxt-collects" target="_blank" class="nav-link" aria-label="GitHub">
              <img src="/brands/github.png"/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        logo: './logo.png',
        menus: []
      }
    }
  }
</script>