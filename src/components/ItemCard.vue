<template>
  <div class="user-card">
    <div class="profil-picture-container">
      <img
        class="profil-picture"
        v-bind:src="item.avatar"
        alt="Card image cap"
      />
    </div>
    <div class="user-information">
      <h2>{{ username }}</h2>
      <p>{{ item.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    username: function() {
      return this.item.first_name + " " + this.item.last_name;
    }
  }
};
</script>

<style scoped>
.user-card {
  display: flex;
  flex-direction: row;
  padding: 15px;
}

.profil-picture {
  height: 50px;
  border-radius: 50%;
}
</style>
