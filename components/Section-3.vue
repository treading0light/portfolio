<template>
	<div id="projects" class="w-full flex flex-col items-center">

		<TitleBanner title="My Projects" />

		<div style="z-index: 11;" class="text-xl flex w-full justify-center items-center gap-5 md:gap-20 mb-6">
			<p @click="flip('back')" class="btn btn-circle btn-secondary">&lt</p>
			<p @click="flip('forward')" class="btn btn-circle btn-secondary"> > </p>
		</div>

		<Projects ref="proj" :projects="projects" />
	</div>
	
</template>

<script setup>
	const proj = ref(null)

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
      description: "A tech blog created by my brother and I. Inside you can find code tutorials I created, including how I made these cards. ",
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

  const flip = (direction) => {
  	// console.log(proj.value)
  	proj.value?.flip(direction)
  }
</script>

<style scoped>
	h1 {
		/*background-color: rgba(0, 177, 166, 1.0);*/
		background: linear-gradient(to right, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 1.0), rgba(255, 255, 255, 0.0));
	}
</style>