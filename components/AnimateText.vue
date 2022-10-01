<template>
	<div class="w-1/2 mx-auto relative border-x-[20px] rounded-3xl overflow-hidden

	text-3xl
	md:text-5xl
	lg:text-7xl
	">

		<p v-for="word in row1Words" :key="word" :id="word"
	  class="w-full text-center absolute invisible" 
	  >{{ word }}</p>

        	<!-- <div id="row1" ref="row1" class="relative gap-20 w-1/2">
	          <p v-for="word in row1Words" :key="word" :id="word"
	          class="absolute invisible" 
	          >{{ word }}</p>
	        </div> -->

	        <!-- <div id="row2" ref="row2" class="flex flex-nowrap justify-center gap-20 w-1/2 mt-40">
	          <p v-for="word in row2Words" :key="word"
	          class="" 
	          >{{ word }}</p>
	        </div> -->


	        <h1 id="head" class="absolute top-5 w-full text-center opacity-0">Developer</h1>

	        <p class="invisible">Make this vanish</p>
	        <p class="invisible">Make this vanish</p>
	        <p class="invisible">Make this vanish</p>


      </div>
</template>

<script setup>
	//
	// Initialize
	// 

	const x1 = ref('-120rem')
	const x2 = ref('-17rem')

	const row1Words = [
		'Web Developer',
    'Database Architect',
    'Cool Guy',
    'Developer'
	]

	const row2Words = [
		'Team Member',
    'Creative Mind',
    'Hard Worker'
	]

	//
	// Utility Functions
	//

	const isEven = (i) => i % 2 == 0
	const sleep = ms => new Promise(r => setTimeout(r, ms))

	//
	// Animation Logic
	//

	const nextWord = async (count, array, id) => {
		console.log(count)

		// if current el is the last in array
		if (count >= array.length - 1) {

			// get current and previous element
			const lastCount = count - 1
			const prevEl = document.getElementById(array[lastCount])
			const el = document.getElementById(array[count])

			// animate out prev el and animate in the next
			fadeOut(prevEl)
			// await sleep(1000)

			// final element slides in and grows in size
			slideIn(el, count)
			await sleep(750)

			el.style.fontSize = '150%'
			// el.style.transform = 'translateY(1px)'

			// end
			clearInterval(id)

		} else {

			// animate out previous element if there is one
			if (count != 0) {
				const lastCount = count - 1
				const prevEl = document.getElementById(array[lastCount])
				fadeOut(prevEl)
				console.log(prevEl.id + ' disapears')
				// await sleep(1000)
			}
			
			// animate in new element
			const el = document.getElementById(array[count])
			slideIn(el, count)
		}		
	}

	const slideIn = (el, index) => {

		// get current height of element and parent,
		// calculate movement distance
		const h = el.offsetHeight
		const ph = el.parentElement.offsetHeight 
		const distance = ph / 2 + h / 2

		// even=animate from bottom, odd=top
		if (isEven(index)) {

			// set initial position, make visible, then move
			// to center of parent
			console.log('even')
			el.style.bottom = '-' + h.toString() + 'px'
			el.style.visibility = 'visible'
			el.style.transform = 'translateY(-' + distance + 'px)'
		} else {
			console.log('odd')
			el.style.top = '-' + h.toString() + 'px'
			el.style.visibility = 'visible'
			el.style.transform = 'translateY(' + distance + 'px)'
		}
	}

	const slideOut = (el, index) => {
		const h = el.offsetHeight
		const ph = el.parentElement.offsetHeight 
		const distance = ph / 2 + h / 2

		if (isEven(index)) {
			console.log('slide out even')
			el.style.transform = 'translateY(-' + distance * 2 + 'px)'
		} else {
			console.log('slide out odd')
			el.style.transform = 'translateY(' + distance * 2 + 'px)'
		}
		sleep(500)
		el.style.visibility = 'hidden'
	}

	const final = (el, index) => {
		slideIn(el, index)
		sleep(500)
		el.style.fontSize = '150%'
	}

	const fadeOut = (el) => {
		el.style.opacity = 0
	}

	const center = (el) => {
		let h = el.offsetHeight
		let ph = el.parentElement.offsetHeight

		return h + ph
	}



	onMounted(() => {

		let count = 0

		// id === int
		let id = setInterval(() => {		
			nextWord(count, row1Words, id)
			count ++
		}, 2000)

	})

</script>

<style scoped>
	p {
		transition: transform .5s ease-in,
		opacity .5s ease-in,
		font-size 1s;

		white-space: nowrap;
	}
</style>