<script setup>
    const links = [
        {
            name: 'Anilist',
            desc: 'This is a list of all the anime ive watched',
            link: 'https://anilist.co/user/Kleinz/',
            dN: 'Kleinz'
        },
        {
            name: 'Twitter',
            desc: 'Probably where I rant or something',
            link: 'https://twitter.com/_Kleinz',
            dN: '@_Kleinz'
        },
        {
            name: 'Discord',
            desc: 'If you want to talk to me, go send a friend request.',
            link: 'https://discord.com/users/731831467776409631',
            dN: 'Kleinz#3636'
        },
        {
            name: 'Github',
            desc: "Pretty self explanatory",
            link: 'https://github.com/KleinzDev',
            dN: 'KleinzDev'
        },
        {
            name: 'osu!',
            desc: "I play rhythm games lol",
            link: 'https://osu.ppy.sh/users/21008302',
            dN: 'Kleinz_'
        }
    ]
</script>
<template>
    <div class="flex flex-row justify-center gap-6 mt-4 flex-wrap">
        <div v-for="item in links" class="m-3 w-64 box-border flex">
            <div class="flex-grow flex flex-col place-items-center m-6">
                <h1 class="text-2xl font-semibold text-center">{{item.name}}</h1>
                <p class="text-center mb-2">{{item.desc}}</p>
                <a
                    :href="item.link"
                    class="text-blue-500 hover:text-blue-300"
                >{{item.dN}}</a>
            </div>
        </div>
    </div>
</template>