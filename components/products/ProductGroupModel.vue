<template lang="html">
<div class="">

  <b-row >
    <b-col md="12">
      <small>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>รุ่น</th>
                <th>ค.กว้างXค.สูง(mm)</th>
                <th>ค.ยาว(mm)</th>
                <th>ขนาดบรรจุ</th>
                <th>สี</th>
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


export default {
  props: ['models'],
  data () {
    return {}
  },
  components: {
  
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
