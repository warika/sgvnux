<template lang="html">
<div class="">

  <b-row >
    <b-col md="12">
      <small>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Size(mm)</th>
                <th>Length(mm)</th>
                <th>Pack</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(model, i) in models" :key="i">
                <td>{{model.name}}</td>
                <td>{{model.size}}</td>
                <td >{{model.lengths}}</td>
                <td>{{model.pack}}</td>
                <td >{{model.colors.length}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </small>
  </b-col >
  </b-row>


</div>
</template>

<script>
import ProductGroupModelDetail from './ProductGroupModelDetail.vue'

export default {
  props: ['models'],
  data () {
    return {}
  },
  components: {
    ProductGroupModelDetail
  }
}
</script>

<style lang="css" scoped>

.custom-margin {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>
