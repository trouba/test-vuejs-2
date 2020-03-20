<template>
  <div>
    <div class="back-navigation">
      <router-link :to="{ name: 'home' }">👈 Back to contributors list</router-link>
    </div>
    <div class="content">
      <UserDetails :user="user" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserDetails from "../components/UserDetails";
export default {
  name: "home",
  components: {
    UserDetails
  },
  computed: mapState({
    user: state => state.users.current
  }),
  created() {
    this.$store.dispatch("users/getUser", { id: this.$route.params.id });
  }
};
</script>

<style scoped>
.content {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.back-navigation {
  text-align: left;
  padding: 15px 25px;
  max-width: 900px;
  margin: 0 auto;
}
</style>
