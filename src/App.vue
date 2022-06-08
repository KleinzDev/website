<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>
<template>
  <div class="flex flex-col h-screen bg-slate-700">
    <Navbar />
    <div class="flex-grow flex">
      <router-view />
    </div>
    <div class="box-border mx-4 my-2 text-white font-semibold text-center">&copy; Kleinz 2022</div>
  </div>
</template>