<template>
  <cards classes="frames" :items="frames"></cards>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Cards from '../_commons/cards.vue'
  export default {
    computed: mapGetters({
      frames: 'frames/frames'
    }),
    components: {
      Cards
    }
  }
</script>