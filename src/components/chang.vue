<template>
  <div class="five_top">
        <div class="five_top_kite">
           <div class="header">
                <img src="@/assets/images/国际航空服务与管理_40.jpg" alt="">
            </div>
            <div class="content">
                <ul class="content_ul">
                    <li class="content_li" v-for="(item,index) in list" :key='index'>
                        <span class="span_One"><em>{{index+1}}、</em>{{item}}</span>
                        <span class="span_Two">{{tlep}}</span>
                    </li>
                </ul>           
            </div>
            <div class="information_con_btm">
                <div class="btm_border">
                    <span>查看更多问题</span>
                    <!-- <img src="../../assets/images/sou.png" alt=""> -->
                </div>
            </div>
        </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                '39岁的小伙子,就发生了发颤,怎么',
                '市北市民留言咨询这些问题,官方',
                '美供应链受阻问题雪上加霜',
                '篮网有能力解决他们的问题度,你',
                '记者实测快速企业智能客服:回复',
                '养老金有哪些渠道可以获得?有说明',
                '怎么样买保险才是最合理的?咱们',
                '全面建成小康社会的重要举措你们慢慢',
                '摩根士丹利重磅报告:中国经济措施'       
            ],
            visible: false,
            tlep:'2021.10.15',
       }
    },
    methods:{
         handleSelectChange(value) {
            console.log(value);
            this.form.setFieldsValue({
                note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
            });
        },
        showModal() {
        this.visible = true;
        },
        hideModal() {
        this.visible = false;
        },
        confirm() {
        this.$confirm({
            title: 'Confirm',
            content: 'Bla bla ...',
            okText: '确认',
            cancelText: '取消',
        });
        },
        
    },
   
 }
</script>

<style lang='scss' scoped>
.five_top{
    width: 3.75rem;
    margin: auto;
    margin-top: .15rem;
    img{
        width: 100%;
        height: 100%;
    }
    .five_top_kite{
        margin-top: 0.15rem;
        margin: 0 .1rem;
        border-radius: 0.05rem;
        box-sizing : border-box;
        height: 5rem;
        margin-bottom: .15rem;
        background-color: #ffffff;
        overflow: hidden;
        .content{
            // margin-top: .15rem;
            .content_ul{
                display: flex;
                flex-wrap: wrap;
                .content_li{
                    width: 100%;
                    border-bottom: 1px solid #cccccc;
                    display: flex;
                    justify-content: space-between;
                    padding-top: .24rem;
                    align-items: center;
                    text-align: -webkit-left;
                    .span_One{
                        width: 2.35rem;
                        height: .15rem;
                        font-family: PingFang-SC-Medium;
                        font-size: .15rem;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: .15rem;
                        letter-spacing: 0px;
                        color: #333333;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        margin-left: .07rem;
                    }
                    .span_Two{
                        // width: .74rem;
                        height: .11rem;
                        font-family: PingFang-SC-Medium;
                        font-size: .14rem;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: .12rem;
                        margin-right: .05rem;
                        letter-spacing: 0rem;
                        color: #999999;
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
    .lsit-all-the{
      height: 3.58rem;
      box-sizing:border-box;
      overflow: hidden;
      background-color: #ffffff;
      margin: 0 .1rem;
    //   margin: .15rem .1rem 0 .1rem;
      border-radius: 5px;
      .all-the-tap{
          .all-the-size{
            .all-the-icon img{
                width: 100%;
                height: 100%;
            }
        } 
      }
      .list-from{
        width: 3.38rem;
        height: 2.85rem;
        background-color: #efefef;
        border-radius: 5px;  
        margin: 0 auto;
        margin-top: -.12rem;
        .from-name{
            padding: .3rem .15rem .1rem .15rem;
        }
        .from-date{
            padding: 0 .15rem .1rem .15rem;
            .from-suffixIcon{
                display: inline-block;
                width: 1.49rem;
                height: .31rem;
                margin-right: .1rem;
                position: relative;
                overflow: hidden;
               ::v-deep .ant-input{
                   height: 100%;
               }
                .ant-calendar-picker{
                    width: 100%;
                    height: 100%;
                }
                .from-icon{
                    width: .41rem;
                    height: .31rem;
                    position: absolute;
                    right: 0rem;
                    img{
                        width: .41rem;
                        height: .31rem;
                    }
                }
            }
        }
        .from-school{
            padding: 0 .15rem .15rem .15rem;
            position: relative;
            .top{
                width: 1.49rem;
                height: .31rem;
                color: #ccc;
                margin-right: .1rem;
                overflow: hidden;
            }
            ::deep .ant-select-selection--single{
                height: 100%;
            }
        }
        .from-submit{
            .submit-click{
                width: 1.04rem;
                height: .36rem;
                display: block;
                margin: 0 auto;
                margin-bottom: .1rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .submit-size{
                height: .13rem;
                font-size: .12rem;
                line-height: .12rem;
                color: #878988;
                text-align: center;
                margin-bottom: .34rem;
                display: block;
            }
        }
      }
  }  

}
 
.ant-calendar-picker ::v-deep span{
    display: initial !important;
}
::v-deep .ant-select-selection{
    height: 100% !important;
}
::v-deep .ant-select-selection-selected-value{
    line-height: .3rem;
}

</style>