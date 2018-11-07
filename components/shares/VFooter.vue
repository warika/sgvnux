<template lang="html">

    <footer class=" panel-footer d-none d-sm-block">
      <div class="container ">
        <div class="row">
          <div class="col-lg-4 col-md-4 text-center pt-3 ">
            <h5 class="text-light">Contact</h5>
            <div class="text-left text-light">
              <VAddress></VAddress>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 text-left pt-3 text-center ">
            <h5 class="mb-2 text-light" >please visit :</h5>
            <a v-for="(item, i) in items" class="mr-3" :key="i">
              <VSocial :type="item.icon" :link="true"></VSocial>
            </a>
          </div>
        </div>
      </div>
    </footer>


</template>

<script>
import VAddress from '@/components/shares/VAddress.vue'
import VSocial from '@/components/buttons/VSocial.vue'

export default {
  data () {
    return {
      items: [
        {icon:'line'},
        {icon:'facebook'},
        {icon:'youtube'},
        {icon:'location'},
        {icon:'instagram'},
        {icon:'linkedin'}
      ]
    }
  },
  components:{
    VAddress,
    VSocial
  }
}
</script>

<style lang="css" scoped>
.line{
  white-space: pre;
}
.panel-footer{
    height:100px;
    padding-bottom: 250px;
    background-color: #F40000

}
.right{

}
/* footer {
  position: absolute;
  bottom: 0;
  height:60px;
  width: 100%;
} */
</style>
