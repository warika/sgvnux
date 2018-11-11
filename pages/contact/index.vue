<template lang="html">
  <b-container>
    <b-img
    class="d-none d-md-block mb-3"
    src="https://supgangvarl.sgp1.digitaloceanspaces.com/supgangvarl/image/header/headcontact.jpg"
    fluid-grow alt="Fluid-Grow image" />
    <VContact></VContact>
</b-container>
</template>

<script>
import VContact from '@/components/contacts/VContact.vue'
export default {
  components:{
    VContact
  }
}
</script>

<style lang="css" scoped>

</style>
