<template>
  <div @scroll="handleScroll()" id="top" class="min-h-screen w-screen flex flex-col items-center gap-40">

      <Section-1 />

      <Section-2 />

      <Projects :projects="projects" />

  </div>

</template>

<script setup>
  const scrollPos = ref(0)

  const projects = [
    {
      name: 'Healthy Fleet',
      description: "An app designed to intelligently track a fleet's vehicle maintenance schedule. Demo available.",
      img: "/images/hf-logo-edit.png",
      link: "https://www.healthyfleet.org",
      details: [
        "PHP/Laravel",
        "jQuery",
        "TailwindCSS",
        "MongoDB"
      ],
    },
    {
      name: 'The Brothers Green',
      description: "A tech blog created by my brother and I. In it I have created code tutorials including components used here. ",
      img: "/images/dall-e-1.png",
      link: "https://brothers-green.vercel.app/",
      details: [
        "Nuxt 3",
        "Content v2",
        "TailwindCSS"
        
      ],
    },
    {
      name: 'Your new webapp!',
      description: "Hire me and we will make something amazing.",
      img: "/images/space-needle-edit.png",
      link: "",
      details: [
        "Javascript",
        "PHP",
        "Python",
        "And more!"
      ],
    }
  ]

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