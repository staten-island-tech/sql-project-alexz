<template>
    <div>
      <button class="return" @click="returnto">Back</button>
    </div>
    <h1>Account Login</h1>
    <div class="loginbox">
      <div class="accountinfo">
        Email<input v-model="emailinput" type="text" class="putmargin" />
  
        Password<input v-model="passwordinput" type="text" class="marginbot" />
      </div>
  
      <div>
        <h1>{{ alertmessage }}</h1>
      </div>
  
      <div>
        <button @click="signInWithEmail" class="loginbtn">Login</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-top: 135px;
  }
  .marginbot {
    margin-bottom: 1px;
  }
  .putmargin {
    margin-bottom: 100px;
  }
  .loginbox {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  
    width: 808px;
    height: 500px;
  }
  .title {
    font-size: 50px;
    text-align: center;
  }
  
  .accountinfo {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  input {
    width: 800px;
    font-size: 20px;
  }
  
  .loginbtn {
    margin-top: 2px;
    background-color: white;
  }
  
  .return {
    background-color: white;
    font-size: 20px;
    margin-bottom: 20px;
  }
  </style>
  
  <script setup>
  import { ref } from 'vue'
  import { supabase } from '../supabase'
  import { useCounterStore } from '../stores/counter'
  let emailinput = ref('')
  let passwordinput = ref('')
  let alertmessage = ref('')
  
  function returnto() {
    useCounterStore().page = 'homepage'
  }
  
  async function signInWithEmail() {
    if (emailinput.value === '') {
      alertmessage.value = 'Please enter email/password'
    } else if (passwordinput.value === '') {
      alertmessage.value = 'Please enter email/password'
    } else {
      alertmessage.value = ''
      const { data, error } = await supabase.auth.signInWithPassword({
        email: `${emailinput.value}`,
        password: `${passwordinput.value}`
      })
      console.log(data)
      if (data.user === null) {
        alertmessage.value === 'Wrong username or password'
      } else {
        useCounterStore().email = data.user.email
        useCounterStore().password = data.user.password
        useCounterStore().id = data.user.id
        useCounterStore().page = ''
        useCounterStore().loggedIn = true
        useCounterStore().password = `${passwordinput.value}`
        useCounterStore().user = data.user.username
      }
    }
  }
  
  </script>