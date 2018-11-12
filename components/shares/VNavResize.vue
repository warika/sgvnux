<template lang="html">
  <b-navbar class="" variant="warning" sticky>
    <div class="table-responsive " style="margin-bottom: -20px;">
      <table class="table table-borderless table-sm">
        <thead>
          <tr class="text-center">
            <td >
              <nuxt-link
                to="/"
                tag="a"
                active-class="text-primary">
                <fa :icon="['fas', 'home']" class="text-light"/><br>
                <small class="text-primary">หน้าหลัก</small>
              </nuxt-link>
            </td>

            <td>
              <nuxt-link
                to="/product"
                tag="a"
                active-class="text-primary">
                <fa :icon="['fas', 'box-open']" class="text-light"/><br>
                <small class="text-primary">สินค้า</small>
              </nuxt-link>
            </td>

            <td @click="gotoFacebook">
              <fa :icon="['fab', 'facebook-f']" class="text-light"/><br>
              <small class="text-primary">Facebook</small>
            </td>

            <td @click="gotoLine">
              <fa :icon="['fab', 'line']" class="text-light"/><br>
              <small class="text-primary">Line</small>
            </td>

            <td @click="gotoPhone">
              <fa :icon="['fas', 'phone']" class="text-light"/><br>
              <small class="text-primary">โทรเลย</small>
            </td>

            <td>
              <nuxt-link
                to="/contact"
                tag="a"
                active-class="text-primary">
                <fa :icon="['fas', 'map-marker-alt']" class="text-light"/><br>
                <small class="text-primary">ติดต่อ</small>
              </nuxt-link>
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
  methods: {
    gotoFacebook() {
      window.open('https://www.facebook.com/Supgangvarl-1350677818365777/')
    },
    gotoLine() {
      window.open('https://line.me/ti/p/SXYCePOwO9')
    },
    gotoPhone() {
      window.open('tel:+66869998382')
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
