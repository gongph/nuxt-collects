<template>
  <div :class="classes">
    <template v-for="(item, index) of items">
      <h4 :class="(index > 0) ? 'pt-4' : ''" :id="item.title">
        <template v-if="item.icon">
          <img :src="item.icon"/> {{item.title}}
        </template>
        <template v-else>{{item.title}}</template>
      </h4>
      <div class="dropdown-divider pb-2"></div>
        <div class="row">
          <card-item v-for="(obj, index) of item.data" 
            :item="obj" 
            :index="index" 
            key="obj.id">
          </card-item>
        </div>
        <!-- row end -->
    </template>
  </div>
</template>

<script>
  import CardItem from './card-item.vue'
  export default {
    name: 'Cards',
    props: {
      classes: {
        type: String
      },
      items: {
        type: Array
      }
    },
    components: {
      CardItem
    }
  }
</script>