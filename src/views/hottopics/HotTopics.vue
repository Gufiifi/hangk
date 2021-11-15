<template>
    <div class="hot_warp">
        <div class="hot_con">
            <div class="hot_con_top">
                <img src="../../assets/images/首页改1_56.gif" alt="">
            </div>
            <div class="hot_con_btm">
                <ul>
                    <li>
                        <img src="../../assets/images/首页改1_59.gif" alt="">
                    </li>
                    <li>
                        <img src="../../assets/images/首页改1_62.gif" alt="">
                    </li>
                    <li>
                        <img src="../../assets/images/首页改1_66.gif" alt="">
                    </li>
                    <li>
                        <img src="../../assets/images/首页改1_68.gif" alt="">
                    </li>
                    <li>
                        <img src="../../assets/images/首页改1_71.gif" alt="">
                    </li>
                    <li>
                        <img src="../../assets/images/首页改1_72.gif" alt="">
                    </li>
                    <li>
                        <img src="../../assets/images/首页改1_75.gif" alt="">
                    </li>
                    <li>
                        <a href="#">查看更多</a>
                        <p>>></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
}
img{
    border: none;
}
input,button{
    outline: none;
}
b,strong{
    font-weight: normal;
}
em,i{
    font-style: normal;
}
.clearfix::after{
    clear: both;
    display: block;
    content: "";
}
.hot_warp{
    width: 100%;
    height: auto;
    min-width: 3.56rem;
    padding: 0 0 .1rem 0;
    background: #eaeaea;
    .hot_con{
        width: 3.56rem;
        height: 100%;
        margin: 0 auto;
        background: #ffffff;
        border-radius: .05rem;
        .hot_con_top{
            width: 100%;
            height: .55rem;
            padding-top: .02rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .hot_con_btm{
            width: 100%;
            height: 100%;
            // border-top: 1px solid #ccc;
            ul{
                width: 3.56rem;
                height: 100%;
                overflow: hidden;
                li{
                    float: left;
                    width: 1.71rem;
                    height: .75rem;
                    border-radius: .03rem;
                    margin: .1rem .04rem 0 .03rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                :nth-of-type(7){
                    margin-bottom: .1rem;
                }
                :nth-of-type(8){
                    background-color: #d4d4d4;
                    font-family: PingFang-SC-Bold;
                    font-size: .17rem;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #ffffff;
                    line-height: .75rem;
                    overflow: hidden;
                    text-align: center;
                    a{
                        color: #ffffff;
                        display: inline-block;
                    }
                    p{
                        display: inline-block;
                    }
                }
            }
        }
    }
}
</style>