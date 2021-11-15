<template>
  <div class="aviation">
    <div class="aviation-header">
      <img src="../../assets/images/首页改1_33.gif" alt="" />
    </div>
    <div class="aviation-content">
      <ul>
        <li>
          <div class="content-img">
            <img src="../../assets/images/首页改1_40.gif" alt="" />
          </div>
          <div class="content-text">
            <p>北京市航空中学</p>
          </div>
        </li>
        <li>
          <div class="content-img">
            <img src="../../assets/images/首页改1_37.gif" alt="" />
          </div>
          <div class="content-text">
            <p>吉林大学</p>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="content-img">
            <img src="../../assets/images/首页改1_44.gif" alt="" />
          </div>
          <div class="content-text">
            <p>大连海事大学</p>
          </div>
        </li>
        <li>
          <div class="content-img">
            <img src="../../assets/images/首页改1_46.gif" alt="" />
          </div>
          <div class="content-text">
            <p>渤海大学</p>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="content-img">
            <img src="../../assets/images/首页改1_50.gif" alt="" />
          </div>
          <div class="content-text">
            <p>山东杏林航空大学</p>
          </div>
        </li>
        <li>
          <div class="content-img">
            <img src="../../assets/images/首页改1_52.gif" alt="" />
          </div>
          <div class="content-text">
            <p>南京市航空大学</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aviation {
  width: 3.55rem;
  height: 2.89rem;
  background: #edeaea;
  border-radius: 0.1rem;
  overflow: hidden;
  margin: 0.15rem auto;
  box-shadow: 1px 2px 2px 0px rgba(228, 228, 228, 0.51);
  .aviation-header {
    width: 100%;
    height: 0.55rem;
    img {
      width: 100%;
    }
  }
  .aviation-content {
    padding: 0.1rem 0.03rem 0.08rem 0.03rem;
    height: 2.34rem;
    box-sizing: border-box;
    ul {
      height: 0.67rem;
      display: flex;
      justify-content: space-between;
      li {
        width: 1.71rem;
        height: 0.67rem;
        background: #fff;
        border-radius: 0.06rem;
        overflow: hidden;
        float: left;
        .content-img {
          height: 0.4rem;
          width: 0.4rem;
          margin: 0.14rem 0.11rem 0.13rem 0.09rem;
          float: left;
          img {
            width: 100%;
          }
        }
        .content-text {
          width: 0.84rem;
          height: 0.36rem;
          font-family: PingFang-SC-Medium;
          font-size: 0.16rem;
          color: #666666;
          float: left;
          margin: 0.15rem 0.27rem 0.16rem 0;
          display: flex;
          align-items: center;
        }
      }
    }
    ul:nth-child(-n + 2) {
      margin-bottom: 0.09rem;
    }
  }
}
</style>