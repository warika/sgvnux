<template>
  <div>
    <b-row>
      <b-col md="6" v-for="(group, i) in groups" :key="i">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion1 variant="info">{{group.thainame}}</b-btn>
          </b-card-header>

          <b-card-body>
            <b-row>
              <b-col md="6" xs="12">
                <ProductGroupImage :images="group.images.slides" class="mb-1"></ProductGroupImage>
              </b-col >
              <b-col md="6" xs="12">
                <div >
                  <small>{{group.thaidescription}}</small>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="12" md="12"  xs="12" class="mb-2">
                <ProductGroupModel :models="group.models"></ProductGroupModel>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col >
    </b-row>
  </div>
</template>

<script>
import ProductGroupModel from './ProductGroupModel.vue'
import ProductGroupImage from './ProductGroupImage.vue'

export default {
  computed: {
    groups(){
      return this.$store.state.groups
    }
  },
  components: {
    ProductGroupModel,
    ProductGroupImage
  }
}
</script>

<style lang="css" scoped>
.imgwrapper {
   width: 100%;
}
</style>
