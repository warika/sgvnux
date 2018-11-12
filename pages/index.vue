<template lang="html">
  <b-container>
    <VHome></VHome>

    <!-- <b-img src="https://assets.sgvthailand.com/supgangvarl/image/productphoto/ourproduct.jpg" fluid-grow alt="Fluid-Grow image" />
    <ProductGroupTabs></ProductGroupTabs> -->
  </b-container>
</template>



<script>
import VHome from '@/components/homes/VHome.vue'
import ProductGroupTabs from '@/components/products/ProductGroupTabs.vue'
import VHeader from '@/components/shares/VHeader.vue'

export default {
  head: {
    titleTemplate: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ราคาดีที่สุด',
    meta: [
      { name: 'google-site-verification', content: 'XAfsx_ynlZQ5nCCKntZeP6bHo27Veic11fHqiUY_a6Q' },
      { name: 'keywords', content: 'บัวผนัง, ขอบกระเบื้อง,จมูกบันได, เซี้ยม, เซาะร่อง' },
      { name: 'description', content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ผลิตในไทย 100% แข็งแรง ทนทาน เงางาม สดุดตา' },
      { name: 'image', content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg' },
      { itemprop: 'name', content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ราคาดีที่สุด'},
      { itemprop: 'description' ,content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ผลิตในไทย 100% แข็งแรง ทนทาน เงางาม สดุดตา' },
      { itemprop: 'image' ,content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg'},

      { property: 'og:title' , content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ราคาดีที่สุด'},
      { property: 'og:description' , content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ผลิตในไทย 100% แข็งแรง ทนทาน เงางาม สดุดตา' },
      { property: 'og:image' , content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg'},
      { property: 'og:url' , content: 'https://www.sgvthailand.com/'},
      { property: 'og:site_name' , content: 'sgvthailand'},
      { property: 'og:locale' , content: 'th_TH'},
      { property: 'fb:admins' , content: '1350677818365777'},
      { property: 'fb:app_id' , content: '289515205039532'},
      { property: 'og:type' , content: 'website'}
    ]
  },
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
