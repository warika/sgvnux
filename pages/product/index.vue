<template lang="html">
<b-container>
  <b-img
  class="d-none d-md-block mb-3"
  src="https://assets.sgvthailand.com/supgangvarl/image/header/headproduct.jpg"
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
      { name: 'keywords', content: 'บัวผนัง, ขอบกระเบื้อง,จมูกบันได, เซี้ยม, เซาะร่อง' },
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
