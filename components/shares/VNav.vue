<template lang="html">

  <b-navbar toggleable="md" type="dark" variant="info" sticky>
    <b-navbar-toggle target="nav_collapse" ></b-navbar-toggle>
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
              {{item.name}}
            </a>
          </nuxt-link>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
export default{
  data (){
    return {
      items:[
        {name:'Home', to: '/'},
        {name:'About', to: '/about'},
        {name:'Product', to: '/product'},
        // {name:'Journey', to: {name: 'journey'}},
        {name:'Contact', to: '/contact'}
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
  height: 200px;
}

.nav-font{
  font-family: 'Anton', sans-serif;
  font-weight: 35px;
}
</style>
