<template>
  <div class="root">
    <!-- nav -->
    <n-nav></n-nav>
    <!-- main -->
  	<nuxt></nuxt>
  	<!-- footer -->
  </div>
</template>

<script>
  import NNav from '../components/_commons/nav.vue'
  export default {
    components: {
      NNav
    }
  }
</script>

<style>
  body {
    padding-top: 5rem;
  }
</style>