<template>
  <div class="swiper">
    <div class="swiper-container" id="swiperOne">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in img" :key="index">
          <img :src="item.pic" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" style="color: #00f0ff"></div>
      <img
        class="swiper-button-prev"
        id="one"
        src="../../assets/images/首页改1_10.gif"
        alt=""
      />
      <img
        class="swiper-button-next"
        id="two"
        src="../../assets/images/首页改1_13.gif"
        alt=""
      />
    </div>
  </div>
</template>
<script>
//引入swiper
import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  data: function () {
    return {
      img: [
        { pic: require("../../assets/images/首页改1_27.gif") },
        { pic: require("../../assets/images/首页改1_03.gif") },
        { pic: require("../../assets/images/首页改1_03.gif") },
      ],
    };
  },
  async mounted() {
    var mySwiper = new Swiper("#swiperOne", {
      loop: true, // 循环模式选项
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
  },
};
</script>
<style  lang="scss" scoped>
.swiper {
  position: relative;
  width: 3.75rem;
  margin: 0 auto;
  height: 1.5rem;
}
.swiper-slide img {
  width: 3.75rem;
  height: 1.5rem;
}
#one {
  position: absolute;
  width: 0.32rem;
  height: 0.31rem;
  top: 45%;
  left: 0.2rem;
  z-index: 999;
}
#one1 {
  position: absolute;
  width: 0.32rem;
  height: 0.31rem;
  top: 45%;
  left: 0.2rem;
  z-index: 999;
}
#two {
  position: absolute;
  width: 0.32rem;
  height: 0.31rem;
  right: 0.2rem;
  left: 3.2rem;
  opacity: 0.5;
  top: 45%;
  z-index: 999;
}
.swiper-pagination {
  --swiper-theme-color: #00f0ff;
}
</style>