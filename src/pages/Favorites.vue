<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import CardList from "../components/CardList.vue";

const favorites = ref([]);
onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://eb022103d8e1b758.mokky.dev/favorite?_relations=items`
    );
    favorites.value = data.map((obj) => obj.item);
  } catch (error) {}
});
</script>

<template>
  <div v-auto-animate>
    <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>
    <CardList :items="favorites" is-favorites />
  </div>
</template>
