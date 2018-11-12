<template lang="html">
  <b-container>
    <b-img
    class="d-none d-md-block mb-3"
    src="https://supgangvarl.sgp1.digitaloceanspaces.com/supgangvarl/image/header/headcontact.jpg"
    fluid-grow alt="Fluid-Grow image" />
    <VContact></VContact>
</b-container>
</template>

<script>
import VContact from '@/components/contacts/VContact.vue'
export default {
  head: {
    titleTemplate: 'บัว เซี้ยม เซาะร่อง จมูกบันได คิ้ว เช็คราคา โทรหาเลย คลิก!',
    meta: [

      { name: 'description', content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันไดรางสายไฟ ผลิตในไทย 100% แข็งแรง ทนทาน เงางาม สดุดตา' },
      { name: 'image', content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg' },
      { itemprop: 'name', content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได คิ้ว เช็คราคา โทรหาเลย คลิก!'},
      { itemprop: 'description' ,content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ผลิตในไทย 100% แข็งแรง ทนทาน เงางาม สดุดตา'},
      { itemprop: 'image' ,content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg'},

      { name: 'og:title' , content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได เช็คราคา โทรหาเลย คลิก!'},
      { name: 'og:description' , content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ผลิตในไทย 100% แข็งแรง ทนทาน เงางาม สดุดตา'},
      { name: 'og:image' , content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg'},
      { name: 'og:url' , content: 'https://www.sgvthailand.com/contact'},
      { name: 'og:site_name' , content: 'sgvthailand'},
      { name: 'og:locale' , content: 'th_TH'},
      { name: 'fb:admins' , content: '1350677818365777'},
      { name: 'og:type' , content: 'website'},

      { property: 'og:title' , content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได เช็คราคา โทรหาเลย คลิก!'},
      { property: 'og:description' , content: 'คิ้ว บัว เซี้ยม เซาะร่อง จมูกบันได รางสายไฟ ผลิตในไทย 100% แข็งแรง ทนทาน เงางาม สดุดตา'},
      { property: 'og:image' , content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg'},
      { property: 'og:url' , content: 'https://www.sgvthailand.com/contact'},
      { property: 'og:site_name' , content: 'sgvthailand'},
      { property: 'og:locale' , content: 'th_TH'},
      { property: 'fb:admins' , content: '1350677818365777'},
      { property: 'og:type' , content: 'website'}
    ]
  },
  components:{
    VContact
  }
}
</script>

<style lang="css" scoped>

</style>
