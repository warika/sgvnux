<template lang="html">
  <b-container>
    <b-row style="height: 90vh;" align-v="center" align-h="center">
      <b-col cols="10" md="6">
        <h1 class="text-center">www.supgangvarl.co.th</h1>
        <h1 class="text-center mt-5 mb-5">เปลี่ยนมาเป็น</h1>
        <h1 class="text-center">www.sgvthailand.com</h1>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
if (process.browser) {
  setTimeout(function () {
    window.location.replace("http://www.sgvthailand.com")
  }, 3000)
}
export default {

}
</script>

<style lang="css">

</style>
