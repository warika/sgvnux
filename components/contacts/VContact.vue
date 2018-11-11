<template lang="html">
  <b-card>
   <b-row>
     <b-col md="6" >
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15513.029936300672!2d100.685474!3d13.5810746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88cfaf3b53448889!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4l-C4o-C4seC4nuC4ouC5jOC4geC4seC4h-C4p-C4suC4pSDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1541652793646"  frameborder="0" style="border:0" allowfullscreen></iframe>
     </b-col>
     <b-col md="6" align-self="center">
       <h1 class="text-center">Supgangvarl</h1><br>
       <VAddress></VAddress>
     </b-col>
   </b-row>
  </b-card>

</template>

<script>
import VAddress from '@/components/shares/VAddress.vue'
export default {
  components:{
    VAddress
  }
}
</script>

<style lang="css" scoped>

iframe{
  width: 100%;
  height: 50vh;
}
</style>
