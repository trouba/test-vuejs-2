<template>
  <div class="user-details-card">
    <div class="user-details-card-information">
      <!-- TODO: refactor it to a profil picture component -->
      <div class="profil-picture-container">
        <img
          class="profil-picture"
          v-bind:src="user.avatar"
          alt="Card image cap"
        />
      </div>
      <h2 class="user-name">{{ username }}</h2>
      <a :href="`mailto:${user.email}`">✉️ Contact this contributor</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetails",
  props: {
    user: {
      type: Object
    }
  },
  computed: {
    username: function() {
      return this.user.first_name + " " + this.user.last_name;
    }
  },
  beforeDestroy() {
    // empty user to prevent previous user to briefly appear when changing route
    this.$store.dispatch("users/resetUser");
  }
};
</script>

<style scoped>
.user-details-card {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
}

.user-details-card-information {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profil-picture-container {
  height: 128px;
  width: 128px;
}

.profil-picture {
  border-radius: 50%;
}
</style>
