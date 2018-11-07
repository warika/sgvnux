<template lang="html">
  <div class="">
    <img :src="images[0].src" height="180" width="200">
    <!-- <v-swipe :images="images" class="img-responsive" width="50px" ></v-swipe> -->
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
