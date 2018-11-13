<template lang="html">
  <span style="color:dark">
  <b-carousel
  class="bg-info "

  style="text-shadow: 1px 1px 2px #333;"

  controls
  indicators
  background="#ababab"
  :img-height="height"
  v-model="slide"
  :interval="interval">

    <b-carousel-slide
      v-for="(image, i) in images"
      :key="i"
      :img-src="image.src">
       <h1>{{image.text}}</h1>
    </b-carousel-slide>

  </b-carousel>
  </span>
</template>

<script>
export default {
  name: 'VSwipe',
  props: {
    images: {
      type: Array,
      required: true
    },
    value: {
      type: Boolean
    },
    interval: {
      type: Number,
      required: false,
      default: 0
    },
    height: {
      type: [String, Number],
      required: false,
      default: 100
    }
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  }
}
</script>

<style lang="css" scoped>

</style>
