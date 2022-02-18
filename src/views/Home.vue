<template>
  <div class="h-72 bg-blue-400">
    <div class="flex flex-wrap flex-col h-full w-full container mx-auto box-border px-4">
        <div class="my-auto">
          <h1 class="text-4xl font-semibold text-white">Hi! I'm Kleinz</h1>
          <p class="text-white">I'm a full-stack developer and I'm also a high student. Might be a little boring at times</p>
        </div>
        <div class></div>
    </div>
  </div>
  <div class="flex flex-row justify-center gap-6 mt-4 flex-wrap">
    <div class="m-3 border-2 border-gray-300 shadow-md rounded-lg w-64 box-border flex">
        <div class="flex-grow flex flex-col place-items-center m-6">
          <h1 class="text-2xl font-semibold text-center">Contacts/Links</h1>
          <p class="text-center mb-2">
            Want to contact me or find out my social links?
          </p>
          <router-link to="/links" class="bg-fuchsia-600 hover:bg-fuchsia-400 rounded-md mt-auto content-center shadow-sm text-white font-semibold px-5 py-2">Contacts/Links</router-link>
        </div>
    </div>
    <div class="m-3 border-2 border-gray-300 shadow-md rounded-lg w-64 box-border flex">
        <div class="flex-grow flex flex-col place-items-center m-6">
          <h1 class="text-2xl font-semibold text-center">Projects</h1>
          <p class="text-center mb-2">
            I manage and work in a few projects, they are listed in this page.
          </p>
          <router-link to="/projects" class="bg-red-600 hover:bg-red-400 rounded-md mt-auto content-center shadow-sm text-white font-semibold px-5 py-2">Projects</router-link>
        </div>
    </div>
  </div>
</template>