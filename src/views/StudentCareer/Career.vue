<template>
  <div class="wrap">
    <div class="main">
      <div class="header">
        <img src="@/assets/images/首页改1_85.gif" alt="" />
      </div>
      <div class="tabs">
        <span
          v-for="item in student"
          :key="item.type"
          @click="handleClick(item)"
          :class="{ active: item.type == current }"
        >
          {{ item.name }}
        </span>
      </div>
      <div class="list">
        <ul v-if="current == '0'">
          <li style="margin-top: 0rem">
            <span class="text">1、39岁的小伙子,就发生...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">2、市北市民留言咨询这...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">3、美供应链受阻问题雪...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">4、篮网有能力解决他们...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">5、记者实测快递企业...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">6、养老金有哪些渠道可...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">7、怎么样买保险才是最...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">8、全面建成小康社会的...</span>
            <span class="time">2021.10.15</span>
          </li>
          <!-- <li>
            <span class="text">9、摩根士丹利重磅报告...</span>
            <span class="time">2021.10.15</span>
          </li> -->
        </ul>
        <ul v-if="current == '1'">
          <li style="margin-top: 0rem">
            <span class="text">1、39岁的小伙子,就发生...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">2、市北市民留言咨询这...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">3、美供应链受阻问题雪...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">4、篮网有能力解决他们...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">5、记者实测快递企业...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">6、养老金有哪些渠道可...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">7、怎么样买保险才是最...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">8、全面建成小康社会的...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">9、摩根士丹利重磅报告...</span>
            <span class="time">2021.10.15</span>
          </li>
        </ul>
        <ul v-if="current == '2'">
          <li style="margin-top: 0rem">
            <span class="text">1、39岁的小伙子,就发生...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">2、市北市民留言咨询这...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">3、美供应链受阻问题雪...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">4、篮网有能力解决他们...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">5、记者实测快递企业...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">6、养老金有哪些渠道可...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">7、怎么样买保险才是最...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">8、全面建成小康社会的...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">9、摩根士丹利重磅报告...</span>
            <span class="time">2021.10.15</span>
          </li>
        </ul>
        <ul v-if="current == '3'">
          <li style="margin-top: 0rem">
            <span class="text">1、39岁的小伙子,就发生...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">2、市北市民留言咨询这...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">3、美供应链受阻问题雪...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">4、篮网有能力解决他们...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">5、记者实测快递企业...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">6、养老金有哪些渠道可...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">7、怎么样买保险才是最...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">8、全面建成小康社会的...</span>
            <span class="time">2021.10.15</span>
          </li>
          <li>
            <span class="text">9、摩根士丹利重磅报告...</span>
            <span class="time">2021.10.15</span>
          </li>
        </ul>
      </div>
      <div class="information_con_btm">
            <div class="btm_border">
                <span>查看更多资讯</span>
                <img src="../../assets/images/sou.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
const student = [
  {
    name: "初中生",
    type: "0",
  },
  {
    name: "高中生",
    type: "1",
  },
  {
    name: "三校生",
    type: "2",
  },
  {
    name: "艺考生",
    type: "3",
  },
];
export default {
  name: "career",
  data() {
    return {
      student,
      current: "0", //默认选中第一个tab
    };
  },
  methods: {
    //点击的时候改变current
    handleClick(item) {
      this.current = item.type;
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.14rem;
}
body {
  background: #eaeaea;
}
.wrap {
  display: flex;
  justify-content: center;
  background: #eaeaea;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  .main {
    width: 3.55rem;
    height: 5.36rem;
    background-color: #ffffff;
    box-shadow: 0.01rem 0.02rem 0.02rem 0 rgba(228, 228, 228, 0.51);
    border-radius: 0.05rem;
    position: relative;
    .header {
      width: 3.55rem;
      height: 0.55rem;
      img {
        width: 3.55rem;
        height: 0.55rem;
      }
    }
    .tabs {
      width:  3.48rem;
      height: 0.39rem;
      margin: 0 auto;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.05rem;
      border-top-left-radius: 0.15rem;
      border-top-right-radius: 0.15rem;
      overflow: hidden;
      .active {
        background-color: rgb(23, 118, 175);
        color: rgb(211, 224, 235);
      }
      span {
        width: 3.55rem;
        height: 0.39rem;
        text-align: center;
        line-height: 0.39rem;
        background: rgb(194, 194, 194);
        // border-top-left-radius: 0.04rem;
        // border-top-right-radius: 0.04rem;
        color: rgb(102, 102, 102);
        z-index: 10;
        // margin-left: 0.02rem;
      }
    }
    .list {
      width: 3.45rem;
      height: 3.78rem;
      border-radius: 0 0 0.06rem 0.06rem;
      border: 0.01rem solid #1776af;
      position: absolute;
      top: 0.79rem;
      left: 0.04rem;
      ul {
        width: 3.36rem;
        height: 3.2rem;
        display: flex;
        flex-direction: column;
        margin-top: 0.42rem;
        li {
          //   width: 3.36rem;
          height: 0.15rem;
          border-bottom: 0.01rem solid #ccc;
          margin-left: 0.04rem;
          margin-top: 0.2rem;
          .text {
            // width: 1.76rem;
            height: 0.15rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.15rem;
            line-height: 0.12rem;
            letter-spacing: 0;
            color: #333333;
            float: left;
          }
          .time {
            width: 0.74rem;
            height: 0.11rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.14rem;
            line-height: 0.12rem;
            letter-spacing: 0;
            color: #999999;
            float: right;
          }
        }
      }
    }
     .information_con_btm{
            width: 3.31rem;
            height: 0.44rem;
            position: absolute;
            bottom: 0.25rem;
            left: 0.12rem;
                // padding: .15rem .12rem .25rem .12rem;
                .btm_border{
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                    border: solid 1px #1776af;
                    text-align: center;
                    line-height: .42rem;
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
    .footer {
      width: 3.31rem;
      height: 0.44rem;
      position: absolute;
      bottom: 0.25rem;
      left: 0.12rem;
      img {
        width: 3.31rem;
        height: 0.44rem;
      }
    }

  }
}
</style>
