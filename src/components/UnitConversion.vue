<template>
  <div>
      <div style="margin: 20px">
        千米 : <input type = "text" v-model = "kilometers">
        米 : <input type = "text" v-model = "meters">
        <p id="info"></p>
      </div>

      <div style="margin: 20px">
        小时 : <input type = "text" v-model = "hour">
        分钟 : <input type = "text" v-model = "minute">
        秒 : <input type = "text" v-model = "second">
        <br>
        天 : <input type = "text" v-model = "day">
        <br>
        星期 : <input type = "text" v-model = "week">
      </div>
      <div style="margin: 20px">
        <p >计数器: {{ counter }}</p>
        <button @click = "counter++">点我</button>
      </div>
  </div>
</template>

<script>
    export default {
        name: "",
      data(){
          return{
            kilometers : 0,
            meters:0,
            second : 0,
            minute : 0,
            hour : 0,
            day : 0,
            week : 0,
            counter: 0
          }
      },
      watch : {
        kilometers:function(val) {
          this.kilometers = val;
          this.meters = this.kilometers * 1000
        },
        meters : function (val) {
          this.kilometers = val/ 1000;
          this.meters = val;
        },
        week:function(val) {
          this.week = val;
          this.day = this.week * 7;
          this.hour = this.day * 24;
          this.minute = this.hour * 60;
          this.second = this.minute * 60;
        },
        day : function (val) {
          this.day = val;
          this.week = this.day/7;
          this.hour = this.day * 24;
          this.minute = this.hour * 60;
          this.second = this.minute * 60;
        },
        hour : function (val) {
          this.hour = val;
          this.day = this.hour/24;
          this.week = this.day/7;
          this.minute = this.hour * 60;
          this.second = this.minute * 60;
        },
        minute : function (val) {
          this.minute = val;
          this.hour = this.minute/60;
          this.day = this.hour/24;
          this.week = this.day/7;
          this.second = this.minute * 60;
        },
        second : function (val) {
          this.second = val;
          this.minute = this.second/60;
          this.hour = this.minute/60;
          this.day = this.hour/24;
          this.week = this.day/7;
        },
        counter :function(nval, oval) {
          //alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
        }
      }
    };
</script>

<style scoped>

</style>
