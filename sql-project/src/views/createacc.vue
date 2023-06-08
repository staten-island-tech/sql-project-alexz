<template>
    <div>
      <button class="return" @click="returnto">Back</button>
    </div>
    <h1>Create Account</h1>
    <div class="createacc">
      <div class="infobox">
        Email<input v-model="emailinput" type="text" class="putmargin2" /> Password<input
          v-model="passwordinput"
          type="text"
          class="marginbot2"
        />
      </div>
  
      <button class="button1" @click="signup">Sign Up</button>
    </div>
  </template>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-top: 135px;
  }
  .button1 {
    margin-top: 135px;
    background-color: white;
  }
  .putmargin2 {
    margin-bottom: 100px;
  }
  .marginbot {
    margin-bottom: 25px;
  }
  .createacc {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 50px;
    width: 808px;
    height: 500px;
  }
  
  input {
    width: 800px;
    font-size: 20px;
  }
  
  .return {
    background-color: white;
    font-size: 20px;
    margin-bottom: 20px;
  }
  </style>
  
  <script setup>
  import { supabase } from '../supabase'
  import { ref } from 'vue'
  import { useCounterStore } from '../stores/counter'
  let emailinput = ref('')
  let passwordinput = ref('')
  
  async function signup() {
    const { data, error } = await supabase.auth.signUp({
      email: `${emailinput.value}`,
      password: `${passwordinput.value}`,
      options: {
        emailRedirectTo: 'https://example.com/welcome'
      }
    })
  }
  
  function returnto() {
    useCounterStore().page = 'homepage'
  }
  </script>