<template lang="html">
  <b-container>

      <b-img src="https://supgangvarl.sgp1.digitaloceanspaces.com/supgangvarl/image/productphoto/ourproduct.jpg" fluid-grow alt="Fluid-Grow image" />

    <!-- <v-header title="Product" subtitle="Make Your Home Better ."></v-header> -->
    <ProductGroupTabs></ProductGroupTabs>
 </b-container>
</template>

<script>
import ProductGroupTabs from '@/components/products/ProductGroupTabs.vue'
import VHeader from '@/components/shares/VHeader.vue'

export default {
  data () {
    return {

    }
  },
  components: {
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
