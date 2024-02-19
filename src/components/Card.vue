<script setup>
import { inject } from "vue";

defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
});
</script>

<template>
  <div>
    <div
      class="relative border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        @click="onClickFavorite"
        :src="isFavorite ? 'like-2.svg' : 'like-1.svg'"
        alt=""
        class="absolute top-8 left-8"
      />
      <img :src="imageUrl" alt="" />
      <p class="mt-2">{{ title }}</p>
      <div class="flex justify-between mt-5">
        <div class="flex flex-col">
          <span class="text-slate-400">price</span>
          <b>{{ price }}</b>
        </div>
        <img
          @click="onClickAdd"
          :src="isAdded ? 'checked.svg' : '/plus.svg'"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
