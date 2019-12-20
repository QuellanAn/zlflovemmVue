<template>
  <div id="app1">
    <img src="../assets/logo.png">
    <p>{{message}}</p>
    <div>
      <router-link :to="{name: 'IfAndFor'}">
        条件与循环
      </router-link>
    </div>
    <div style="margin: 10px">
      <router-link :to="{name: 'UnitConversion'}">
        单位转换
      </router-link>
    </div>
    <div style="margin: 10px">
      <router-link :to="{name: 'Form'}">
        表单
      </router-link>
    </div>
    <div style="margin: 10px">
      <router-link :to="{name: 'Blogs'}">
        HTTP 请求
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'Hello',
        data(){
          return {
            message: "hello world"
          }
        }
    }
</script>

<style scoped>
  #app1 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
