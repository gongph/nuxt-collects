<template>
  <cards classes="tools" :items="tools"></cards>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Cards from '../_commons/cards.vue'
  export default {
    computed: mapGetters({
      tools: 'tools/tools'
    }),
    components: {
      Cards
    }
  }
</script>