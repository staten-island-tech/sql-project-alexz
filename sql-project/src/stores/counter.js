import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  let page = 'homepage'
  let loggedIn = false
  let email = ''
  let password = ''
  let id = ''
  return { page, email, password, id, loggedIn,}
})