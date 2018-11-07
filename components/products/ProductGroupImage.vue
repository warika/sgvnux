<template lang="html">
  <div class="">
    <v-swipe :images="images" class="img-responsive"></v-swipe>
  </div>
</template>

<script>
import VSwipe from '@/components/carousel/VSwipe.vue'
export default {
  props: ['images'],
  components: {
    VSwipe
  }
}
</script>

<style lang="css" scoped>
.imgwrapper {
   width: 100%;
}
</style>
