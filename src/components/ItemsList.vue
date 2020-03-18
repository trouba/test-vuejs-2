<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ItemsList",
  computed: mapState({
    items: state => state.items.all
  }),
  created() {
    this.$store.dispatch("items/getAllItems");
  }
};
</script>
