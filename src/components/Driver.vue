<script setup>
import DraverHead from "./DraverHead.vue";
import CartItemList from "./CardItemList.vue";
import InfoBlock from "./InfoBlock.vue";

const emit = defineEmits(["createOrder"]);

defineProps({
  totalPrice: Number,
  vatPrice: Number,
  cartButtonDisabled: Boolean,
});
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DraverHead />

    <div class="flex h-full items-center" v-if="!totalPrice">
      <InfoBlock
        title="Корзина пустая"
        description="Добавьте хотя бы одну пару кроссовок чтобы ссделать заказ"
        image-url="/package-icon.png"
      />
    </div>

    <div v-else>
      <CartItemList />

      <div class="flex flex-col gap-4 mt-7">
        <div class="flex gap-2">
          <span>Itog:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ totalPrice }} руб</b>
        </div>
        <div class="flex gap-2">
          <span>NAlog 5%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ vatPrice }} руб</b>
        </div>
        <button
          :disabled="cartButtonDisabled"
          @click="() => emit('createOrder')"
          class="bg-lime-500 mt-4 disabled:bg-slate-500 cursor-pointer text-white w-full rounded-xl py-3 hover:bg-lime-700 transition"
        >
          Oformit Zakaz
        </button>
      </div>
    </div>
  </div>
</template>
