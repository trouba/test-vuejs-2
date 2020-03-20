<template>
  <div id="app">
    <div class="header">WOW APP</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  margin: 0;
  background-color: #eee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  height: 40px;
  background-color: #0f9797;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: #fff;
}
</style>
