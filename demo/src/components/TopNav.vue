<template>
  <div id="topNav">
    <div id="header" class="blue">
      <div id="headerin">
        <h1 id="logo">可信</h1>
        <div class="nav">
          <ul>
            <li>
              <router-link to="/index">首页</router-link>
            </li>
            <li>
              <router-link to>用户协议</router-link>
            </li>
            <li>
              <router-link to="/contact">联系我们</router-link>
            </li>
            <li>
              <router-link to="/problem">常见问题</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopNav"
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  font-family: "微软雅黑";
  font-weight: normal;
  text-decoration: none;
}
html,
body {
  height: 100%;
  width: 100%;
}

/* header */
#header {
  position: relative;
  top: 0;
  width: 100%;
  min-width: 1060px;
  height: 90px;
  box-sizing: border-box;
  border-bottom: 1px solid #e6e6e6;
  color: #555;
}
#header li.active a {
  color: #76e096;
}
#header a {
  color: #555;
}
#header.blue {
  background-color: #76e096;
  color: #fff;
  border-bottom: 1px solid #76e096;
}
#header.blue a {
  color: #fff;
}
#headerin {
  width: 1060px;
  height: 90px;
  margin: 0 auto;
}
#logo {
  float: left;
  background-image: url(../assets/logo.png);
  background-position: left center;
  background-repeat: no-repeat;
  width: 60px;
  height: 90px;
  line-height: 90px;
  padding-left: 82px;
  font-size: 28px;
  cursor: pointer;
}
#header.blue #logo {
  background-image: url(../assets/logo2.png);
}
#headerin .nav {
  height: 90px;
  float: right;
  line-height: 90px;
}
#headerin .nav ul {
  margin-right: -30px;
}
#headerin .nav ul li {
  float: left;
  font-size: 16px;
}
#headerin .nav li a {
  padding: 0 30px;
}
#headerin .nav ul .line {
  width: 52px;
  text-align: center;
}
</style>