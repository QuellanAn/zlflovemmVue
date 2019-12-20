<template>
    <div>
      <div>
        <p>单个复选框：</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
      </div>
      <div>
        <p>多个复选框：</p>
        <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
        <label for="runoob">Runoob</label>
        <input type="checkbox" id="google" value="Google" v-model="checkedNames">
        <label for="google">Google</label>
        <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
        <label for="taobao">taobao</label>
        <br>
        <span>选择的值为: {{ checkedNames }}</span>
      </div>

      <div>
        <input type="radio" id="111" value="Runoob" v-model="picked">
        <label for="runoob">Runoob</label>
        <br>
        <input type="radio" id="222" value="Google" v-model="picked">
        <label for="google">Google</label>
        <br>
        <span>选中值为: {{ picked }}</span>
      </div>

      <div>
        <select v-model="selected" name="fruit">
          <option value="">选择一个网站</option>
          <option value="www.runoob.com">Runoob</option>
          <option value="www.google.com">Google</option>
        </select>
        <div id="output">
          选择的网站是: {{selected}}
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "",
      data(){
          return{
            checked : false,
            checkedNames: [],
            picked : 'Runoob',
            selected: ''
          }
      }
    }
</script>

<style scoped>

</style>
