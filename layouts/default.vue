<template>
  <div>
    <VNav class="d-none d-md-block"></VNav>
    <VNavResize class="d-block d-sm-none"></VNavResize>
    <nuxt></nuxt>
    <!-- <VFooter></VFooter> -->
  </div>
</template>

<script>
import VNav from '@/components/shares/VNav.vue'
import VNavResize from '@/components/shares/VNavResize.vue'
// import VFooter from '@/components/shares/VFooter.vue'

export default {

  components:{
    VNav,
    VNavResize
  }
}
</script>

<style>

</style>
