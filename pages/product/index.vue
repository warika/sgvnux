<template lang="html">
<b-container>




    <!-- <b-card
    overlay
    img-src="bgproduct.jpg"
    img-alt="Card Image"
    text-variant="black">
    <b-row style="height:100%;" align-v="end">
      <b-col class="d-none d-md-block">
        <b-card text-variant="dark" style="background-color: rgba(255, 255, 255, 0.7);">
          <h1>
            OUR PRODUCT
          </h1>
        </b-card>
    </b-col>
  </b-row>
  </b-card> -->


      <b-img
      class="d-none d-md-block mb-3"
      src="https://supgangvarl.sgp1.digitaloceanspaces.com/supgangvarl/image/header/headproduct.jpg"
      fluid-grow alt="Fluid-Grow image" />


    <!-- <v-header title="Product" subtitle="Make Your Home Better ."></v-header> -->
    <ProductGroupTabs></ProductGroupTabs>



</b-container>
</template>

<script>
import ProductGroupTabs from '@/components/products/ProductGroupTabs.vue'
import VHeader from '@/components/shares/VHeader.vue'

export default {
  head: {
    titleTemplate: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ราคาดีที่สุด',
    meta: [

      { name: 'description', content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ผลิตในไทย 100% แข็งแรง ทนทาน เงางาม สดุดตา' },
      { name: 'image', content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg' },
      { itemprop: 'name', content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ราคาดีที่สุด'},
      { itemprop: 'description' ,content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ผลิตในไทย 100% แข็งแรง ทนทาน เงางาม สดุดตา'},
      { itemprop: 'image' ,content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg'}
    ]
  },
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

</style>
