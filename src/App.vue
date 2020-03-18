<template>
  <div id="app">
    <div>header</div>
    <div class="content">
      <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
      <ItemsList />
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import ItemsList from "./components/ItemsList.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    ItemsList
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #eee;
}

.content {
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
