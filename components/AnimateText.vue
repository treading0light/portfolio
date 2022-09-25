<template>
	<div class="w-1/2 flex flex-col items-center gap-20 border-x-[20px] rounded-3xl

	text-3xl
	md:text-5xl
	lg:text-7xl
	">
				<!-- 
				The top parent element is a target to move around and calculate size
				from and has overflow-hidden and styled borders.

				Next one down is 3x the width of parent for even space on either side.

				The next two are siblings are absolute positioned on either side of parent 
				border div, use flex nowrap to get a strait array of words.
				
				The h1 stays invisible until it fades in after animation

				the invisible p tags are used to add height to border div
				 -->

        <div class=" w-[300%] flex flex-col">

        	<div id="row1" ref="row1" class="flex flex-nowrap justify-center gap-20 w-1/2">
	          <p v-for="word in row1Words" :key="word"
	          class="" 
	          >{{ word }}</p>
	        </div>

	        <!-- <div id="row2" ref="row2" class="flex flex-nowrap justify-center gap-20 w-1/2 mt-40">
	          <p v-for="word in row2Words" :key="word"
	          class="" 
	          >{{ word }}</p>
	        </div> -->
	        
        </div>

	        <h1 id="head" class="absolute top-5 w-full text-center opacity-0">Developer</h1>

	        <p class="invisible">Make this vanish</p>
	        <p class="invisible">Make this vanish</p>


      </div>
</template>

<script setup>
	const row1 = ref(null)
	const row2 = ref(null)
	const x1 = ref('-120rem')
	const x2 = ref('-17rem')

	const row1Words = [
		'Web Developer',
    'Database Architect',
    'Cool Guy'
	]

	const row2Words = [
		'Team Member',
    'Creative Mind',
    'Hard Worker'
	]

	const setRow = (div, direction) => {
		let width = div.clientWidth
		if (direction === 'left') {
			div.style.marginRight = width
			
		} else {
			div.style.marginLeft = width
		}

		console.log(div.style.marginRight)
		console.log(width)
		
	}

	const moveRow = (div, direction) => {
		let width = div.offSetWidth

		div.style.transform = 'translateX(' + width + ')'
	}

	onMounted(() => {
		setRow(row1.value, 'left')
		setRow(row2.value, 'right')
		// row1.value.style.transform = "translateX()"

	})

</script>

<style scoped>
	p {
		transition: transform 10s ease;
		white-space: nowrap;
	}

	@keyframes slide-right {
		0% { transform: translateX(-200%); }
		100% { transform: translateX(200%); }
	}

	@keyframes slide-left {
		0% { transform: translateX(200%); }
		100% { transform: translateX(-200%); }
	}

	@keyframes fade-in {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}

	#row1 {
		/*animation: slide-right 10s 1s forwards;*/
		transition: transform 8s;
	}

	#row2 {
		/*animation: slide-left 10s 1s forwards;*/
		transition: transform 10s ease;
	}

	#head {
		animation: fade-in 2s 9s forwards;
		/*transition: visibility 2s ease-in;*/
	}
</style>