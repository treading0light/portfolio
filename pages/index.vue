<template>
  <div @scroll="handleScroll()" id="top" class="min-h-screen w-screen flex flex-col items-center gap-40">

      <Section-1 />

      <Projects :projects="projects" />

  </div>

</template>

<script setup>
  const scrollPos = ref(0)

  const projects = [
    {
      name: 'Healthy Fleet',
      description: "An app designed to intelligently track a fleet's vehicle maintenance schedule",
      img: "/images/space-needle.jpg",
      link: "https://www.healthyfleet.org",
      details: [
        "PHP/Laravel",
        "TailwindCSS",
        "MongoDB"
      ],
    },
    {
      name: 'Healthy Fleet',
      description: "An app designed to intelligently track a fleet's vehicle maintenance schedule",
      img: "/images/space-needle.jpg",
      link: "https://www.healthyfleet.org",
      details: [
        "PHP/Laravel",
        "TailwindCSS",
        "MongoDB"
      ],
    },
    {
      name: 'Healthy Fleet',
      description: "An app designed to intelligently track a fleet's vehicle maintenance schedule",
      img: "/images/space-needle.jpg",
      link: "https://www.healthyfleet.org",
      details: [
        "PHP/Laravel",
        "TailwindCSS",
        "MongoDB"
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