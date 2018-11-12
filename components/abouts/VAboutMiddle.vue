<template lang="html">
  <div>
    <h4 class="text-center" v-for="head in headers">{{head.thai}}</h4><br>
      <p>สินค้าทุกชิ้นของบริษัท ทรัพย์กังวาล จำกัด ถูกออกแบบมาตามความต้องการของผู้ใช้งาน ทางเราเชื่อมั้น
         เสมอว่าสินค้าที่มีคุณภาพ และ การบริการ ที่เยี่ยมยอดนั้นสร้างความพึงพอใจให้กับลูกค้าอย่างสูงสุด
         บริษัทของเรามีการนำเครื่องมือตรวจสอบคุณภาพพลาสติกเพื่อลดปัญหาพลาสติกด้อยคุณภาพ ก่อนถึงมือผู้ใช้งาน
      </p>
     <!-- <p> We must be obsessive about understanding our customers'wants and needs and we create products and sevices that
     satisfy their demand. In Supgangvarl, we believe in providing the best quality products for our customers,
     we have our inspection equipment for make sure that our product is durable and long lasting. </p> -->
    <b-row >
      <b-col v-for="(quality, i) in qualities" :key="i" md="12" sm="6">
        <b-card-group deck >
        <b-card
                :img-src="quality.image"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text text-center" >
                {{quality.thai}}
            </p>
        </b-card>
      </b-card-group>


      </b-col>
    </b-row >
</div>

</template>

<script>
export default {
  data(){
    return{
      headers:[
        {eng:'Quality control equipments'},
        {thai:'เครื่องมือตรวจสอบคุณภาพ'}
      ],
      qualities:[
        {thai:'การทดสอบการดึง', text:'Tensile Testing ', image:'https://supgangvarl.sgp1.digitaloceanspaces.com/supgangvarl/image/productphoto/q1h.jpg'},
        {thai:'การทดสอบแรงกระแทก',text:'Impact Testing', image:'https://supgangvarl.sgp1.digitaloceanspaces.com/supgangvarl/image/productphoto/q2h.jpg'},
        {thai:'การทดสอบความหนาแน่น',text:'Density Testing ', image:'https://supgangvarl.sgp1.digitaloceanspaces.com/supgangvarl/image/productphoto/q3h.jpg'},
        {thai:'การทดสอบความแข็ง',text:'Hardness Testing', image:'https://supgangvarl.sgp1.digitaloceanspaces.com/supgangvarl/image/productphoto/q4h.jpg'}

      ]
    }
  }
}
</script>

<style lang="css" scoped>






</style>
