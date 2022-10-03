<template>
    <div>

        <div id="topNav" class="fixed top-5 w-full flex justify-around">
            <img @click="changeClass" class="w-10 hover:cursor-pointer bg-white" src="/images/github.png">
            <img class="w-10 hover:cursor-pointer" src="/images/twitter.png">
            <img class="w-10 hover:cursor-pointer" src="/images/linkedin.png">
        </div>

        <div id="sideNav" class="fixed max-w-screen-sm min-h-screen flex flex-col justify-center items-center text-base-content
        text-3xl gap-28
        md:text-5xl md:gap-56
        ">

            <h3 class="-rotate-90 hover:cursor-pointer">Projects</h3>
            <h3 class="-rotate-90 hover:cursor-pointer">About Me</h3>
        </div>

    </div>
	

  
</template>

<script setup>
    // set up refs to recieve both nav elements
    const top = ref(null)
    const side = ref(null)

    // scrollUp/scrollDown are called by parent component

    const scrollUp = () => {
        top.value.classList.remove('-translate-y-52')
        side.value.classList.remove('-translate-x-52')
    }

    const scrollDown = () => {
        top.value.classList.add('-translate-y-52')
        side.value.classList.add('-translate-x-52')
    }

    defineExpose({
        // must expose methods to be called by parent
        scrollDown,
        scrollUp
    })

    onMounted(() => {
        // save both nav elements to refs
        
        top.value = document.getElementById('topNav')
        side.value = document.getElementById('sideNav')
    })

	
</script>

<style scoped>
    #sideNav, #topNav {
        transition: transform 0.5s ease;
    }
</style>