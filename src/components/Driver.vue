<script setup>
import DraverHead from "./DraverHead.vue";
import CartItemList from "./CardItemList.vue";
import InfoBlock from "./InfoBlock.vue";
import axios from "axios";
import { computed, inject, ref } from "vue";

const isCreating = ref(false);
const oerderId = ref(null);

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number,
  cartButtonDisabled: Boolean,
});

const { cart, closeDrawer } = inject("cart");

const createOrder = async () => {
  try {
    isCreating.value = true;
    const { data } = await axios.post(
      `https://eb022103d8e1b758.mokky.dev/orders`,
      {
        items: cart.value,
        totalPrice: props.totalPrice.value,
      }
    );

    cart.value = [];
    oerderId.value = data.id;
  } catch (error) {
    console.log(error);
  } finally {
    isCreating.value = false;
  }
};

const buttonDisabled = computed(() => isCreating.value || cartIsEmpty.value);

const cartIsEmpty = computed(() => cart.value.length === 0);
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DraverHead />
    <div class="flex h-full items-center" v-if="!totalPrice || oerderId">
      <InfoBlock
        v-if="!totalPrice && !oerderId"
        title="Корзина пустая"
        description="Добавьте хотя бы одну пару кроссовок чтобы ссделать заказ"
        image-url="/package-icon.png"
      />
      <InfoBlock
        v-if="oerderId"
        title="Заказ оформлен !"
        :description="`Ваш заказ ${oerderId} скоро будет передан курьерской доставке`"
        image-url="/order-success-icon.png"
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
          :disabled="buttonDisabled"
          @click="createOrder"
          class="bg-lime-500 mt-4 disabled:bg-slate-500 cursor-pointer text-white w-full rounded-xl py-3 hover:bg-lime-700 transition"
        >
          Oformit Zakaz
        </button>
      </div>
    </div>
  </div>
</template>
