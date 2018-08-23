<template>
  <div id="app">
    <div id="app-logo">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <nav>
      <router-link to="/">Skills</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
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
<style src="./assets/stylesheets/Colors.css"></style>
