<template>
  <div @scroll="handleScroll()" id="top" class="min-h-screen w-screen flex flex-col items-center gap-40">

      <Section-1 />
      
      <div class="w-full h-fit text-center bg-slate-100 bg-gradient-to-b">
        <h1>Projects</h1>
      </div>
      <Projects />

  </div>

</template>

<script setup>
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

  #top {
    
  }

</style>