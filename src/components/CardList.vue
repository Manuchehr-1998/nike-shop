<script setup>
import Card from "./Card.vue";

defineProps({
  items: Array,
  isFavorites: Boolean,
});

const emit = defineEmits(["addToFavorite", "addToCard"]);
</script>

<template>
  <div
    class="grid m:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    v-auto-animate
  >
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :onClickAdd="isFavorites ? null : () => emit('addToCard', item)"
      :onClickFavorite="isFavorites ? null : () => emit('addToFavorite', item)"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
    />
  </div>
</template>
