<template>
  <div id="app">
    <div id="app-logo">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <FirstApp/>
  </div>
</template>

<script>
import FirstApp from './components/FirstApp.vue'

export default {
  name: 'app',
  components: {
    FirstApp
  }
}
</script>

<style src="./assets/stylesheets/App.css"></style>
