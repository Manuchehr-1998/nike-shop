<script setup>
import { computed, provide, ref, watch } from "vue";
import Header from "./components/Header.vue";
import Driver from "./components/Driver.vue";
import Home from "./pages/Home.vue";
import axios from "axios";

/* Корзина (Старт) */

const cart = ref([]);
const isCreatingOrder = ref(false);

const totalPrice = computed(() =>
  cart.value.reduce((acc, item) => acc + item.price, 0)
);
const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100));

const drawerOpen = ref(false);

const cartIsEmpty = computed(() => cart.value.length === 0);
const cartButtonDisabled = computed(
  () => isCreatingOrder.value || cartIsEmpty.value
);

const closeDrawer = () => {
  drawerOpen.value = false;
};
const openDrawer = () => {
  drawerOpen.value = true;
};

const addToCard = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};
const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
};

const createOrder = async () => {
  try {
    isCreatingOrder.value = true;
    const { data } = await axios.post(
      `https://eb022103d8e1b758.mokky.dev/orders`,
      {
        items: cart.value,
        totalPrice: totalPrice.value,
      }
    );

    cart.value = [];
  } catch (error) {
    console.log(error);
  } finally {
    isCreatingOrder.value = false;
  }
};

watch(
  cart,
  () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  },
  { deep: true }
);

provide("cart", {
  cart,
  closeDrawer,
  openDrawer,
  addToCard,
  removeFromCart,
});
/* Корзина (Енд) */
</script>

<template>
  <div class="mt-10 w-4/5 m-auto rounded-xl bg-white shadow-xl">
    <Driver
      v-if="drawerOpen"
      :total-price="totalPrice"
      :vat-price="vatPrice"
      @create-order="createOrder"
      :cart-button-disabled="cartButtonDisabled"
    />
    <Header @open-drawer="openDrawer" :total-price="totalPrice" />
    <div class="p-10 mb-8">
      <Home />
    </div>
  </div>
</template>
