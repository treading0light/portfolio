<template>
	<div id="stack" class="w-2/3 min-h-screen relative">

		<div style="z-index: 11;" class="absolute text-xl -top-16 left-auto flex w-full justify-center gap-56">
			<p @click="flip('back')" class="btn btn-circle btn-accent">&lt</p>
			<p @click="flip('forward')" class="btn btn-circle btn-accent"> > </p>
		</div>

		<div v-for="project in projects"
		class="flip-card card text-center absolute p-10 bg-base-200 border-4 border-primary h-2/3 w-10/12
		lg:card-side lg:items-center">
			<div class="flex flex-col gap-3 text-sm lg:text-xl">
				<h2 class="text-center bold text-3xl">{{ project.name }}</h2>
				<p>{{ project.description }}</p>

				<div class="card-action justify-end">
					<a class="btn btn-accent" :href="project.link">Visit</a>
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

	const flip = async (dir) => {
		const array = cards.value
		let el = null

		if (dir === 'forward') {
			el = array.shift()
			console.log(el)
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
		// cards.value = Array.from(document.getElementById('stack').children)
		cards.value = Array.from(document.querySelectorAll('.flip-card'))
		console.log(cards.value)

		rePosition(cards.value)

		// console.log(cards)
	})
</script>

<style scoped>
	.flip-card {
		transition: transform .5s;
	}
</style>