<template>
    <body>
      <div v-for="data in database">
        <div class="blogpage">
          <div class="postbox">
            <h1 class="createdby">{{ data.createdby }}</h1>
            <div class="postimage">
              <img class="img" :src="data.imagelink" />
            </div>
            <div class="titlepage">
              <h1 class="title">{{ data.title }}</h1>
            </div>
            <div class="descriptionpage">
              <h1 class="postdescription">
                {{ data.description }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </body>
  </template>
  
  <style scoped>
  h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: black;
    text-align: center;
  }
  
  .blogpage {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .postbox {
    background-color: white;
    width: 650px;
    height: 750px;
    border: 3px black solid;
    margin-bottom: 50px;
  }
  .createdby {
    font-size: 20px;
  }
  
  .postimage {
    display: flex;
    justify-content: center;
  }
  .img {
    border: 2px black solid;
    width: 630px;
    height: 550px;
    object-fit: cover;
  }
  
  .title {
    font-size: 30px;
  }
  .postdescription {
    font-size: 20px;
  }
  </style>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../supabase'
  
  let database = ref('')
  
  async function getdata() {
    let { data, error } = await supabase.from('userposts').select()
    console.log(data)
    database.value = data
  }
  
  onMounted(() => {
    getdata()
  })
  </script>