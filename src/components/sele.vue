<template>
<div>
     <div class="page">
        <p>当前位置：<span>首页></span><span class="pan">在线报名</span></p>
     </div>
     
     <div class="cen">
        <div class="cen_img">
           <img src="@/assets/images/国际航空服务与管理_22.jpg" alt="">
        </div>

  <div class="content2">
    <form action="zxbm.html" method="post" id="baoming1">
        <ul class="content2text1">
            <li class="long">
                <span>学生姓名</span>
                <input type="text" placeholder="请填写姓名" name='sname' required>
            </li>
            <li class="long">
                    <span>手机号码</span>
                    <input type="text" name='tuitel' placeholder="请填写手机号码">
            </li>
            <li class="long">
                <span>出生日期</span>
                <select name="scate">
                    <option value="应届中考生">应届中考生</option>
                    <option value="应届高考生">应届高考生</option>
                    <option value="往届中中考生">往届中考生</option>
                    <option value="往届高考生">往届高考生</option>
                    <option value="其他">其他</option>
                </select>
            </li>
            <li class="long">
                <span>意向学校</span>
                <select name="scate">
                    <option value="应届中考生">应届中考生</option>
                    <option value="应届高考生">应届高考生</option>
                    <option value="往届中中考生">往届中考生</option>
                    <option value="往届高考生">往届高考生</option>
                    <option value="其他">其他</option>
                </select>
            </li>
            <li class="long">
                <span>所选领域</span>
                <select name="scate">
                    <option value="应届中考生">应届中考生</option>
                    <option value="应届高考生">应届高考生</option>
                    <option value="往届中中考生">往届中考生</option>
                    <option value="往届高考生">往届高考生</option>
                    <option value="其他">其他</option>
                </select>
            </li>
            <li class="long">
                <span>所选专业</span>
                <select name="scate">
                    <option value="应届中考生">应届中考生</option>
                    <option value="应届高考生">应届高考生</option>
                    <option value="往届中中考生">往届中考生</option>
                    <option value="往届高考生">往届高考生</option>
                    <option value="其他">其他</option>
                </select>
            </li>
            <li class="long">
                <span>所选课程</span>
                <select name="scate">
                    <option value="应届中考生">应届中考生</option>
                    <option value="应届高考生">应届高考生</option>
                    <option value="往届中中考生">往届中考生</option>
                    <option value="往届高考生">往届高考生</option>
                    <option value="其他">其他</option>
                </select>
            </li>
            <li class="long">
                <span>出生日期</span>
                <select name="scate">
                    <option value="应届中考生">应届中考生</option>
                    <option value="应届高考生">应届高考生</option>
                    <option value="往届中中考生">往届中考生</option>
                    <option value="往届高考生">往届高考生</option>
                    <option value="其他">其他</option>
                </select>
            </li>
             <li class="long">
                <span>当前学历</span>
                <select name="scate">
                    <option value="应届中考生">应届中考生</option>
                    <option value="应届高考生">应届高考生</option>
                    <option value="往届中中考生">往届中考生</option>
                    <option value="往届高考生">往届高考生</option>
                    <option value="其他">其他</option>
                </select>
            </li>
             <li class="long">
                <span>身份证号</span>
                <input type="text" name='idcard' required pattern="^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2]\d)|(3[0-1]))((\d{4})|(\d{3}[Xx]))$" placeholder="请填写身份证号">
            </li>
            <li class="long">
                <span>您的疑问</span>
               
            </li>
        </ul>
      

      
    </form>
</div>
       
    </div>
  
</div>

</template>
<script>

</script>
<style scoped>
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
#baoming1{
    width: 2.8rem;
    margin: 0 auto;
}
.cen{
    /* display: flex; */
    /* flex-wrap: wrap; */
    width: 3.55rem;
    border-radius: .05rem;
	height: auto;
    background: white;
    margin: 0 auto;
}
.cen_img{
    width: 100%;
	height: .44rem;
}
.cen_img img{
    width: 100%;
	height: 100%;
}
.content2 {
    margin: 0 2%;
}
.content2 em {
    font-style: normal;
    color: #fe6730;
    margin: 0 1%;
}
.content2>span {
    font-size: 24px;
    line-height: 50px;
    color: #2e9dee;
    display: block;
    text-align: center;
}
.title {
    width: 100%;
    margin: 2% auto 0;
    background: #ececec;
    line-height: .34rem;
    text-indent: 4%;
    font-weight: bold;
}
.content2 li {
    margin-top: 3%;
}
.long {
    width: 100%;
}
.long span {
    width: .80rem;
    font-size: .15rem;
    font-weight: 550;
    display: inline-block;
    /* text-align: center; */
    line-height: .30rem;
}
.long input {
    width: 65%;
}
.content2 input {
    width: 65%;
    text-indent: .05rem;
    font-size: .14rem;
    outline: none;
    background: #fff;
    border: .01rem solid #d5d2d2;
    line-height: .30rem;
    border-radius: .04rem;
}
.s1 span {
    width: 19%;
    display: inline-block;
    text-align: center;
    line-height: .30rem;
}
.s1 input {
    /* width: 70%; */
    background: #ececec;
    border: none;
    line-height: .30rem;
    margin-left: 5%;
}
.short {
    width: 48%;
    display: inline-block;
}
.short span {
    width: .80rem;
    display: inline-block;
    text-align: center;
}
.content2 select {
    background: #fff;
    line-height: .32rem;
    width: 65%;
    height: .32rem;
    border-radius: .04rem;
    font-size: .14rem;
    outline: none;
    text-indent: .05rem;
    border: .01rem solid #d5d2d2;
}
.short input {
    width: 49%;
}
textarea {
    border: .01rem solid #e4e4e4;
    width: 100%;
    height: 1.50rem;
    margin-top: 2%;
    font-size: .15rem;
    line-height: .24rem;
    padding-top: 2%;
}
.btn {
    width: 80%;
    background: #ff672e;
    text-align: center;
    margin: 2% auto;
    line-height: .36rem;
    color: white;
    display: block;
    border: none;
}

</style>
