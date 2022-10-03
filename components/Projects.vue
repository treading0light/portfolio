<template>
	<div class="w-2/3 min-h-screen relative">

		<div v-for="project in projects" :id="project.id" :key="project.id" class="absolute top-0 p-20" style="z-index: 5">
			<div class="">
				<h2 class="">{{ project.name }}</h2>
				<p>An app designed to intelligently track a fleet's vehicle maintenance schedule</p>
				
			</div>

			<img class="mask mask-parallelogram-3 my-10 w-2/3" src="/images/space-needle.jpg" />
			
		</div>
		
	</div>
	
</template>

<script setup>
	const visible = ref(false)
	const details = ref(null)
	const projects = ref(null)

	const projectArray = {
		{
			id: 1,
			name: 'Healthy Fleet',
			text: "An app designed to intelligently track a fleet's vehicle maintenance schedule",
			bgClass: "bg-primary"
		},

		{
			id: 2,
			name: 'Brothers Green',
			text: "A blog site",
			bgClass: "bg-secondary"
		}
	}

	const handleHover = (command) => {
		if (command === 'show') {
			details.value.classList.remove('invisible')
			console.log('mouseOn')
		} else {
			details.value.classList.add('invisible')
			console.log('mouseOff')
		}	
	}

	onMounted(() => {
		projects.value = projectArray
	})
</script>

<style>
	
</style>