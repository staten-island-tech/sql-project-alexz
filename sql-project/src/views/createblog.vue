<template>
    <body>
      <div>
        <h1 class="title">Create Blog</h1>
      </div>
      <div class="loginbox">
        <div class="bloginfo">
          Name<input v-model="name" class="marg1" type="text" /> Title<input
            v-model="title"
            class="marg2"
            type="text"
          />
          Description<input v-model="description" class="marg3" type="text" /> Image<input
            v-model="image"
            class="marg4"
            type="text"
          />
        </div>
  
        <div>
          <button @click="createblog">Create Blog</button>
        </div>
      </div>
      <h1>
        {{ alertmessage }}
      </h1>
    </body>
  </template>
  
  <style scoped>
  body {
    padding: 100px;
  }
  .marg1 {
    margin-bottom: 40px;
  }
  .marg2 {
    margin-bottom: 40px;
  }
  .marg3 {
    margin-bottom: 40px;
  }
  .marg4 {
    margin-bottom: 40px;
  }
  .title {
    font-size: 100px;
    text-align: center;
  }
  .loginbox {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  
    width: 808px;
    height: 500px;
  }
  .bloginfo {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }
  </style>
  
  <script setup>
  import { ref } from 'vue'
  import { useCounterStore } from '../stores/counter'
  import { supabase } from '../supabase'
  let name = ref('')
  let title = ref('')
  let description = ref('')
  let image = ref('')
  let alertmessage = ref('')
  
  async function createblog() {
    const { data, error } = await supabase.from('userposts').insert([
      {
        title: `${title.value}`,
        description: `${description.value}`,
        createdby: `${name.value}`,
        imagelink: `${image.value}`,
        userid: `${useCounterStore().id}`
      }
    ])
    alertmessage.value = 'Blog Created'
  }
  </script>