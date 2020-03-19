<template>
  <div class="user-card">
    <div class="user-card-information">
      <div class="profil-picture-container">
        <img
          class="profil-picture"
          v-bind:src="item.avatar"
          alt="Card image cap"
        />
      </div>
      <div class="user-information">
        <h2 class="user-name">{{ username }}</h2>
        <p class="user-email">{{ item.email }}</p>
      </div>
    </div>
    <div class="user-card-action">
      <button>click here</button>
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
  justify-content: space-between;
  align-items: center;
}

.user-card-information {
  display: flex;
  flex-direction: row;
}

.profil-picture-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
}

.profil-picture {
  height: 50px;
  border-radius: 50%;
}

.user-information {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.user-name {
  margin: 0;
}

.user-email {
  margin: 0;
}
</style>
