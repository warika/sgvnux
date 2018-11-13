<template lang="html">
  <b-container>
    <b-row>
      <b-col>
        <h1>{{group.name}}</h1>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col cols="12" md="6" lg="6">
        <VSwipe :images="group.images ? group.images.slides : []"></VSwipe>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        {{group.thaidescription}}
        <ProductGroupModel :models="group.models"></ProductGroupModel>

        <VColorPallet :colors="group.colors"></VColorPallet>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import VSwipe from '@/components/carousel/VSwipe.vue'
import ProductGroupModel from '@/components/products/ProductGroupModel.vue'
import ProductGroupImage from '@/components/products/ProductGroupImage.vue'
import VColorPallet from '@/components/shares/VColorPallet.vue'

export default {
  data () {
    return {
      message: 'Hello'
    }
  },
  computed: {
    group () {
      return this.$store.state.groups.find(v => v.name === this.id) || {}
    }
  },
  async asyncData ({ params }) {
    return {
      id: params.id
    }
  },
  components: {
    VSwipe,
    ProductGroupImage,
    ProductGroupModel,
    VColorPallet
  }
}
</script>

<style lang="css">
</style>
