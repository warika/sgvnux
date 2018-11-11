<template lang="html">
  <b-navbar class="" variant="warning" sticky>
    <div class="table-responsive " style="margin-bottom: -20px;">
      <table class="table table-borderless table-sm">
        <thead>
          <tr>
            <td v-for="(item, i) in items" class="text-center">
              <!-- <router-link
                v-if="item.to"
                :to="item.to"
                :key="i" tag="a"
                active-class="text-primary">
                <VSocial :type="item.icon" :link="true"></VSocial><br>
                {{item.text}}
              </router-link> -->

              <nuxt-link
                v-if="item.to"
                :to="item.to"
                :key="i" tag="a"
                active-class="text-primary">
                <VSocial :type="item.icon" :link="true"></VSocial><br>
                <!-- <small>{{item.text}}</small> -->
              </nuxt-link>


              <span v-else>
                <VSocial :type="item.icon" :link="true"></VSocial><br>
                <!-- <small>{{item.text}}</small> -->
              </span>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </b-navbar>
</template>

<script>
import VSocial from '@/components/buttons/VSocial.vue'
export default{
  data (){
    return {
      items: [
        {text:'Home', icon:'home',to: '/'},
        {text:'Product', icon:'product', to:'/product'},
        {text:'Telephone',icon:'telephone', to:'tel:+66869998382'},
        {text:'Line', icon:'line'},
        {text:'Facebook', icon:'facebook'},
        {text:'location', icon:'location'}
      ]
    }
  },
  components: {
    VSocial
  }
}
</script>

<style lang="css" scoped>
/* .text-small{
  font-size: 10px;
  color: #fff;

}
.shadow {

}
.nav-font{
  font-family: 'Anton', sans-serif;
  font-weight: 35px;
}

::-webkit-scrollbar {
  display: none;
} */
</style>
