<template xmlns:v-bind="http://www.w3.org/1999/xhtml">

  <div>
      <div id="for">
        <p>一</p>
        <table>
          <tr v-for="(value, key, index) in object">
            <td v-if="key === 'url'">
              <a v-bind:href="value"> {{value}}</a>
            </td>
            <td v-e
            <td v-else>
              {{ value }}
            </td>
          </tr>
        </table>
        <br>
        <p>二</p>
        <ul>
          <li v-for="(value, key, index) in object">
            {{ index }}. {{ key }} : {{ value }}
          </li>
        </ul>
        <br>
        <p>二</p>
        <ul>
          <li v-for="(value, key) in object">
            {{ key }} : {{ value }}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "",
      data(){
        return {
          object: {
            name: 'quellanan',
            url: 'http://quellanan.xyz',
            slogan: '学的不仅是技术，更是梦想！'
          }
        }
      }
    }
</script>

<style scoped>

</style>
