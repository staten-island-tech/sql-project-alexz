<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <header>
    <!-- <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink> -->
    <HomeView/>
  </header>
  <RouterView />
</template>

<style scoped></style>