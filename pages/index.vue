<template lang="html">
  <b-container>
    <VHome></VHome>

    <!-- <b-img src="https://supgangvarl.sgp1.digitaloceanspaces.com/supgangvarl/image/productphoto/ourproduct.jpg" fluid-grow alt="Fluid-Grow image" />
    <ProductGroupTabs></ProductGroupTabs> -->
  </b-container>
</template>

<script>
import VHome from '@/components/homes/VHome.vue'
import ProductGroupTabs from '@/components/products/ProductGroupTabs.vue'
import VHeader from '@/components/shares/VHeader.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    VHome,
    ProductGroupTabs,
    VHeader
  }
}
</script>

<style lang="css" scoped>
.space{

  margin-top: 10px;
  margin-bottom: 40px
}

</style>
