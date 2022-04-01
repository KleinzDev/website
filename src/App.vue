<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <router-view></router-view>
  </div>
</template>