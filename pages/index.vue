<template>
  <div @scroll="handleScroll()" id="top" class="min-h-screen w-screen bg-no-repeat bg-primary flex flex-col items-center">


      <div id="content" class="p-12 rounded-xl text-7xl text-base-content row-span-1 w-1/2 justify-self-center lg:self-start mt-10"
       >

        <h1 class="text-center hover:cursor-pointer">Tony Green</h1>
        <h2 class="text-4xl text-center mt-5">Web Developer</h2>
      </div>

      <AnimateText />

  </div>

</template>

<script setup>
  const blocks = ref(120)
  // const rows = ref(null)
  const scrollPos = ref(0)

  const handleScroll = () => {
    scrollPos.value = window.scrollY
    console.log(scrollPos.value)
  }

  const handleClick = () => {
    console.log('click')
  }


</script>

<style>
  #dev {
   background: url('/images/space-needle.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  /*background-attachment: fixed;*/
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  #top {
    background-image: url('/images/circle-scatter-haikei.svg');
    /*background: center cover no-repeat;*/
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

</style>