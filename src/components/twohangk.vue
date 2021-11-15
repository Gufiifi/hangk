<template>
    <div class="hang">
       <div class="hang_img">
           <img src="@/assets/images/国际航空服务与管理_02.jpg" alt="">
       </div>

      <div class="page">
        <p>当前位置：<span>首页></span><span class="pan">航空学院</span></p>
      </div>
      

      <div class="contwo_vido">
      <div class="swiper">
        <div class="swiper-container" id="sVideo">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              id="Vimg"
              v-for="(item, index) in img"
              :key="index"
            >
              <img :src="item.pic" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
         
          <img
            class="swiper-button-prev"
            id="one"
            src="@/assets/images/首页改1_10.gif"
            alt=""
          />
          <img
            class="swiper-button-next"
            id="two"
            src="@/assets/images/未标题-1_03.gif"
            alt=""
          />
        </div>
      </div>
     </div>
   
     <div id="fen">
           <!-- 如果需要分页器 -->
            <div class="swiper-pagination"  style="color: #00f0ff"></div>
        </div>

     <div class="cen">
        <div class="cen_img">
           <img src="@/assets/images/国际航空服务与管理_22.jpg" alt="">
        </div>

      <div class="fang">
           <img src="@/assets/images/国际航空服务与管理_26.jpg" alt="">
           <h3>大连海事大学</h3>
           <div class="xue">
              <p>学校所在地：</p><span>大连</span>
           </div>
           <div class="xue">
             <p>专业设置：</p><span>飞行器专业</span>
           </div>
           <div class="xue">
              <span id="fi">电子工程专业计算机专业理学院</span>
           </div>
           <div class="xue">
              <p>学校优势：</p><span>专业任选 推荐就业</span>
           </div>
           <div class="xue">
             <span id="fi">一对一教学</span>
           </div>
        </div>

      <div class="fang">
           <img src="@/assets/images/国际航空服务与管理_28.jpg" alt="">
           <h3>大连海事大学</h3>
           <div class="xue">
              <p>学校所在地：</p><span>大连</span>
           </div>
           <div class="xue">
             <p>专业设置：</p><span>飞行器专业</span>
           </div>
           <div class="xue">
              <span id="fi">电子工程专业计算机专业理学院</span>
           </div>
           <div class="xue">
              <p>学校优势：</p><span>专业任选 推荐就业</span>
           </div>
           <div class="xue">
             <span id="fi">一对一教学</span>
           </div>
        </div>

        <div class="fang">
           <img src="@/assets/images/国际航空服务与管理_32.jpg" alt="">
           <h3>大连海事大学</h3>
           <div class="xue">
              <p>学校所在地：</p><span>大连</span>
           </div>
           <div class="xue">
             <p>专业设置：</p><span>飞行器专业</span>
           </div>
           <div class="xue">
              <span id="fi">电子工程专业计算机专业理学院</span>
           </div>
           <div class="xue">
              <p>学校优势：</p><span>专业任选 推荐就业</span>
           </div>
           <div class="xue">
             <span id="fi">一对一教学</span>
           </div>
        </div>

        <div class="fang">
           <img src="@/assets/images/国际航空服务与管理_33.jpg" alt="">
           <h3>大连海事大学</h3>
           <div class="xue">
              <p>学校所在地：</p><span>大连</span>
           </div>
           <div class="xue">
             <p>专业设置：</p><span>飞行器专业</span>
           </div>
           <div class="xue">
              <span id="fi">电子工程专业计算机专业理学院</span>
           </div>
           <div class="xue">
              <p>学校优势：</p><span>专业任选 推荐就业</span>
           </div>
           <div class="xue">
             <span id="fi">一对一教学</span>
           </div>
        </div>

        <div class="fang">
           <img src="@/assets/images/国际航空服务与管理_36.jpg" alt="">
           <h3>大连海事大学</h3>
           <div class="xue">
              <p>学校所在地：</p><span>大连</span>
           </div>
           <div class="xue">
             <p>专业设置：</p><span>飞行器专业</span>
           </div>
           <div class="xue">
              <span id="fi">电子工程专业计算机专业理学院</span>
           </div>
           <div class="xue">
              <p>学校优势：</p><span>专业任选 推荐就业</span>
           </div>
           <div class="xue">
             <span id="fi">一对一教学</span>
           </div>
        </div>

        <div class="fang">
           <img src="@/assets/images/国际航空服务与管理_37.jpg" alt="">
           <h3>大连海事大学</h3>
           <div class="xue">
              <p>学校所在地：</p><span>大连</span>
           </div>
           <div class="xue">
             <p>专业设置：</p><span>飞行器专业</span>
           </div>
           <div class="xue">
              <span id="fi">电子工程专业计算机专业理学院</span>
           </div>
           <div class="xue">
              <p>学校优势：</p><span>专业任选 推荐就业</span>
           </div>
           <div class="xue">
             <span id="fi">一对一教学</span>
           </div>
        </div>
     </div>
  

    <div class="graduation">
      <div class="contwo_cotitle">
        <img src="@/assets/images/国际航空服务与管理_40.jpg" alt="" />
      </div>
      <div class="graduation_swiper">
        <div class="swiper-container gallery-top" id="graduation_swpone">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/images/国际航空服务与管理_42.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/images/国际航空服务与管理_44.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/images/国际航空服务与管理_46.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/images/国际航空服务与管理_48.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/images/国际航空服务与管理_50.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/images/国际航空服务与管理_52.jpg" alt="" />
            </div>
          </div>
          <!-- Add Arrows -->
          <div class="swiper-button-next swiper-button-white"></div>
          <div class="swiper-button-prev swiper-button-white"></div>
        </div>
        <div class="swiper-container gallery-thumbs" id="graduation_swptwo">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/images/国际航空服务与管理_42.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/images/国际航空服务与管理_44.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/images/国际航空服务与管理_46.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/images/国际航空服务与管理_48.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/images/国际航空服务与管理_50.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/images/国际航空服务与管理_52.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>


     <div class="bo">
        <div class="tt">
           <img src="@/assets/images/国际航空服务与管理_40.jpg" alt="">
        </div>

        <div class="wa">
           <div class="wa_ing">
               <img src="@/assets/images/国际航空服务与管理_64.jpg" alt="">
                <span class="a">初中生15岁+</span>
            </div>
            <div class="wa_ing">
               <img src="@/assets/images/国际航空服务与管理_64.jpg" alt="">
                <span class="b">高中生15岁+</span>
            </div>
            <div class="wa_ing">
               <img src="@/assets/images/国际航空服务与管理_64.jpg" alt="">
                <span class="c">三校生15岁+</span>
            </div>
            <div class="wa_ing">
               <img src="@/assets/images/国际航空服务与管理_68.jpg" alt="">
                <span class="d">艺考15岁+</span>
            </div>
           
            <div class="information_con_btm">
            <div class="btm_border">
                <span>查看更多资讯</span>
                <!-- <img src="../../assets/images/sou.png" alt=""> -->
            </div>
        </div>
        </div>
     </div>
     
     <div class="koj">
        <div class="tt">
           <img src="@/assets/images/国际航空服务与管理_40.jpg" alt="">
        </div>
      
      <div class="ai">
        <div class="wenzi">
             <img src="@/assets/images/国际航空服务与管理_74.jpg" alt="">
             <p>就业方向：地勤专业值机、机场安检、VIP客服、易登机、航空票务、两舱的1111111</p>
        </div>
        <div class="wenzi">
                    <img src="@/assets/images/国际航空服务与管理_76.jpg" alt="">
                    <p>就业方向：地勤专业值机、机场安检、VIP客服、易登机、航空票务、两舱的1111111</p>
        </div>
         <div class="wenzi">
                    <img src="@/assets/images/国际航空服务与管理_79.jpg" alt="">
                    <p>就业方向：地勤专业值机、机场安检、VIP客服、易登机、航空票务、两舱的1111111</p>
        </div>
         <div class="wenzi">
                    <img src="@/assets/images/国际航空服务与管理_80.jpg" alt="">
                    <p>就业方向：地勤专业值机、机场安检、VIP客服、易登机、航空票务、两舱的1111111</p>
        </div>
         <div class="wenzi">
                    <img src="@/assets/images/国际航空服务与管理_83.jpg" alt="">
                    <p>就业方向：地勤专业值机、机场安检、VIP客服、易登机、航空票务、两舱的1111111</p>
        </div>
         <div class="wenzi">
                    <img src="@/assets/images/国际航空服务与管理_84.jpg" alt="">
                    <p>就业方向：地勤专业值机、机场安检、VIP客服、易登机、航空票务、两舱的1111111</p>
        </div>
      </div>

     </div>
     <Sos/>
     <Chang />
     <Img/>
    </div>
</template>

<style lang="scss" scoped>
.ai{
    display: flex;
    width: 3.55rem;
    border-radius: 0rem 0rem 0.05rem 0.05rem;
    justify-content: space-between;
    flex-wrap: wrap;
}
h3{
    margin-bottom: 0.3em !important;
}
.hang{
    width: 3.75rem;
    margin: 0 auto;
}
.hang_img{
    width: 100%;
    height: 1.49rem;
}
.hang_img img{
    width: 100%;
    height: 100%;
}
.page{
    height: .53rem;
    width: 3.75rem;
    margin: auto;
    padding: .15rem .2rem;
    color: #888888;
    font-size: .14rem;
    box-sizing: border-box;
}
.pan{
    font-weight: normal;
	letter-spacing: 0px;
	color: #b0b0b0;
}
.contwo_vido {
  width: 3.55rem;
  height: 1.07rem;
  margin: 0 auto;
  background: white;
  border-radius: 0.05rem;
}
#Vimg img {
  width: 1.7rem;
  height: 0.97rem;
  background-color: #b5b5b5;
  border-radius: 0.05rem;
}
#sVideo {
  padding: 0.05rem;
}
#two {
  width: 0.32rem;
  height: 0.31rem;
}
#one {
  width: 0.32rem;
  height: 0.31rem;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background-color: #00c6ec !important; 
}


#fen{
   /* padding: .10rem 0rem .10rem 0; */
    height: .43rem;
    position: relative;
}
.cont_Han{
    width: 3.59rem;
    margin: 0 auto;
}
.Han_one img{
    width: 3.59rem;
	height: .44rem;
}
 
span.swiper-pagination-bullet {
    width: .11rem;
    height: .11rem;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
    margin: .02rem;
}
.swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    left: 1.76rem;
    top: .10rem;
}
.cen{
    display: flex;
    flex-wrap: wrap;
    width: 3.59rem;
    border-radius: .05rem;
	height: auto;
    background: white;
    margin: 0 auto;
}
.cen_img{
    /* margin-top: .13rem; */
    width: 100%;
	height: .44rem;
}
.cen_img img{
    width: 100%;
	height: 100%;
}
.fang{
    width: 1.70rem;
	height: 2.10rem;
    background-color: #f4f4f4;
    border-radius: .06rem;
    margin: .10rem .04rem .05rem .04rem;
	
}
.fang img{
    width: 1.70rem;
	height: .90rem;
    
	background-color: #666666;
	border-radius: .05rem .05rem 0 0;
}
.fang h3{
    font-family: PingFang-SC-Heavy;
    font-size: .17rem;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #666666;
}
.xue p{
    padding-left:.05rem ;
    font-size: .10rem;
    color: #666666;
    float: left;
}
.xue span{
    font-size: .09rem;
    color: #999999; 
    float: left;
}
#fi{
  padding-left:.05rem ;
}
.xue{
    padding-bottom: .07rem;
    height: .10rem;
    display: flex;
    width: 100%;
}
.bo{
    width: 3.55rem;
    margin: 0 auto;
}
.tt{
    margin-top: .15rem;
    width: 3.55rem;
	height: .54rem;
}
.tt img{
    width: 100%;
    height: 100%;
}
.wa{
    width: 3.55rem;
	height: 3.8rem;
    margin: 0 auto;
	background-color: #f9fafb;
	border-radius: 0rem 0rem 0.05rem 0.05rem;
    display: flex;
    flex-wrap: wrap;
}
.wa_ing{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
        height: 1.38rem;
        width: 1.15rem;
        margin: .10rem .42rem .05rem .20rem;
}
.wa img{
    float: left;
    width: 1.15rem;
	height: 1.15rem;
}
.wa .a{
    margin-top: .1rem;
    float: left;
    text-align: center;
    width: 1.03rem;
	height: .18rem;
	font-family: MicrosoftYaHei-Bold;
	font-size: .17rem;
	font-weight: normal;
	font-stretch: normal;
	line-height: .07rem;
	letter-spacing: 0px;
	color: #33cc99;
}
.wa .b{
    margin-top: .1rem;
    float: left;
    text-align: center;
    width: 1.03rem;
	height: .18rem;
	font-family: MicrosoftYaHei-Bold;
	font-size: .17rem;
	font-weight: normal;
	font-stretch: normal;
	line-height: .07rem;
	letter-spacing: 0px;
    color: #0099ff;
}
.wa .c{
   margin-top: .1rem;
    float: left;
    text-align: center;
    width: 1.03rem;
	height: .18rem;
	font-family: MicrosoftYaHei-Bold;
	font-size: .17rem;
	font-weight: normal;
	font-stretch: normal;
	line-height: .07rem;
	letter-spacing: 0px;
	color: #ff6666;
}
.wa .d{
    margin-top: .1rem;
    float: left;
    text-align: center;
    width: 1.03rem;
	height: .18rem;
	font-family: MicrosoftYaHei-Bold;
	font-size: .17rem;
	font-weight: normal;
	font-stretch: normal;
	line-height: .07rem;
	letter-spacing: 0px;
    color: #3399cc;
}
 .information_con_btm{
            width: 3.31rem;
            height: 0.44rem;
            margin: 0 auto;
            
                // padding: .15rem .12rem .25rem .12rem;
                .btm_border{
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    border-radius: 5px;
                    border: solid 1px #1776af;
                    text-align: center;
                    line-height: 0.42rem;
                    span{
                        font-size: .16rem;
                        color: #1776af;
                        
                        font-family: PingFang-SC-Medium;
                        font-weight: normal; 
                        font-stretch: normal;
                        letter-spacing: 0px;
                    }
                    img{
                        width: 0.16rem;
                        height: 0.16rem;
                        margin-left: .04rem; 
                        vertical-align: middle;
                        margin-bottom: .02rem;   
                    }
                }
                :hover{
                    background: #3f555f;
                }
                :hover>span{
                    color: #ffffff;
                    font-size: .16rem;
                    font-family: PingFang-SC-Medium;
                    font-weight: normal; 
                    font-stretch: normal;
                    letter-spacing: 0px;
                }
            }
.graduation {
  width: 3.55rem;
  background: white;
  margin: 0 auto;
  margin-top: 0.15rem;
  border-radius: 0.05rem;
}
.contwo_cotitle{
    width: 3.35rem;
    height: .54rem;
}
.contwo_cotitle img{
 width: 100%;
 height: 100%;
}
.graduation_swiper {
  padding: 0.05rem 0 0.08rem 0;
}
#graduation_swpone {
  width: 3.55rem;
  height: 1.98rem;
  img {
    width: 100%;
    height: 100%;
  }
}
#graduation_swptwo {
  display: flex;
  justify-content: space-between;
  img {
    // margin-top: .05rem;
    width: 0.67rem;
    height: 0.67rem;
  }
}
.koj{
    width: 3.55rem;
    height: 0 auto;
    background-color: #ffffff;
    margin: 0 auto;
    border-radius:.05rem ;
}
.wenzi{
    width: 1.75rem;
    height: 1.64rem;
        margin-top: .10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.wenzi img{
    width: 1.73rem;
	height: 1.00rem;
	background-color: #f9fafb;
}
.wenzi p{
    width: 1.53rem;
	height: .44rem;
	font-family: PingFang-SC-Regular;
	font-size: .12rem;
	font-weight: normal;
	font-stretch: normal;
	line-height: .15rem;
	letter-spacing: 0px;
	color: #000000;
     display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import Chang from "@/components/chang.vue"
import Img from "@/components/img.vue"
import Sos from "@/components/sos.vue"
export default {
    components:{
        Chang,
        Img,
        Sos
    },
  data: function () {
    return {
      img: [
        { pic: require("@/assets/images/国际航空服务与管理_05.jpg") },
        { pic: require("@/assets/images/国际航空服务与管理_07.jpg") },
        { pic: require("@/assets/images/国际航空服务与管理_05.jpg") },
        { pic: require("@/assets/images/国际航空服务与管理_07.jpg") },
        { pic: require("@/assets/images/国际航空服务与管理_05.jpg") },
        { pic: require("@/assets/images/国际航空服务与管理_07.jpg") },
      ],
    };
  },
  async mounted() {
    var mySwiper = new Swiper("#sVideo", {
      loop: true, // 循环模式选项
      slidesPerView: 2,
      spaceBetween: 5,
      slidesPerGroup: 2,
      //   autoplay: true, //自动播放
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper("#graduation_swptwo", {
      //   loop: true,
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
      
    });
    var swiper2 = new Swiper("#graduation_swpone", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  },
};



</script>
       