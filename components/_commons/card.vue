<template>
  <div class="col-sm-3" :class="(index >= 4) ? 'pt-3': ''">
    <div class="card card-unified-height">
      <a :href="item.url" target="_blank"><img class="card-img-top" :src="item.thumbnail"></img></a>
      <div class="card-body">
        <h4><a :href="item.url" class="card-link" target="_blank">{{item.title}}</a></h4>
        <h6 class="card-subtitle my-2 text-muted">{{item.subtitle}}</h6>
        <p class="card-text text-justify">{{item.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NCard',
    props: {
      index: {
        type: Number
      },
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .card-unified-height {
    height: 390px;
  }
</style> 
