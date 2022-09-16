<template>
  <div @scroll="handleScroll()" id="top" class="min-h-screen w-screen bg-no-repeat bg-primary flex flex-col items-center justify-center md:grid md:grid-cols-2 md:grid-rows-2">


      <div id="content" class="p-12 rounded-xl text-7xl text-base-content row-span-1 w-1/2 justify-self-center"
       >

        <h1 class="bg-clip-text text-center">Tony Green</h1>
        <h2 class="text-4xl text-center mt-5">Web Developer</h2>
      </div>

      <div id="button-group" class="flex flex-col rounded gap-3 col-start-2 row-start-2 col-span-1 row-span-1 w-1/4 h-1/2 justify-self-center md:w-1/2 md:h-3/4"
        
        >
        <button class="btn btn-secondary hover:btn-ghost hover:text-base-100 md:text-3xl md:h-1/4 lg:text-4xl">Projects</button>
        <button class="btn btn-secondary hover:btn-ghost hover:text-base-100 md:text-3xl md:h-1/4 lg:text-4xl">Contact Me</button>
        <button class="btn btn-secondary hover:btn-ghost hover:text-base-100 md:text-3xl md:h-1/4 lg:text-4xl">Skills</button>
      </div>

    <div id="grid" class="absolute w-screen h-screen top-0"
      @mousemove=""
      >
      <!-- <div v-for="block in blocks" :key="block" @mousemove="handleMouseMove" class="bg-black hover:bg-transparent flex justify-center items-center">{{ block }}</div> -->
      
    </div>

    <!-- <input class="fixed top-0 right-1/2" type="number" v-model="blocks"> -->

  </div>

</template>

<script setup>
  const blocks = ref(120)
  // const rows = ref(null)
  const scrollPos = ref(0)

  const handleMouseMove = (e) => {
    let x = e.clientX.toString() + 'px' 
    let y = e.clientY.toString() + 'px'
    let xy = x + " " + y

    const el = document.getElementById('grid')

    let radValue = "radial-gradient(circle at "+ xy + ", rgba(0,0,0,0) 200px, rgba(0,0,0,1) 50px )";
    let image = ""

    // el.style.setProperty('background-image', radValue)
    e.target.style.backgroundImage = radValue


    // console.log(x + ' ' + y)
  }

  const handleScroll = () => {
    scrollPos.value = window.scrollY
    console.log(scrollPos.value)
  }


</script>

<style>
  #grid {
    /*background-image: url('/images/library.jpeg');*/
    /*background-image: radial-gradient(circle at 50%, rgba(100,0,150,0), rgba(0,100,0,0) );*/

    /*grid-template-columns: repeat(20, 1fr);*/
  }

  #top {
    background-image: url('/images/circle-scatter-haikei.svg');
    /*background: center cover no-repeat;*/
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

</style>