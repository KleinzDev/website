<script >
export default {
    data() {
        return {
            windowWidth: 0,
            navDropdown: false,
            links: [
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'About',
                    path: '/about'
                },
                {
                    name: 'Links',
                    path: '/links'
                }
            ]
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        toggleDropdown() {
            this.navDropdown = !this.navDropdown;
        }
    }
}
</script>

<template>
    <div class="flex flex-col">
        <nav class="box-border h-20 px-20 bg-[#314053] text-white flex flex-row flex-wrap">
            <ul class="flex flex-row justify-center gap-2">
                <li class="m-auto">
                    <router-link to="/">
                        <h1 class="text-2xl font-sans font-bold text-blue-300">Kleinz</h1>
                    </router-link>
                </li>
            </ul>
            <div class="flex-grow"></div>
            <ul class="flex flex-row justify-center gap-2" v-if="windowWidth <= 860">
                <li class="m-auto">
                    <a class="text-slate-100 font-sans font-semibold hover:text-slate-400 box-border p-2 cursor-pointer"
                        @click="toggleDropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2" v-if="!navDropdown">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2" v-else>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </li>
            </ul>
            <ul class="flex flex-row justify-center gap-2" v-else>
                <li class="m-auto" v-for="link in links">
                    <router-link :to="link.path"
                        class="text-slate-100 font-sans font-semibold hover:bg-slate-800 box-border p-2">
                        {{link.name}}</router-link>
                </li>
            </ul>
        </nav>
        <ul class="box-border px-2 text-white flex flex-row flex-wrap bg-[#314053]" v-if="navDropdown && windowWidth <= 860">
            <router-link v-for="link in links" :to="link.path"
                class="basis-full text-slate-100 font-sans font-semibold hover:text-slate-400 box-border p-2">
                {{link.name}}</router-link>
        </ul>
    </div>
</template>