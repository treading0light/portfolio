<template>
	<div class="w-full p-20 h-1/2 bg-primary flex flex-col lg:flex-row justify-around items-center text-primary-content
	text-3xl
	md:text-5xl
	lg:text-7xl">

		<div>
			<h1>Healthy Fleet</h1>
			<p class="text-xl md:text-3xl mt-5">An app designed to intelligently track a fleet's vehicle maintenance schedule</p>
		</div>

		<div class="relative w-fit" @mouseover="handleHover('show')" @mouseleave="handleHover('hide')">
			<img class="mask mask-parallelogram-3" src="/images/space-needle.jpg" />

			<div ref="details" class="w-1/2 h-full bg-base-100 opacity-90 absolute top-0 right-1/4 rounded-xl flex flex-col text-3xl p-10
			text-lg
			md:text-xl
			lg:text-3xl">
				<p class="font-bold">Stack:</p>
				<ul class="list-disc">
					<li>PHP/Laravel</li>
					<li>TailwindCSS</li>
					<li>MongoDB</li>
					<li>Breeze Authentication</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
	const visible = ref(false)
	const details = ref(null)
	const handleHover = (command) => {
		if (command === 'show') {
			details.value.classList.remove('invisible')
			console.log('mouseOn')
		} else {
			details.value.classList.add('invisible')
			console.log('mouseOff')
		}
		
		
	}
</script>