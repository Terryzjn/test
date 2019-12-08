<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
//引入时需要先注册组件
import TopNav from './components/TopNav'
import TabBar from './components/TabBar'
export default {
  name: 'app',
  components: {
    TopNav,
    TabBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
