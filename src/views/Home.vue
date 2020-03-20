<template>
  <div class="content">
    <h1>🏆 Top contributors</h1>
    <UsersList />
  </div>
</template>

<script>
import UsersList from "@/components/UsersList.vue";

export default {
  name: "home",
  components: {
    UsersList
  }
};
</script>

<style scoped>
.content {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}
</style>
