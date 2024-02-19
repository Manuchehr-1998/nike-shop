<script setup>
const emit = defineEmits("[openDrawer]");

defineProps({
  totalPrice: Number,
});
</script>

<template>
  <header class="px-10 py-8 flex justify-between border-b border-slate-300">
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="logo" class="w-10" />
      <div>
        <h2 class="text-xl font-bold uppercase">Nike Shop</h2>
        <p class="text-slate-500">Магазин лучшех красовок</p>
      </div>
    </div>

    <ul class="flex items-center gap-10">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black"
      >
        <img src="/cart.svg" alt="" />
        <b>{{ totalPrice }}</b>
      </li>
      <li
        class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black"
      >
        <img src="/heart.svg" alt="" />
        <span>Zacladki</span>
      </li>
      <li
        class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black"
      >
        <img src="/profile.svg" alt="" />
        <span>Profile</span>
      </li>
    </ul>
  </header>
</template>
