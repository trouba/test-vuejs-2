<template>
  <router-link
    :to="{ name: 'user', params: { id: user.id } }"
    class="user-card-link"
  >
    <div class="user-card">
      <div class="user-card-information">
        <div class="profil-picture-container">
          <img
            class="profil-picture"
            v-bind:src="user.avatar"
            alt="Card image cap"
          />
        </div>
        <h2 class="user-name">{{ username }}</h2>
      </div>
      <div class="user-card-action">
        <button class="button">See profile 👉</button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object
    }
  },
  computed: {
    username: function() {
      return this.user.first_name + " " + this.user.last_name;
    }
  }
};
</script>

<style scoped>
.user-card-link {
  text-decoration: none;
}

.user-card {
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
}

.user-card-information {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.profil-picture-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  margin-right: 15px;
}

.profil-picture {
  height: 30px;
  border-radius: 50%;
}

.user-information {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.user-name,
.user-name:visited {
  color: #24354a;
}

.user-email {
  margin: 0;
}

.button {
  padding: 5px;
  border: none;
  font-size: 14px;
  background-color: #0f9797;
  cursor: pointer;
  color: #fff;
}
</style>
