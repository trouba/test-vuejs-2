<template>
  <div class="users-list">
    <div v-for="user in users" :key="user.id" class="user-container">
      <UserCard :user="user" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserCard from "./UserCard";

export default {
  components: {
    UserCard
  },
  name: "UsersList",
  computed: mapState({
    users: state => state.users.all
  }),
  created() {
    this.$store.dispatch("users/getAllUsers");
  }
};
</script>

<style scoped>
.users-list {
  background-color: #fff;
  border: solid 1px #0f9797;
  border-radius: 5px;
}
.user-container:not(:last-child) {
  border-bottom: solid 1px #0f9797;
}

.user-container:first-child {
  border-radius: 5px 5px 0 0;
}

.user-container:last-child {
  border-radius: 0 0 5px 5px;
}

.user-container:hover {
  background-color: #d4ecec;
  cursor: pointer;
}
</style>
