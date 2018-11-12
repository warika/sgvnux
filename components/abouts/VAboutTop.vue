<template lang="html">
  <div>

        <b-row>
          <b-col md="4" v-for="(item, i) in items" :key="i">
            <b-img :src="item.photo" fluid alt="Fluid image" />
          </b-col>
          <b-col md="8">
            <h3 class="mt-4 mb-2" v-for="head in headers">{{head.thai}}</h3>
            <p>บริษัท ทรัพย์กังวาล จำกัด เปิดดำเนินการในปี พุทธศักราช 2538 เป็นบริษัทผู้นำด้านการผลิตวัสดุพลาสติกที่ใช้สำหรับงาน ก่อสร้างคิ้วขอบกระเบื้อง อาทิเช่น จมูกบันได เซี้ยม เซาะร่อง รางสายไฟ รางโทรศัพท์ เราผลิตสินค้าโดยมุ่งเน้นถึง คุณภาพ บริการ และการพัฒนา เพื่อสร้างความพึงพอใจที่ตรงกับความต้องการของลูกค้าให้มากที่สุด
        การผลิตที่ได้คุณภาพและมาตรฐาน มีการตรวจสอบสินค้าอยู่ตลอดเวลา การจัดเก็บสินค้าที่เป็นระบบจึงมั่นใจได้ว่า สินค้าของเรานั้นส่งถึงมือของลูกค้าได้ตรงเวลา</p>
            <!-- <p>Our company was established in 1995 as Supgangvarl Co. Ltd.,
            a processor of PVC and U-PVC extrusion. We are manufacturer
            and distributor of PVC and U-PVC products such as tile trim,
           Stair nosing, PVC groove, corner bead, wire way, PVC skirting
           board and, etc.We strongly believe that our customers are the
           reason for our success in business. we are committed to respond
           positively to their needs. With more over 20 years of experience
            in PVC extrusion business, we have been developing and improving
            the production and service. we also have the quality control
             policy which starts from point of planning, sourcing and till
             the goods reach the end user with the high certainly inspection
             device for customer satisfaction.</p> -->
          </b-col>
        </b-row>


  </div>
</template>

<script>
export default {
  data(){
    return{
      headers:[
        {eng:'About Us'},
        {thai:'เกี่ยวกับเรา'}
      ],
      items:[
        { photo:'https://assets.sgvthailand.com/supgangvarl/image/productphoto/aboutus.jpg'}
      ]
    }
  },
}
</script>

<style lang="css" scoped>
.padding{
  padding: 0px !important;
}
.body{
  background-size: cover;
  min-height: auto;
  background-color: #FFD03E;
}
.letter-h1{
  font-size: 3vw;
  line-height: 200px;
  text-align: center;
  color: #fff;
   text-shadow: 2px 2px 4px 	#808080;
}
.image-size{
  margin-top: 50px;
  height: 300px;
  width: 300px;

}
</style>
