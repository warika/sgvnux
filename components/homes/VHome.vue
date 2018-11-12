<template lang="html">
  <div >
    <b-row class="mb-2">
      <b-col md="12">
        <b-card overlay
            img-src="https://assets.sgvthailand.com/supgangvarl/image/home/homebg.jpg"
            img-alt="Card Image"
            text-variant="white"
            title="SUPGANGVARL"
            sub-title="The Leading of PVC decorative manufacturer">
        </b-card>
      </b-col>
    </b-row>

    <b-row >
      <b-col md="6">
        <b-img src="https://assets.sgvthailand.com/supgangvarl/image/home/homesgv.jpg" fluid alt="Fluid image" />
      </b-col>
      <b-col md="6">
        <h3 class="mt-3" >{{parttops.thaihead}}</h3>
        <p>{{parttops.thaidescription}}
          <br>
          <b-btn class="mt-3" variant="info">
            <nuxt-link :to="parttops.to"  style="color:white">{{parttops.thaibtn}}</nuxt-link>

          </b-btn>
        </p>
      </b-col>
      <b-col md="6">
        <h3 class="mt-3">{{partmiddles.thaihead}}</h3>
        <p>{{partmiddles.thaidescription}}
        <br>
        <b-btn class="mt-3" variant="info">
            <nuxt-link :to="partmiddles.to" style="color:white">{{partmiddles.thaibtn}}</nuxt-link>
        </b-btn>
      </p>
      </b-col>
      <b-col md="6">
        <b-img src="https://assets.sgvthailand.com/supgangvarl/image/home/homecolor.jpg" fluid alt="Fluid image" />
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col md="12">
        <a href="https://www.facebook.com/Supgangvarl-1350677818365777">
        <b-img src="https://assets.sgvthailand.com/supgangvarl/image/home/homeend.jpg" fluid alt="Fluid image" />
      </a>
      </b-col>

    </b-row>
  </div>

</template>

<script>
export default {
 name:'VHome',
  data(){
    return{
      parttops: {
        enghead:'Supgangvarl',
        thaihead:'ทรัพย์กังวาล',
        engdescription:`Supgangvarl is the one of the leading manufacturer and distributor of
                  PVC and U-PVC products which use for building construction, interior,
                  and exterior. A LONG JOURNEY Over 20 years in construction business,
                  we have our own innovation tools to make our inner process smootly
                  and we also develop more PVC formular due our products look more Durable, Shine ,Stunning and WOW!!`,
        thaidescription:`ดำเนินการผลิตสินค้าประเภทวัสดุตกแต่งภายในซึ่งผลิตมาจาก PVC มากว่า 20 ปี
                  ประสบการ์ณการคิดค้นพัฒนาในสูตรการผลิตอย่างต่อเนื่อง จนสินค้ามีความแข็งแรง คงทน
                  เงางาม ผลิตสินค้าภายใต้ แบรนด์ SUCCESS `,
        thaibtn:'รู้จักเรามากขึ้น',
        engbtn:'more details',
        to: '/about'
      },
      partmiddles: {
        enghead:'More Color',
        thaihead:'แต่งเติมความสดใส',
        engdescription:'',
        thaidescription:`เพราะการตกแต่งบ้านนั้นบอกสไตล์ความเป็นตัวเอง ลองมาแต่งเติมสีสันให้บ้านเพื่อความแตกต่าง
                ที่ลงตัว ผลิตภัณฑ์ของเรานอกจากจะมีสีพื้นฐานแล้ว ยังมีสีสันหลากหลาย และมั่นใจได้ว่า
                เม็ดสีในชิ้นงานแน่น ละเอียด เงางาม และสดุดตาเป็นที่สุด `,
        thaibtn:'สินค้าเพิ่มเติม',
        engbtn:'more products',
         to: '/product'

      }
      // ,
      // items:[
      //   {thaibtn:'รู้จักเรามากขึ้น', engbtn:'more details', to: '/about'},
      //   {thaibtn:'สินค้าเพิ่มเติม', engbtn:'more products', to: '/product'}
      // ]
    }
  }
}
</script>

<style lang="css">
</style>
