<template>
  <div>
    <VNav></VNav>
    <nuxt></nuxt>
    <VFooter></VFooter>
  </div>
</template>

<script>
import VNav from '@/components/shares/VNav.vue'
import VFooter from '@/components/shares/VFooter.vue'

export default {

  components:{
    VNav,
    VFooter
  }
}
</script>

<style>

</style>
