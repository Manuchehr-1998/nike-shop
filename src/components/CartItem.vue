<script setup>
const emit = defineEmits(["onClickRemove"]);
defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
});
</script>

<template>
  <div class="flex items-center border border-slate-100 p-4 rounded-xl">
    <img class="w-16 h-16" :src="imageUrl" alt="" />

    <div class="flex flex-col">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-2">
        <b>{{ price }}</b>
        <img
          @click="emit('onClickRemove')"
          class="opacity-40 transition hover:opacity-100 cursor-pointer"
          src="/close.svg"
        />
      </div>
    </div>
  </div>
</template>
