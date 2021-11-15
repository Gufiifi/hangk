<template>
  <div class="major">
    <div class="major-header">
         <img src="../../assets/images/首页改1_18.gif" alt="" />
    </div>
    <div class="major-content">
      <ul>
        <router-link to="twohangk" tag="li">
            <img src="../../assets/images/首页改1_22.gif" alt="" />
        </router-link>
        <li >
          <img src="../../assets/images/首页改1_25.gif" alt="" />
        </li>
        <li >
          <img src="../../assets/images/首页改1_27.gif" alt="" />
        </li>
        <li >
          <img src="../../assets/images/首页改1_29.gif" alt="" />
        </li>
        <li>
          <img src="../../assets/images/首页改1_31.gif" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.major {
  width: 3.55rem;
  height: 6.4rem;
  background: #fff;
  border-radius: 0.1rem;
  overflow: hidden;
  margin: auto;
  box-shadow: 1px 2px 2px 1px rgba(228, 228, 228, 0.76);
  .major-header {
    width: 100%;
    height: 0.55rem;
    img {
      width: 100%;
    }
  }
  .major-content {
    ul {
      li {
        height: 1.05rem;
        width: 3.35rem;
        margin: auto;
        border-radius: 0.1rem;
        overflow: hidden;
        margin-top: 0.1rem;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style> 