<script setup>
</script>

<template>
  <div class="w-full shadow-lgs py-4 px-2">
    <div class="container mx-auto flex flex-wrap justify-between items-center">
      <div class="flex flex-row gap-6">
        <router-link to="/">
          <span class="text-2xl self-center whitespace-nowrap font-semibold">Kleinz</span>
        </router-link>
        <div class="flex flex-row items-center gap-3">
            <router-link to="/" class="text-slate-600 hover:text-blue-500 font-sans font-semiboldd">Home</router-link>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex flex-row items-center gap-3">
            <router-link to="/about-me" class="text-slate-600 hover:text-blue-500 font-sans font-semiboldd">About me</router-link>
            <router-link to="/projects" class="text-slate-600 hover:text-blue-500 font-sans font-semiboldd">Projects</router-link>
            <router-link to="/links" class="text-slate-600 hover:text-blue-500 font-sans font-semiboldd">Contacts/Links</router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>