<template>
    <div id="tabBar">
        <div id='footer'>
            <div>
                <ul>
                    <li><a></a></li>
                    <li>用户协议</li>
                    <li>   </li>
                    <li>|</li>
                    <li>   </li>
                    <li><a href="">联系我们</a></li>
                </ul>
                <p class="line2s">Copyright © 2016-2019,上海紫幻网络科技有限公司.</p>
                <p class="line2s">沪ICP备19035317号</p>
                <p><a href="#"></a></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TabBar'
}
</script>
<style>
/*footer*/
#footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    min-width: 1060px;
    background-color: #fff;
}
#footer_in{
    width: 860px;
    margin: 0 auto;
    border-top: 1px solid #e0e0e0;
    padding-top: 24px;
    padding-bottom: 24px;
}
#footer_in ul{
    margin-bottom: 25px;
    height: 20px;
    line-height: 1em;
    text-align: center;
}
#footer_in ul li{
    display: inline-block;

}
#footer_in ul li.line{
    width: 28px;
    color: #858585;
    text-align: center;
}
#footer_in ul li a,#footer_in a{
    color: #858585;
    font-size: 14px;
}
#footer_in p{
    text-align: center;
    color: #858585;
    font-size: 14px;
}
#footer_in p.line2s{
    margin-bottom: 9px;
}

.clearfix {zoom:1; overflow:hidden;}    /*==for IE6/7 Maxthon2==*/
.clearfix:after {clear:both;content:'.';display:block;width: 0;height: 0; overflow:hidden;visibility:hidden;}
</style>