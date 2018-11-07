<template lang="html">
  <div class="body container ">
    <h4 class="text-center">Quality control equipments</h4><br>
    <p>สินค้าทุกชิ้นของบริษัท ทรัพย์ฏังวาล จำกัด ถูกออกแบบมาตามความต้องการของผู้ใช้งาน ทางเราเชื่อมั้น
       เสมอว่าสินค้าที่มีคุณภาพ และ การบริการ ที่เยี่ยมยอดนั้นสร้างความพึงพอใจให้กับลูกค้าอย่างสูงสุด
       บริษัทของเรามีการนำเครื่องมือตรวจสอบคุณภาพพลาสติกเพื่อลดปัญหาพลาสติกด้อยคุณภาพ ก่อนถึงมือผู้ใช้งาน
    </p>
     <p> We must be obsessive about understanding our customers'wants and needs and we create products and sevices that
     satisfy their demand. In Supgangvarl, we believe in providing the best quality products for our customers,
     we have our inspection equipment for make sure that our product is durable and long lasting. </p>
    <b-row align-h="center">
      <b-col v-for="(quality, i) in qualities" class="gallery text-center" :key="i">
        <img class="wrapper card card__one " :src="quality.image">
        <h6 class="info">{{quality.thai}}</h6>

      </b-col>
    </b-row >
    </div>



</template>

<script>
export default {
  data(){
    return{
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
.body{
  background-size: cover;
  min-height: 500px;
  background-color: #FFD03E;
}
.wrapper{
  display: flex;
  width: 90%;
  justify-content: space-around;
}
.card{
  width: 220px;
  height: 320px;
  border-radius: 12px;
  padding: 0rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
}

.card:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(.165, .84, .44, 1);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
    content: '';
    opacity: 0;
    z-index: -1;
  }

  .card:hover,
  .card:focus {
    transform: scale3d(1.006, 1.006, 1);

  .card:after {
      opacity: 1;
    }
  }









</style>
