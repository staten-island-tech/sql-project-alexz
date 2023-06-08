<template>
    <div class="btnsection">
      <button @click="changetoblog" class="btn">Public Blogs</button>
      <button @click="changetoaccpage" class="btn">Account</button>
      <button @click="changetocreateblog" class="btn">Create Blog</button>
      <button @click="signout" class="btn">Sign Out</button>
    </div>
    <div v-if="page === 'blogpage'">
      <blogpage />
    </div>
  
    <div v-if="page === 'accountpage'">
      <accountpage />
    </div>
  
    <div v-if="page === 'createblogpage'">
      <createblogpage />
    </div>
  </template>
  
  <style scoped>
  .btnsection {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  
  .btn {
    font-size: 20px;
    background-color: white;
    margin-bottom: 50px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    margin: 1rem;
    font-size: 2rem;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    animation: moveInBottom 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }
  </style>
  
  <script setup>
  import blogpage from './blogpage.vue'
  import accountpage from './accountpage.vue'
  import createblogpage from './createblog.vue'
  import { ref } from 'vue'
  import { supabase } from '../supabase'
  import { useCounterStore } from '../stores/counter'
  
  let page = ref('blogpage')
  
  function changetoblog() {
    page.value = 'blogpage'
  }
  
  function changetocreateblog() {
    page.value = 'createblogpage'
  }
  
  function changetoaccpage() {
    page.value = 'accountpage'
  }
  
  async function signout() {
    const { error } = await supabase.auth.signOut()
    useCounterStore().loggedIn = false
    useCounterStore().page = 'homepage'
    username = ''
    password = ''
  }
  </script>