<template lang="html">
  <div>
    <b-container>
      <b-row>
        <b-col md="12">
          <div class="main-timeline" >
            <div class="timeline" v-for="item in items">
              <a href="#" class="timeline-content">
                <h3 class="title">{{item.title}} <i :class="item.icon"></i></h3>
                <b-card>
                <p class="description">
                    {{item.description}}
                </p>
                <b-row v-for="picture in item.image">
                  <b-img :src="picture.src" class="height" fluid alt="Fluid image" />
                </b-row>
                <b-row >
                  <p >
                      {{item.vdo}}
                  </p>
                </b-row>
              </b-card>
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {title:'Who We are',
        description:'Supgangvarl is the one of the leading manufacturer and distributor of PVC and U-PVC products which use for building construction, interior, and exterior. A LONG JOURNEY Over 20 years in construction business, we have our own innovation tools to make our inner process smootly and we also develop more PVC formular due our products look more Durable, Shine ,Stunning and WOW!!.',
        icon:'fa fa-home',
        image:[
          {src:'img/header-bg.jpg'}
        ],
        vdo:''
        },
        {title:'Top Favorite',
        description:'Tile Trim, Corner Bead, Groove',
        icon:'fa fa-rocket',
        image:[
          {src:'img/topfavorite/top5.jpg'}
        ],
        vdo:''
        },
        {title:'Installing trick',
        description:'',
        icon:'fa fa-rocket',
          image:[
            {src:''}
          ],
          vdo:'https://www.youtube.com/embed/qFLhGq0060w'
        },
        {title:'hello1',
        description:'Supgangvarl is the one of the leading manufacturer and distributor of PVC and U-PVC products which use for building construction, interior, and exterior. A LONG JOURNEY Over 20 years in construction business, we have our own innovation tools to make our inner process smootly and we also develop more PVC formular due our products look more Durable, Shine ,Stunning and WOW!!.',
        icon:'fa fa-rocket',
        image:[
          {src:'img/header-bg.jpg'}
        ],
        vdo:''
        },

      ]

    }
  }
}
</script>

<style lang="css" scoped>
.height{
  height: 30vh;
}
.main-timeline{
    position: relative;
    overflow: hidden;
}
.main-timeline:before{
    content: "";
    width: 10px;
    height: 80%;
    border-right: 8px dotted #000;
    position: absolute;
    top: 18px;
    left: 50%;
    transform: translateX(-50%);
}
.main-timeline .timeline{
    width: 50.1%;
    float: right;
    padding: 10px 100px 10px 50px;
    position: relative;
}
.main-timeline .timeline:before{
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fd8c00;
    border: 5px solid #fff;
    box-shadow: 0 0 0 3px #fd8c00;
    position: absolute;
    top: 25px;
    left: -13px;
}
.main-timeline .timeline-content{
    display: block;
    position: relative;
}
.main-timeline .timeline-content:hover{ text-decoration: none; }
.main-timeline .title{
    display: inline-block;
    padding: 8px 55px 8px 25px;
    margin: 0 0 10px 0;
    border: 3px solid #fff;
    border-radius: 25px 25px 25px 0;
    background: #fd8c00;
    box-shadow:  0 0 0 3px #fd8c00;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    position: relative;
}
.main-timeline .title i{
    display: inline-block;
    font-size: 30px;
    margin-left: 5px;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
}
.main-timeline .description{
    padding: 0 15px;
    font-size: 15px;
    color: #000;
    letter-spacing: 1px;
    margin: 0 0 5px 0;
}
.main-timeline .timeline:nth-child(2n){
    float: left;
    padding: 10px 50px 10px 100px;
}
.main-timeline .timeline:nth-child(2n):before{
    left: auto;
    right: -15px;
}
.main-timeline .timeline:nth-child(2n) .timeline-content{ text-align: right; }
.main-timeline .timeline:nth-child(2n) .title{
    padding: 8px 25px 8px 60px;
    border-radius: 25px 25px 0 25px;
}
.main-timeline .timeline:nth-child(2n) .title i{
    right: auto;
    left: 15px;
}
.main-timeline .timeline:nth-child(2n):before,
.main-timeline .timeline:nth-child(2n) .title{
    background: #018e8f;
    box-shadow: 0 0 0 3px #018e8f;
}
.main-timeline .timeline:nth-child(3n):before,
.main-timeline .timeline:nth-child(3n) .title{
    background: #0062b0;
    box-shadow: 0 0 0 3px #0062b0;
}
.main-timeline .timeline:nth-child(4n):before,
.main-timeline .timeline:nth-child(4n) .title{
    background: #fa2300;
    box-shadow: 0 0 0 3px #fa2300;
}
@media only screen and (max-width: 1200px){
    .main-timeline .title{
        font-size: 20px;
        padding-left: 10px;
    }
    .main-timeline .timeline:nth-child(2n) .title{ padding-right: 10px; }
}
@media only screen and (max-width: 990px){
    .main-timeline .timeline,
    .main-timeline .timeline:nth-child(2n){ padding: 10px 50px; }
}
@media only screen and (max-width: 767px){
    .main-timeline:before{ left: 20px; }
    .main-timeline .timeline,
    .main-timeline .timeline:nth-child(even),
    .main-timeline .timeline:nth-child(odd){
        width: 100%;
        float: none;
        padding: 10px 50px 10px 55px;
    }
    .main-timeline .timeline:before,
    .main-timeline .timeline:nth-child(2n):before{ left: 5px; }
    .main-timeline .timeline:nth-child(2n) .timeline-content{ text-align: left; }
    .main-timeline .timeline:nth-child(2n) .title{
        padding: 8px 55px 8px 10px;
        border-radius: 25px 25px 25px 0;
    }
    .main-timeline .timeline:nth-child(2n) .title i{
        left: auto;
        right: 15px;
    }
}
@media only screen and (max-width: 479px){
    .main-timeline .timeline,
    .main-timeline .timeline:nth-child(2n){ padding: 10px 0 10px 55px; }
}
</style>
