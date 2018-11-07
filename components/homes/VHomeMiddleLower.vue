<template lang="html">
  <div class="background background-size hm-gradient mb">
    <div class="letter-h1">
      Got To Know Us
    </div>
    <VTimeline></VTimeline>
  </div>

</template>

<script>
import VTimeline from '@/components/timeline/VTimeline.vue'
export default {
  components:{
    VTimeline
    // VHomeMiddleLower
  }
}
</script>

<style lang="css" scoped>
.letter-h1{
  font-size: 3vw;
  line-height: 100px;
  text-align: center;
  color: #fff;
   text-shadow: 2px 2px 4px 	#808080;
}
.background{
  background: repeating-linear-gradient(45deg, #efefef, #efefef 3px, #f9f9f9 3px, #f9f9f9 5px);
  }
.background-size:100px 100px;
.hm-gradient {
  /* background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%); */
  padding-top: 3em;
  padding-bottom: 10em;
}
.mb{
  margin-bottom: 7em;
}
</style>
