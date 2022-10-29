<template>
	<div id="stack" class="w-2/3 min-h-screen relative">

		<div style="z-index: 11;" class="absolute text-xl -top-16 left-auto flex w-full justify-center items-center gap-5 md:gap-20">
			<p @click="flip('back')" class="btn btn-circle btn-accent">&lt</p>
			<h1 class="whitespace-nowrap text-sm sm:text-base">My Projects</h1>
			<p @click="flip('forward')" class="btn btn-circle btn-accent"> > </p>
		</div>

		<div v-for="project in projects"
		class="flip-card card text-center absolute p-1 sm:p-10 bg-base-200 border-4 border-primary h-96 w-10/12
		sm:card-side sm:items-center">
			<div class="flex flex-col gap-3">
				<h2 class="text-center bold text-lg lg:text-3xl">{{ project.name }}</h2>
				<p class="text-sm lg:text-xl">{{ project.description }}</p>

				<div v-if="project.link != '' " class="card-action justify-end">
					<a class="btn btn-accent " :href="project.link">Visit</a>
				</div>	

			</div>

			<figure><ImageWithDetails :details="project.details" :img="project.img" /></figure>
			
		</div>
		
	</div>
	
</template>

<script setup>
	const cards = ref(null)

	const props = defineProps({
		projects: Array
	})

	const sleep = ms => new Promise(r => setTimeout(r, ms))

	// use newly sorted array to set absolute positions
	// and z-index of elements to make stack effect
	const rePosition = (array) => {

		for (const el of array) {
			// calculate positions by index
			const index = array.indexOf(el)
			const top = index * 10
			const right = 0 - top

			// apply positions
			el.style.top = top + 'px'
			el.style.right = right + 'px'
			el.style.zIndex = 10 - index
		}
	}

	// re-order array of elements forward/backward
	const flip = async (dir) => {
		const array = cards.value
		let el = null

		if (dir === 'forward') {
			el = array.shift()
			array.push(el)
		} else {
			el = array.pop()
			array.unshift(el)
		}

		el.style.transform = 'translateX(150%)'
		await sleep(500)

		rePosition(array)

		el.style.transform = 'translateX(0)'

	}

	onMounted(() => {
		// get array of card elements
		cards.value = Array.from(document.querySelectorAll('.flip-card'))

		// run once on load to give stack initial positions
		rePosition(cards.value)
	})
</script>

<style scoped>
	.flip-card {
		transition: transform .5s;
	}
</style>