<template>
    <div class="container">
        <div id="screen1" class="section">
            <div id="screen1_in">
                <div class="left">
                    <div class="top">
                        <img src="../../assets/screen1_01.png" alt="专为同好用户 量身打造的聊天交友工具"></div>
                        <div class="bottom">
                            <div class="qrcodebody">
                                <div id="qrcode" style="width:150px;height:150px;padding-top: 5px;padding-left: 5px;">
                                    <img src="../../assets/screen1_02.png" alt="可信二维码">
                                </div>
                                </div>
                                <p>扫描二维码下载</p>
								<button type="button" @click="getName">获得数据</button>
                            </div>
                        </div>
                    <div class="right">
                        <a class="leftarr" style="opacity: 0.0442984;"></a>
                        <a class="rightarr" style="opacity: 0.0442984;"></a>
                    <ul class="list">
                        <li style="opacity: 0;"><img class="list01" src="../../assets/screen1_03.png" alt=""></li>
                        <li style="opacity: 1;"><img data-no="1" class="list02" src="../../assets/screen1_04.png" alt=""></li>
                    </ul>
                    <div class="curList">
                        <span style="display: block; width: 10px; margin-left: 13px;"></span>
                        <span style="display: block; width: 20px; margin-left: 8px;"></span>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>
<script>
//import qs from 'qs';
export default {
	name: 'index',
	data() {
		return {
			user: [],
		}
	},
	methods: {
		getName: function() {

            this.$axios({
				method: 'post',
				url: "http://127.0.0.1/linkdb.php",
				headers: {
				'Content-type': 'application/x-www-form-urlencoded'
				},
				form: {
					name: 'terry',
					passwd: '1234'
				}
			}).then((response) => {
				window.console.log(response.data)
			}).catch((res) => {
				window.console.log(res, 'fail')
			})

// this.$axios({
//   method: 'post',
//   url: 'http://127.0.0.1/linkdb.php',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// }).then((res) => {
//     window.console.log(res)
// }).catch(err => {
// 	window.console.log(err)
// })
		}
	}
}
</script>
<style scoped>
#screen1{
	width: 100%;
	height: 100%;
	min-width: 1060px;
	background-color: #76E096;
}
#screen1_in{
	width: 860px;
	height: 650px;
	margin: 0 auto;
	position: relative;
}
#screen1_in .left{
	float: left;
	width: 430px;
	padding-top: 150px;
	height: 370px;
}
#screen1_in .left .bottom{
	padding-top: 60px;
	padding-left: 80px;
}
#screen1_in .left .bottom .qrcodebody{
	width: 160px;
	height: 160px;
	border-radius: 5px;
	background: #fff;
}
#screen1_in .left .bottom img{height: 150px;width: 150px;}
#screen1_in .left .bottom p{
	padding-top: 20px;
	width: 144px;
	text-align: center;
	color: #fff;
	font-size: 16px;
}
#screen1_in .right{
	position: absolute;
	width: 475px;
	height: 530px;
	top: 40px;
	right: -44px;
}
#screen1_in .right a{
	position: absolute;
	top:295px;
	width: 30px;
	height: 30px;
	display: block;
	cursor: pointer;
	opacity: 0;
}
#screen1_in .right .leftarr{
	left: 0;
	background: url(../../assets/screen1_leftarr.png) no-repeat ;
}
#screen1_in .right .rightarr{
	right: 0;
	background: url(../../assets/screen1_rightarr.png) no-repeat ;
}
#screen1_in .right .list{
	position: absolute;
	left: 32px;
	top: 100px;
	width: 400px;
	height: 350px;
}
#screen1_in .right .list li{
	position: absolute;
	left: 0;
	top: 0;
	width: 400px;
	height: 350px;
}
#screen1_in .right .list01{
	margin-left: 55px;
}
#screen1_in .right .list02{
	margin-left: 20px;
	margin-top: 60px;
}
#screen1_in .right .curList{
	position: absolute;
	top: 470px;
	left: 204px;
	width: 64px;
	height: 20px;
	background-color: #76CC8C;
	border-radius: 100px;
	text-align: center;
	line-height: 20px;
}
#screen1_in .right .curList span{
	cursor: pointer;
	height:10px; 
	border-radius: 100px;
	background-color: #fff;
	float: left;
	margin-top: 5px;
}


/*screen2*/
#screen2{
	width: 100%;
	height: 680px;
	min-width: 1060px;
}
#screen2_in{
	width: 860px;
	height: 566px;
	padding-top: 114px;
	margin: 0 auto;
}
#screen2_in .title{
	width: 100%;
	padding-bottom: 40px;
	text-align: center;
	font-size: 32px;
	color: #333333;
}
#screen2_in div{
	overflow: hidden;
	width: 1060px;
}
#screen2_in div img{
	margin-right: 10px;
	float: left;
}

/*screen3*/
#screen3{
	width: 100%;
	height: 600px;
	min-width: 1080px;
	padding-top: 80px;
	overflow: hidden;
}
#screen3_in{
	width: 1000px;
	height: 680px;
	margin: 0 auto;
}
#screen3_in .title{
	width: 100%;
	text-align: center;
	font-size: 36px;
	color: #333333;
	margin-bottom: 124px;
}
#screen3_in div{
	height: 355px;
	position: relative;
}
#screen3_in div img{
	position: absolute;
}
</style>