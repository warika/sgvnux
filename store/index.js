import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      groups: [
        {
          name:'Aluminium Tile Trim',
          thainame:'คิ้วขอบกระเบื้องอลูมิเนียม',
          description:' Success Aluminum tile trim is used to decorate the tile edge for an elegance look and prevent cracking at the connecting joints. Very durable and long lasting.  ',
          thaidescription:' คิ้วอลูมิเนียม SUCCESS ใช้สำหรับงานตบแต่งขอบกระเบื้อง ให้มีความสวยงาม และป้องกันการแตกร้าวของรอยต่อขอ กระเบื้อง มีอายุการใช้งานยาวนาน เหมาะสำหรับ งานภายนอกและภายในอาคาร ที่ต้องการความหรูหราและคงทนถาวร ',
          images: {
            slides: [
              {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/B20.jpg', text: ''},
            ]
          },
          lengths: ['2000'],
          colors: [
            'GS',
            'ST',
            'GT'
          ],
          models: [
            {
              name: 'B20',
              size: '23.6x9.9 ',
              pack: '20',
              colors: ['GS','ST', 'GT'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            },
            {
              name: 'B60',
              size: '28.5x13.6',
              pack: '20',
              colors: ['GS','ST', 'GT'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            }
          ]
        },
        //al stair
        {
          name:'Aluminium Stair Nosing',
          thainame:'จมูกบันไดอลูมิเนียม',
          description:'Aluminum stair nosing is used with common classical stairs. It is durable and resistant to sunlight. Suitable for both internal and external use, for those wanting a luxurious look. This is a very popular product.',
          thaidescription:'จมูกบันไดอลูมิเนียม ใช้กับบันไดทั่วไปที่เน้นความคลาสสิค คงทนถาวร ทนทุกสภาพ ไม่ว่าจะเป็นแสงแดดเหมาะสำหรับงานภายในและภายนอกที่ต้องการความหรูหรา เป็นสินค้าที่ได้รับความนิยมมาก',
          images: {
            slides: [
              {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/L50(ALU).jpg', text: ''}
            ]
          },
          lengths: ['2000, 2500'],
          colors: [
            'GS',
            'ST',
            'GT'
          ],
          models: [
            {
              name: 'L38',
              size: '38x18',
              pack: '20',
              colors: ['GS','ST', 'GT'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 2500'
            },
            {
              name: 'L50',
              size: '50x22',
              pack: '20',
              colors: ['GS','ST', 'GT'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 2500'
            }
          ]
        },
        //PVC  Tile Trim
        {
          name:'PVC Tile Trim',
          thainame:'คิ้วขอบกระเบื้อง PVC',
          description:' SUCCESS in a leading supplier of Grade A PVC tile trim that are finished in a stunning, beautiful ,and used for interior edge tiles. Tile trim is used to prevent cracking between connecting tiles and is available in 2 type which are 1. un-coating model G30, D30, F40 ,and W60. 2.super UV coating Model This model is more shinny than the un-coating. U30,U40,U60 ,and UCD.',
          thaidescription:'SUCCESS เป็นผู้นำด้านคิ้วพีวีซีใช้สำหรับตขอบกระเบื้องให้มีความสวยงาม และป้องกันการแตกร้าวของรอยต่อขอบกระเบื้อง คิ้วแบบไม่เคลือบ UV ลักษณะเป็นคิ้วผิวด้าน ราคาประหยัดกว่าแบบเคลือบ ได้แก่ สินค้ารุ่น G30, D30, F40, และ W60',
          images: {
            slides: [
              {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/G30.jpg', text: ''}
            ]
          },
          lengths: ['2000'],
          colors: [
            'W101','G201','G202','G203','C601','C602','T600','B300','B301','B302','B303','B304',
            'B305','GR701','GR702','GR703','GR704','R401','R404','R402','R407','P100','Y100','BR801','BR802',
            'BL901'
          ],
          models: [
            {
              name: 'GOODY G30',
              size: '22X8',
              pack:'100',
              colors: ['W101','G201','G202','G203','C601','C602','T600','B300','B301','B302','B303','B304',
              'B305','GR701','GR702','GR703','GR704','R401','R402','R404','R407','P100','Y100','BR801','BR802',
              'BL901'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            },
            {
              name: 'DRAGON D30',
              size: '22x8',
              pack:'100',
              colors: ['W101','G201','G202','G203','C601','C602','T600','B300','B301','B302','B303','B304',
              'B305','GR701','GR702','GR703','R401','R402','R404','R407','P100','Y100','BR801','BR802',
              'BL901'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            },
            {
              name: 'SUCCESS F40',
              size: '22x10',
              pack:'100',
              colors: ['W101','G201','G202','G203','C601','C602','B300','B301','B302','B303','B304',
              'GR701','GR702','R401','R402','R404','R407','P100','BR801','BR802',
              'BL901'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            },
            {
              name: 'BOOM W60',
              size: '22x12',
              pack:'100',
              colors: ['W101','G201','C601','C602','B300','BR801','BR802','BL901'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            }
          ]
        },
        //upvc
        {
        name:'UPVC Tile Trim',
        thainame:'คิ้วขอบกระเบื้อง PVC เคลือบเงา',
        description:' SUCCESS in a leading supplier of Grade A PVC tile trim that are finished in a stunning, beautiful ,and used for interior edge tiles. Tile trim is used to prevent cracking between connecting tiles and is available in 2 type which are 1. un-coating model G30, D30, F40 ,and W60. 2.super UV coating Model This model is more shinny than the un-coating. U30,U40,U60 ,and UCD.',
        thaidescription:'SUCCESS เป็นผู้นำด้านคิ้วพีวีซีใช้สำหรับตขอบกระเบื้องให้มีความสวยงาม และป้องกันการแตกร้าวของรอยต่อขอบกระเบื้อง  คิ้วแบบเคลือบ UV เป็นนวัตกรรมการเคลือบผิวด้วยแสงอัลตร้าไวโอเลต ผิวมีความมันวาว ทั้งยังไม่เกิดคราบเชื้อรา ได้แก่ สินค้ารุ่น U30, U40, U60 และ UCD',
        images: {
          slides: [
            {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/U40.jpg', text: ''}

          ]
        },
        lengths: ['2000'],
        colors: [
          'W101','G201','G202','G203','C601','C602','T600','B300','B301','B302','B303','B304',
          'B305','GR701','GR702','GR703','GR704','R401','R404','R402','R407','P100','Y100','BR801','BR802',
          'BL901'
        ],
        models: [
          {
            name: 'DRAGON U30',
            size: '22x8',
            pack:'100',
            colors: ['W101','G201','G202','G203','C601','C602','T600','B300','B301','B302','B303','B304',
            'B305','GR701','GR702','GR703','R401','R402','R404','R407','P100','Y100','BR801','BR802',
            'BL901'],
            images: {
              cover: 'img/portfolio/01-thumbnail.png',
              details: [
                'img/portfolio/01-thumbnail.png',
                'img/portfolio/01-thumbnail.png',
                'img/portfolio/01-thumbnail.png'
              ],
              footer: 'img/portfolio/01-thumbnail.png'
            },
            lengths: '2000'
          },
          {
            name: 'SUCCESS U40',
            size: '22x10',
            pack:'100',
            colors: ['W101','G201','G202','G203','C601','C602','B300','B301','B302','B303','B304',
            'GR701','GR702','R401','R402','R404','R407','P100','BR801','BR802',
            'BL901'],
            images: {
              cover: 'img/portfolio/01-thumbnail.png',
              details: [
                'img/portfolio/01-thumbnail.png',
                'img/portfolio/01-thumbnail.png',
                'img/portfolio/01-thumbnail.png'
              ],
              footer: 'img/portfolio/01-thumbnail.png'
            },
            lengths: '2000'
          },
          {
            name: 'BOOM U60',
            size: '22x12',
            pack:'100',
            colors: ['W101','G201','C601','C602','B300','BR801','BR802','BL901'],
            images: {
              cover: 'img/portfolio/01-thumbnail.png',
              details: [
                'img/portfolio/01-thumbnail.png',
                'img/portfolio/01-thumbnail.png',
                'img/portfolio/01-thumbnail.png'
              ],
              footer: 'img/portfolio/01-thumbnail.png'
            },
            lengths: '2000'
          },
          {
            name: 'DRAGON UCD',
            size: '16x8',
            pack:'100',
            colors: ['W101','C601','C602','B300','BR801'],
            images: {
              cover: 'img/portfolio/01-thumbnail.png',
              details: [
                'img/portfolio/01-thumbnail.png',
                'img/portfolio/01-thumbnail.png',
                'img/portfolio/01-thumbnail.png'
              ],
              footer: 'img/portfolio/01-thumbnail.png'
            },
            lengths: '2000'
          }
        ]
      },
        // PVC Stair nosing
        {
          name:'PVC Stair Nosing',
          thainame:'จมูกบันได PVC',
          description:' Made from Grade A PVC material, durable and flexible, shiny and glossy finish. Easy to clean once installed. Available in many sizes.Stair nosing, especially in commercial and industrial settings, is typically fitted with a non-slip surface to increase traction and prevent injury or even death from slips, trips, and falls.',
          thaidescription:' ผลิตจาก PVC เกรด A ใช้เผื่อปิดขอบบันได ป้องกันไม่ให้ขอบบันไดบิ่น หรือ แตก ทั้งช่วยป้องกันการลื่น และสะดุดล้มในขณะขึ้นลง บันได  เป็นผลิตภัณฑ์มีความคงทนและยืดหยุ่นสูง ชิ้นงานเงางาม ทำความสะอาดง่ายเมื่อติดตั้งเสร็จ มีหลายขนาดให้เลือกใช้ ',
          images: {
            slides: [
              {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/L38.jpg', text: ''}

            ]
          },
          lengths: ['1000','1250','2000','2500'],
          colors: ['W101','G201','G203','C601','T600','B300','B301','B302','B303','B304',
              'GR701','GR702','GR703','R401','R402','R404','R407','Y100','BR801','BR802',
              'BL901'],
          models: [
            {
              name: 'L38SS',
              size: '38X15',
              pack:'20',
              colors: ['W101','G201','G203','C601','T600','B300','B301','B302','B303','B304',
                  'BGR701','GR702','GR703','R401','R402','R404','R407','Y100','BR801','BR802',
                  'BL901'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 2500'
            },
            {
              name: 'L38',
              size: '38x15',
              pack:'20',
              colors: ['W101','G201','G203','C601','T600','B300','B301','B302','B303',
                  'BGR701','GR702','R401','R402','R404','BR801','BR802',
                  'BL901'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 2500'
            },
            {
              name: 'L45',
              size: '45x18',
              pack:'20',
              colors: ['W101','G201','G203','C601','T600','B301','B302',
                  'GR702','R401','R402','R404','BR801','BR802'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 2500'
            },
            {
              name: 'L50',
              size: '50x20',
              pack:'20',
              colors: ['W101','G201','C601','T600','BR801','BR802','BL901'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 2500'
            },
            {
              name: 'NL38',
              size: '38x10.4',
              pack:'20',
              colors: ['W101','G201','G203','C601','T600','B300','B301','B302','B303',
                  'BGR701','GR702','R401','R402','R404','BR801','BR802',
                  'BL901'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 2500'
            },
            {
              name: 'NL45',
              size: '45x10.4',
              pack:'20',
              colors: ['W101','G201','G203','C601','T600','B301','B302',
                  'GR702','R401','R402','R404','BR801','BR802'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 2500'
            },
            {
              name: 'NL50',
              size: '50x10.4',
              pack:'20',
              colors: ['W101','G201','C601','T600','BR801','BR802','BL901'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 2500'
            }
          ]
        },
        //pvc skirting board
        {
          name:'PVC Skirting Board',
          thainame:'บัวเชิงผนัง PVC',
          description:'  Our skirting board is made from PVC. you need to remember all the accessories to finish off the job properly and make sure your floor looks the best it can. Skirting boards are the strips that sit at the bottom of your walls, on the edges of the flooring to tidy it up and protect the walls and the laminated tile trim also made your laminated floor and digital printing tile to be united.',
          thaidescription:'บัวเชิงผนัง สามารถติดตั้งง่ายด้วยกาวตะปู มีทั้งแบบสีพื้น ราคาประหยัด และแบบเคลือบลามิเนตลายไม้',
          images: {
            slides: [
              {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/BUL.jpg', text: ''}

            ]
          },
          lengths: ['2000','3000'],
          colors: ['W101','G201','C601','BR802'],
          models: [
            {
              name: 'BUC',
              size: '98x9',
              pack: '10',
              colors: ['W101','G201','C601','BR802'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 3000'
            },
            {
              name: 'BUL',
              size: '98x9',
              pack: '10',
              colors: ['Y01','Y02','B03','M04','M05','M06','M07'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 3000'
            },
          ]
        },
        //pvc groove
        {
          name:'PVC Groove',
          thainame:'เซาะร่อง PVC',
          description:'Made from grade A PVC for achieving more beautiful straight line than grooving by hand can. Prevents cracking between ceilings and concreate beans every 4 or 6 meters. Surface can be painted on. Resistant to flexibility',
          thaidescription:'    เซาะร่อง เป็นผลิตภัณฑ์ พีวีซี เกรด A ช่วยให้ร่องที่มีแนวตรง สวยงามกว่าการเซาะร่องด้วยมือ ช่วยป้องกันการแตกร้าวของปูนใต้คานทุกๆ ช่อง 4 เมตร หรือ 6 เมตร  สามารถใช้สีทาทับที่ชิ้นงานได้ ทนความยืดหยุ่นได้ดี',
          images: {
            slides: [
              {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/JC.jpg', text: ''},

            ]
          },
          lengths: ['2000'],
          colors: [
            'W101',
            'G202',
            'C601'
          ],
          models: [
            {
              name: 'JC6',
              size: '6x7',
              pack: '100',
              colors: ['W101','G202','C601'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            },
            {
              name: 'JC10',
              size: '10x8',
              pack: '100',
              colors: ['W101','G202','C601'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            },
            {
              name: 'JC15',
              size: '15x10',
              pack: '100',
              colors: ['W101','G202','C601'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            },
            {
              name: 'JC20',
              size: '20x12',
              pack: '100',
              colors: ['W101','G202','C601'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            },
            {
              name: 'JC25',
              size: '25x12.5',
              pack: '50',
              colors: ['W101','G202','C601'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            },
            {
              name: 'JC30',
              size: '30x13.5',
              pack: '50',
              colors: ['W101','G202','C601'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            }
          ]
        },
        //pvc corner bead
        {
          name:'PVC Corner Bead',
          thainame:'เซี้ยม PVC',
          description:'Success PVC corner bead are flexible and highly durable. Use to maintain a straight plaster line, speed up the construction speed, improve project quality.',
          thaidescription:'       เซี้ยม พีวีซี SUCCESS เป็นผลิตภัณฑ์ที่มีความยืดหยุ่นและคงทนสูง ใช้ในงานจับมุมแนวฉาบปูนเพื่อให้ได้แนวตรง และฉาบปูนเรียบที่สวยงาม (ประหยัดปูนในการฉาบ) ประหยัดเวลาทำงาน และช่วยลดต้นทุนงาน',
          images: {
            slides: [
              {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/CT6.jpg', text: ''},

            ]
          },
          lengths: ['2000, 2500','2700'],
          colors: [
            'W101',
            'G202',
            'C601'
          ],
          models: [
            {
              name: 'CT6',
              size: '20x18',
              pack: '150',
              colors: ['W101','G202','C601'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 2500'
            },
            {
              name: 'CT10',
              size: '25x21',
              pack: '100',
              colors: ['W101','G202','C601'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000, 2500'
            }
          ]
        },
        //pvc chamfer
        {
          name:'PVC Chamfer',
          thainame:'สามเหลี่ยมลบมุม PVC',
          description:' PVC Chamfer is used in construction work to reduce corners of concrete columns/posts and the corner of footpaths and embankments. It also can be used instead of wood triangles.',
          thaidescription:' สามเหลี่ยมลบมุม  เป็นผลิตภัณฑ์ที่ใช้ในการก่อสร้าง เช่น งานลบมุมเสา งานแนวขอบทางเท้า คันทางถนน สามารถตอกตะปูและติดกาวยางหรือกาวร้อนที่แนบไม้ได้ งานที่ออกมาจะได้มุมสวยกว่าไม้สามเหลี่ยมธรรมดา ใช้งานได้หลายครั้งกว่าไม้สามเหลี่ยม  .ลดต้นทุนในด้านวัสดุ และเวลาการทำงาน',
          images: {
            slides: [
              {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/CF.jpg', text: ''},

            ]
          },
          lengths: ['2000'],
          colors: ['BL901'],
          models: [
            {
              name: 'CF25',
              size: '25x13',
              pack: '100',
              colors: ['BL901'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            },
            {
              name: 'CF38',
              size: '38x19',
              pack: '48',
              colors: ['BL901'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            },
            {
              name: 'CF50',
              size: '50x25',
              pack: '24',
              colors: ['BL901'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: '2000'
            }
          ]
        },
        //pvc multi purpose matt
        {
          name:'PVC Multipurpose Mat',
          thainame:'แผ่นกันลื่แผ่นกันลื่นเอนกประสงค์',
          description:' PVC Multipurpose Mat is made from grade A materials are available for all area such as bathrooms, kitchen floors, balconies, garden and swimming pools, to reduce the occurrence of accidental falls especially among children and elderly.    ',
          thaidescription:'แผ่นกันลื่นเอนกประสงค์ ลดอันตรายของพื้นผิวที่เปียก วางมุมในก็สวยงามโดดเด่น เช่น ห้องน้ำ หน้องครัว เฉลียงบ้าน แต่งมุมสวยในสวน สนามหญ้า สระว่ายน้ำ ช่วยลดอุบัติเหตุโดยเฉพาะในเด็กและผู้สูงอายุ',
          images: {
            slides: [
              {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/SM.jpg', text: ''},

            ]
          },

          colors: ['G201','C601','T600','B300','B301','B303','B304','GR701','R402','P100','Y100','BR801','BR802'],
          models: [
            {
              name: 'SM6045',
              size: '600X450',
              pack: '12',
              colors: ['G201','C601','T600','B300','B301','B303','B304','GR701','R402','P100','Y100','BR801','BR802'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: ''
            },
            {
              name: 'SM6075',
              size: '600X750',
              pack: '12',
              colors: ['G201','C601','T600','B300','B301','B303','B304','GR701','R402','P100','Y100','BR801','BR802'],
              images: {
                cover: 'img/portfolio/01-thumbnail.png',
                details: [
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png',
                  'img/portfolio/01-thumbnail.png'
                ],
                footer: 'img/portfolio/01-thumbnail.png'
              },
              lengths: ''
            }
          ]
        },
        //TD
        {
          name:'TD Wire Way',
          thainame:'รางสายไฟ TD',
          description:' ',
          thaidescription:'สำหรับใช้เก็บรวบรวม สายโทรศัพท์ สายไฟ หรืออุปกรณ์อิเล็กทรอนิกส์ต่างๆ ลักษณะทรงสี่เหลี่ยม สามารถเดินตามขอบมุมผนัง ทั้งด้านบนและล่าง',
          images: {
            slides: [
              {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/TD.jpg', text: ''},

            ]
          },
          lengths: ['2000'],
          colors: ['W101','G202'],
          models: [
            {
              name: 'TD02',
              size: '9X15',
              pack: '50',
              colors: ['W101','G202'],
              images: {
                cover: '',
                details: '',
                footer: ''
              },
              lengths: '2000'
            },
            {
              name: 'TD03',
              size: '10X21',
              pack: '50',
              colors: ['W101','G202'],
              images: {
                cover: '',
                details: '',
                footer: ''
              },
              lengths: '2000'
            },
            {
              name: 'TD04',
              size: '15X25',
              pack: '50',
              colors: ['W101','G202'],
              images: {
                cover: '',
                details: '',
                footer: ''
              },
              lengths: '2000'
            },
            {
              name: 'TD05',
              size: '16X27',
              pack: '50',
              colors: ['W101','G202'],
              images: {
                cover: '',
                details: '',
                footer: ''
              },
              lengths: '2000'
            },
            {
              name: 'TD06',
              size: '18X28',
              pack: '50',
              colors: ['W101','G202'],
              images: {
                cover: '',
                details: '',
                footer: ''
              },
              lengths: '2000'
            },
          ]
        },
        // ETM WIREWAY
        {
            name:'ETM Wire Way',
            thainame:'รางสายไฟ ETM',
            description:' ',
            thaidescription:'สำหรับใช้เก็บรวบรวม สายโทรศัพท์ สายไฟ หรืออุปกรณ์อิเล็กทรอนิกส์ต่างๆ ลักษณะทรสี่เหลี่ยม สามารถเดินตามขอบมุมผนัง ทั้งด้านบนและล่าง รางไฟลักษณะพิเศษแบ่งได้สองช่อง สามารถแบ่งหมวดหมู่ตามประเภทสายได้ ',
            images: {
              slides: [
                {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/ETM.jpg', text: ''},

                ]
              },
            lengths: ['2000'],
            colors: ['W101','G202'],
            models: [
                  {
                name: 'ETM2',
                size: '12X19',
                pack: '50',
                colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETM3',
                size: '12X25',
                pack: '50',
                colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
                },
                {
                  name: 'ETM4',
                  size: '12X38',
                  pack: '40',
                  colors: ['W101','G202'],
                  images: {
                    cover: '',
                    details: '',
                    footer: ''
                  },
                  lengths: '2000'
                },
                {
                  name: 'ETM5',
                  size: '12X50',
                  pack: '30',
                  colors: ['W101','G202'],
                  images: {
                    cover: '',
                    details: '',
                    footer: ''
                  },
                  lengths: '2000'
                },
              ]
            },
        //etd
        {
            name:'ETD Wire Duct',
            thainame:'รางสายไฟ ETD',
            description:' ',
            thaidescription:'รางเก็บสายไฟทรงสี่เหลี่ยม ด้านข้างมีรูโปร่ง แบ่งย่อยเป็นช่องๆ เพื่อความสะดวกในการแยกสายเข้าตามจุดต่างๆ ในการใช้งาน เหมาะสำหรับเดินสายไฟที่ต้องใช้แยกตามจุดต่างๆ หลายจุด ',
            images: {
              slides: [
                {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/ETD.jpg', text: ''},

              ]
            },
            lengths: ['2000'],
            colors: ['W101','G202'],
            models: [
              {
                name: 'ETD2020',size: '20X20',pack: '20',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETD3030',size: '30X30',pack: '20',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETD4030',size: '40X30',pack: '15',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETD4040',size: '40X40',pack: '12',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETD4060',size: '40X60',pack: '12',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETD6040',size: '60X40',pack: '12',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETD6060',size: '60X60',pack: '12',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETD6080',size: '60X80',pack: '12',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETD8080',size: '80X80',pack: '12',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
            ]
          },
        //ETB
        {
            name:'ETB Wire Way',
            thainame:'รางสายไฟ ETB',
            description:' ',
            thaidescription:'สำหรับใช้เก็บรวบรวม สายโทรศัพท์ สายไฟ หรืออุปกรณ์อิเล็กทรอนิกส์ต่างๆ ลักษณะทรสี่เหลี่ยม ติดตั้งตามขอบมุมผนังได้',
            images: {
              slides: [
                {src: 'https://assets.sgvthailand.com/supgangvarl/image/productphoto/ETB.jpg', text: ''},

              ]
            },
            lengths: ['2000'],
            colors: ['W101','G202'],
            models: [
              {
                name: 'ETB2020',size: '20X20',pack: '20',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETB3030',size: '30X30',pack: '20',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETB4030',size: '40X30',pack: '15',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETB4040',size: '40X40',pack: '12',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETB4060',size: '40X60',pack: '12',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETB6040',size: '60X40',pack: '12',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETB6060',size: '60X60',pack: '12',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETB6080',size: '60X80',pack: '12',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
              {
                name: 'ETB8080',size: '80X80',pack: '12',colors: ['W101','G202'],
                images: {
                  cover: '',
                  details: '',
                  footer: ''
                },
                lengths: '2000'
              },
            ]
          },
      ],
      colors: [
        {hex:'#000000', name:'BL901'},
        {hex:'#9c6640', name:'BR801'},
        {hex:'#644f34', name:'BR802'},
        {hex:'#e7dfd2', name:'T600'},
        {hex:'#fff7ea', name:'C601'},
        {hex:'#efe0b5', name:'C602'},
        {hex:'#e7e7e9', name:'G201'},
        {hex:'#f3f3f5', name:'G202'},
        {hex:'#b0b1b5', name:'G203'},
        {hex:'#cbdee5', name:'B300'},
        {hex:'#0c5b9d', name:'B301'},
        {hex:'#4d689d', name:'B302'},
        {hex:'#a7dffa', name:'B303'},
        {hex:'#bde5dd', name:'B304'},
        {hex:'#50bae1', name:'B305'},
        {hex:'#a6c0a3', name:'GR701'},
        {hex:'#004a31', name:'GR702'},
        {hex:'#077f59', name:'GR703'},
        {hex:'#15b9a0', name:'GR704'},
        {hex:'#da6427', name:'P100'},
        {hex:'#c54045', name:'R401'},
        {hex:'#fde3ee', name:'R402'},
        {hex:'#801f48', name:'R404'},
        {hex:'#f1bec7', name:'R407'},
        {hex:'#ffffff', name:'W101'},
        {hex:'#ceb72d', name:'Y100'},
        {hex:'#e0e1e3', name:'GS'},
        {hex:'#e3dfdc', name:'ST'},
        {hex:'#d2ccac', name:'GT'}
      ]
    }),
    mutations: {}
  })
}

export default createStore
