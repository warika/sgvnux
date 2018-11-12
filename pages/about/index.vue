<template lang="html">

<b-container>
  <b-img
  class="d-none d-md-block mb-3"
  src="https://supgangvarl.sgp1.digitaloceanspaces.com/supgangvarl/image/header/headabout.jpg"
  fluid-grow alt="Fluid-Grow image" />

<VAboutTop class="mt-2"></VAboutTop>
<VAboutMiddle class="mt-2"></VAboutMiddle>
</b-container>




</template>


<script>
import VAboutTop from '@/components/abouts/VAboutTop.vue'
import VAboutMiddle from '@/components/abouts/VAboutMiddle.vue'
export default {
  head: {
    titleTemplate: 'ทรัพย์กังวาล ผู้ผลิตวัสดุก่อสร้าง PVC มากว่า 20 ปี',
    meta: [

      { name: 'description', content: 'ดำเนินการผลิตสินค้า บัว เซี้ยม เซาะร่อง จมูกบันได บัว รางสายไฟ ซึ่งผลิตมาจาก PVC มากว่า 20 ปี' },
      { name: 'image', content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg' },
      { itemprop: 'name', content: 'ทรัพย์กังวาล ผู้ผลิตวัสดุก่อสร้าง PVC มากว่า 20 ปี'},
      { itemprop: 'description' ,content: 'ดำเนินการผลิตสินค้า บัว เซี้ยม เซาะร่อง จมูกบันได บัว รางสายไฟ ซึ่งผลิตมาจาก PVC มากว่า 20 ปี'},
      { itemprop: 'image' ,content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg'},

      // { name: 'og:title' , content: 'ทรัพย์กังวาล ผู้ผลิตวัสดุก่อสร้าง PVC มากว่า 20 ปี'},
      // { name: 'og:description' , content: 'ดำเนินการผลิตสินค้า บัว เซี้ยม เซาะร่อง จมูกบันได บัว รางสายไฟ ซึ่งผลิตมาจาก PVC มากว่า 20 ปี'},
      // { name: 'og:image' , content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg'},
      // { name: 'og:url' , content: 'https://www.sgvthailand.com/'},
      // { name: 'og:site_name' , content: 'sgvthailand'},
      // { name: 'og:locale' , content: 'th_TH'},
      // { name: 'fb:admins' , content: '1350677818365777'},
      // { name: 'og:type' , content: 'website'},

      { property: 'og:title' , content: 'ทรัพย์กังวาล ผู้ผลิตวัสดุก่อสร้าง PVC มากว่า 20 ปี'},
      { property: 'og:description' , content: 'ดำเนินการผลิตสินค้า บัว เซี้ยม เซาะร่อง จมูกบันได บัว รางสายไฟ ซึ่งผลิตมาจาก PVC มากว่า 20 ปี'},
      { property: 'og:image' , content: 'https://assets.sgvthailand.com/supgangvarl/image/header/picforgoogle.jpg'},
      { property: 'og:url' , content: 'https://www.sgvthailand.com/'},
      { property: 'og:site_name' , content: 'sgvthailand'},
      { property: 'og:locale' , content: 'th_TH'},
      { property: 'fb:admins' , content: '1350677818365777'},
      { property: 'og:type' , content: 'website'}
    ]
  },
  data(){
    return{
      items:[
        { photo:'img/about/about1.jpg'}
      ]
    }
  },
  components:{
    VAboutTop,
    VAboutMiddle
  }
}
</script>

<style lang="css" scoped>
.padding{
  padding: 0px !important;
}

.body1{
  background-size: cover;
  /* height: auto; */
  background-color: #fff;
}

.letter-h1{
  font-size: 3vw;
  line-height: 200px;
  text-align: center;
  color: #000;
   /* text-shadow: 2px 2px 4px 	#808080; */
}
.image-size{
  margin-top: 50px;
  height: 300px;
  width: 300px;

}
</style>
