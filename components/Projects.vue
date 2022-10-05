<template>
	<div id="stack" class="w-2/3 min-h-screen relative">

		<div style="z-index: 11;" class="absolute text-xl -top-16 left-auto flex w-full justify-center gap-10">
			<p @click="flipBack" class="btn btn-circle btn-accent">&lt</p>
			<p @click="flipForward" class="btn btn-circle btn-accent">></p>
		</div>

		<div v-for="project in projects"
		class="flip-card card text-center absolute p-10 bg-base-200 border-4 border-primary h-2/3 w-10/12
		lg:card-side lg:items-center">
			<div class="">
				<h2 class="text-center bold text-3xl">{{ project.name }}</h2>
				<p>{{ project.description }}</p>
				
				
			</div>

			<figure><ImageWithDetails :details="project.details" :img="project.img" /></figure>
			
		</div>
		
	</div>
	
</template>

<script setup>
	const visible = ref(false)
	const details = ref(null)
	const cards = ref(null)
	const props = defineProps({
		projects: Array
	})

	const sleep = ms => new Promise(r => setTimeout(r, ms))

	const rePosition = (array) => {
	

		for (const el of array) {
			const index = array.indexOf(el)
			const top = index * 10
			const right = 0 - top
			console.log(el.style.top)

			el.style.top = top + 'px'
			console.log(el.style.top)
			el.style.right = right + 'px'
			el.style.zIndex = 10 - index
		}
	}

	const reOrder = (array) => {
		let endPos = array.shift()

		return array.push(endPos)
	}

	const flipForward = async () => {
		const array = cards.value
		const backPos = array.shift()
		// cards[0]
		backPos.style.transform = 'translateX(150%)'
		await sleep(500)

		array.push(backPos)

		rePosition(array)

		backPos.style.transform = 'translateX(0)'
	}

	const flipBack = async () => {
		const array = cards.value
		const frontPos = array.pop()

		frontPos.style.transform = 'translateX(150%)'
		await sleep(500)

		array.unshift(frontPos)

		rePosition(array)

		frontPos.style.transform = 'translateX(0)'
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