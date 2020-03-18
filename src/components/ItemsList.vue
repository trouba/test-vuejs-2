<template>
  <div class="users-list">
    <div v-for="item in items" :key="item.id" class="user-container">
      <ItemCard :item="item" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ItemCard from "./ItemCard";

export default {
  components: {
    ItemCard
  },
  name: "ItemsList",
  computed: mapState({
    items: state => state.items.all
  }),
  created() {
    this.$store.dispatch("items/getAllItems");
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
</style>
