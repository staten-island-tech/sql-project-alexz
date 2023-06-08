<script setup>
import { ref } from 'vue'
import loginpage from './loginpage.vue'
import createacc from './createacc.vue'
import loggedInHomePage from './loggedInHomePage.vue'
import { useCounterStore } from '../stores/counter'

function createaccount() {
  useCounterStore().page = 'createaccountpage'
}

function login() {
  useCounterStore().page = 'loginpage'
}
ref(useCounterStore())
</script>

<template>
  <body>
    <div class="homepage" v-if="useCounterStore().page === 'homepage'">
      <h1 class="title">TechBlog</h1>
      <div class="btnpage">
        <button @click="login" class="btn">Login</button>
        <button @click="createaccount" class="btn">Create Account</button>
      </div>
    </div>

    <div v-if="useCounterStore().page === 'loginpage'">
      <loginpage />
    </div>

    <div v-if="useCounterStore().page === 'createaccountpage'">
      <createacc />
    </div>

    <div v-if="useCounterStore().loggedIn === true">
      <loggedInHomePage />
    </div>
  </body>
</template>

<style scoped>
body {
  background-image: url('https://img.freepik.com/premium-photo/grey-abstract-background_427757-34.jpg');
  padding-bottom: 300px;
  padding-top: 40px;
}
h1 {
  margin-top: 300px;
}

.title {
  font-size: 100px;
  text-align: center;
}

.btnpage {
  margin-top: 100px;
  text-align: center;
}
.btn {
  font-size: 50px;
  background-color: transparent;
  margin-left: 50px;
  margin-right: 50px;
}
</style>