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
      { itemprop: 'image' ,content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg'}
    ]
  },
  components:{
    VContact
  }
}
</script>

<style lang="css" scoped>

</style>
