<template>
  <div class="content">
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
}
</style>
