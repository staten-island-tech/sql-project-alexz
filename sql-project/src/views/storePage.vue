<script setup>
import { nextTick, ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";
import { RouterLink, RouterView } from "vue-router";
import book from "../components/book.vue";
import { useCounterStore } from "../stores/counter";
import userCart from "../components/userCart.vue";

let users = [];
const books = ref([]);
const store = useCounterStore();
let total = ref(store.carttotal);
let showcart = ref(true);
async function getBooks() {
  const { data } = await supabase.from("books").select();
  books.value = data;
  console.log(books.value)
}
async function getUsers() {
  const { data } = await supabase.from("users").select();
  users.value = data;
}

async function update() {
  store.update2 = !store.update2;
  await nextTick();
  store.update2 = !store.update2;
}

async function clearUserCart() {
  const { error } = await supabase
    .from("users")
    .update({ incart: [] })
    .eq("id", store.currentid);
  updatePrices();
}

async function updateUsers(name, price, pic) {
  getUsers();
  update();
  store.cart.splice(0, 0, { name: name, price: price, pic: pic });
  const { error } = await supabase
    .from("users")
    .update({ incart: store.cart })
    .eq("id", store.currentid);
  let sum = 0;
  store.cart.forEach((element) => (sum = element.price + sum));
  store.carttotal = sum;
  total.value = store.carttotal;
  const { error2 } = await supabase
    .from("users")
    .update({ carttotal: store.carttotal })
    .eq("id", store.currentid);
}

getUsers();
getBooks();

</script>

<template>
    <h3 v-if="store.update">total cart value: {{ store.carttotal }}</h3>
    <button v-if="showcart" @click="showcart = !showcart">show cart</button>
      <button v-else @click="showcart = !showcart">close cart</button>
      <userCart></userCart>
    
<div class="wrap">
  <div v-for="book in books" id="susdiv1" :key="book.id" class="comp">
      <h3>{{ book.name }} by {{ book.author }}</h3>
      <img v-bind:src="book.image" />
      <h4>{{ book.price }} dollars</h4>
        <button @click="updateUsers(book.name, book.price, book.image)">
          buy this item
        </button>
  </div>
</div>

</template>

<style scoped>
.comp {
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  width: 250px;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  justify-content: space-around;
}

img {
  height: 250px;
  width: 200px;
}

h3 {
  text-align: center;
  font-size: 30px;
}
p {
  text-align: center;
}
</style>