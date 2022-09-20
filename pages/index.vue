<template>
  <div @scroll="handleScroll()" id="top" class="min-h-screen w-screen bg-no-repeat bg-primary flex flex-col items-center">


      <div id="content" class="p-12 rounded-xl text-7xl text-base-content row-span-1 w-1/2 justify-self-center lg:self-start mt-10"
       >

        <h1 class="text-center hover:cursor-pointer">Tony Green</h1>
        <h2 class="text-4xl text-center mt-5">Web Developer</h2>
      </div>

      <div id="div" class="w-1/2 min-h-screen overflow-hidden"
      >
        
        <p id="dev" class="w-full h-full py-10 text-9xl">
          Some Text oh oh some text
        </p>
      </div>

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