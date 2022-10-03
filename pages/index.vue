<template>
  <div @scroll="handleScroll()" id="top" class="min-h-screen w-screen flex flex-col items-center gap-40">

      <Section-1 />

      <!-- <Projects /> -->

      <div class="stack">
        <div class="text-center border border-base-content card w-36 bg-base-100">
          <div class="card-body">A</div>
        </div> 
        <div class="text-center border border-base-content card w-36 bg-base-100">
          <div class="card-body">B</div>
        </div> 
        <div class="text-center border border-base-content card w-36 bg-base-100">
          <div class="card-body">C</div>
        </div>
      </div>

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