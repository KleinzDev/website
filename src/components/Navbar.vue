<script setup>
const links = {
  left: [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About Me",
      link: "/about-me",
    },
  ],
  right: [
    {
      id: 1,
      name: "Contact/Links",
      link: "/links",
    },
    {
      id: 2,
      name: "Projects",
      link: "/projects",
    },
  ],
};
</script>

<template>
  <nav class="w-full bg-slate-100 h-16 flex">
    <div class="w-5/6 mx-auto flex flex-row justify-between">
      <div class="flex flex-row my-auto gap-4">
        <router-link to="/" class="my-auto">
          <img src="/chizuru.png" class="w-10 h-10 rounded-full shadow-lg" />
        </router-link>
        <ul class="flex flex-row gap-3 my-auto">
          <li v-for="link in links.left" v-bind:key="link.id">
            <router-link
              :to="link.link"
              class="text-slate-800 hover:text-blue-400 font-sans font-semibold"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div></div>
      <div class="flex flex-row my-auto gap-4">
        <ul class="flex flex-row gap-3 my-auto">
          <li v-for="link in links.right" v-bind:key="link.id">
            <router-link
              :to="link.link"
              class="text-slate-800 hover:text-blue-400 font-sans font-semibold"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>