<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// app.js
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'


Vue.use(BootstrapVue)
export default {
  name: 'App'
}
</script>
<style>
 /* Import Bootstrap Vue Styles */
  @import 'bootstrap/dist/css/bootstrap.css';
  @import 'bootstrap-vue/dist/bootstrap-vue.css';
</style>

<style>
#app {
  text-align: center;
}
</style>
