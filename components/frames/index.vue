<template>
  <div class="frames">
    <template v-for="(frame, index) of frames">
      <h4 :class="(index > 0) ? 'pt-4' : ''" :id="frame.title">
        <template v-if="frame.icon">
          <img :src="frame.icon"/> {{frame.title}}
        </template>
        <template v-else>{{frame.title}}</template>
      </h4>
      <div class="dropdown-divider pb-2"></div>
        <div class="row">
          <n-card v-for="(item, index) of frame.data" 
            :item="item" 
            :index="index" 
            key="item.id">
          </n-card>
        </div>
        <!-- row end -->
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import NCard from '../_commons/card.vue'
  export default {
    computed: mapGetters({
      frames: 'frames/frames'
    }),
    components: {
      NCard
    }
  }
</script>