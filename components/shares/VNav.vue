<template lang="html">

    <b-navbar toggleable="md" type="dark" class="nav-size" sticky>
      <b-navbar-toggle target="nav_collapse" ></b-navbar-toggle>
        <b-container>
      <b-navbar-brand href="#">Supgangvarl</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto nav-font ">
          <b-navbar-nav>
            <nuxt-link
              :to="item.to"
              v-for="(item, i) in items"
              :key="i" tag="li"
              active-class="active"
              class="nav-item"
              exact>
              <a class="nav-link">
                {{item.thainame}}
              </a>
            </nuxt-link>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
        </b-container>
    </b-navbar>




</template>

<script>
export default{
  data (){
    return {
      items:[
        {thainame:'หน้าหลัก', name:'Home', to: '/'},
        {thainame:'เกี่ยวกับเรา',name:'About', to: '/about'},
        {thainame:'สินค้า',name:'Product', to: '/product'},
        // {name:'Journey', to: {name: 'journey'}},
        {thainame:'ติดต่อ',name:'Contact', to: '/contact'}
      ],
      comlogos:[
        { logo:'img/companylogo.png'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.nav-size{

  background-color: #F40000;
}

.nav-font{
  font-family: 'Anton', sans-serif;
  font-weight: 35px;
}
</style>
