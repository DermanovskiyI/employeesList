<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <router-view/>
        <TheModal />
      </div>
    </div>
  </div>
</template>

<script>
import TheModal from './components/modal/TheModal.vue'
export default {
  name: 'App',

  components: {
    TheModal
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
