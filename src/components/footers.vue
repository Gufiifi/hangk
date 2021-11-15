<template>
    <footer>
        <div>
             <a href="tel:400-123-456"><img src="@/assets/images/首页改1_123.gif" alt=""></a>
        </div>
        <div>
            <img src="@/assets/images/首页改1_12007 (2).gif" alt="">
        </div>
        <router-link tag="div" to="sele">
          <img src="@/assets/images/首页改1_12007 (3).gif" alt=""> 
        </router-link>
    </footer>


</template>
<style lang="scss" scoped>
  footer{
    width: 100%;
    height: .42rem;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    z-index: 9999999;
    justify-content: space-between;
    div{
        width: 33.2%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
  
</style>。