<template>
    <div class="information_warp">
        <div class="information_con">
            <div class="information_con_top">
                <img src="../../assets/images/首页改1_78.gif" alt="">
            </div>
            <div class="information_con_cen">
                <ul class="btm_list">
                    <li>
                        <a href="#">1、39岁的小伙子,就发生了发颤,怎...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">2、市北市民留言咨询这些问题,官...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">3、美供应链受阻问题雪上加霜</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">4、篮网有能力解决他们的问题度...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">5、记者实测快递企业智能客服:回...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">6、养老金有哪些渠道可以获得?有...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">7、怎么样买保险才是最合理的?咱...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">8、全面建成小康社会的重要举措...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">9、摩根士丹利重磅报告:中国经济...</a>
                        <p>2021.10.15</p>
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
<style lang="scss" scoped>
    .information_warp{
        width: 100%;
        height: auto;
        min-width: 3.56rem;
        background: #eaeaea;
        .information_con{
            width: 3.55rem;
            height: 100%;
            margin: 0 auto;
            background: #ffffff;
            border-radius: .05rem;
            .information_con_top{
                width: 100%;
                height: .55rem;
                padding-top: .02rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .information_con_cen{
                width: 100%;
                height: 100%;
                .btm_list{
                    width: 3.56rem;
                    height: 100%;
                    li{
                        padding:.2rem .05rem 0 .07rem;
                        border-bottom: 1px solid #ccc;
                        overflow: hidden;
                        a{
                            float: left;
                            font-family: PingFang-SC-Medium;
                            font-size: .15rem;
                            font-weight: normal;
                            font-stretch: normal;
                            letter-spacing: 0px;
                            color: #333333;
                            width: 2.41rem;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;
                        }
                        p{
                            float: right;
                            font-family: PingFang-SC-Medium;
                            font-size: .14rem;
                            font-weight: normal;
                            font-stretch: normal;
                            letter-spacing: 0px;
                            color: #999999;
                            margin-bottom: 0;
                        }
                    }
                }
            }
            .information_con_btm{
                padding: .15rem .12rem .25rem .12rem;
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
        }
    }
</style>