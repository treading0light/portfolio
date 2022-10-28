<template>
	<div class="w-9/12 bg-base-300 rounded-lg flex flex-col md:flex-row p-5 gap-5">
		<img class="mask mask-circle w-32" src="images/tony.jpg">
		<div class="flex flex-col w-full md:w-2/3">
			<div ref="miniNav" class="w-full flex flex-row justify-between text-center">
				<p class="bg-base-100 p-2 rounded-t-lg">Work life</p>
				<p class="p-2">Personal life</p>
				<p class="p-2">Coding life</p>
			</div>
			<div ref="dialog" class="bg-base-100 p-2">
				<p>My name is Tony Green. I am a self taught developer with plenty of general work experience. Over my years in the work force I have aquired a classic work ethic, learned to be a part of a team as well as be a leader, and even to work independently.</p>

				<p>I enjoy being challenged and learning new things.</p>
			</div>
			
		</div>
	</div>
</template>

<script setup>
	// template refs
	const miniNav = ref(null)
	const dialog = ref(null)

	// text to display
	const text = ref(null)

	const textOptions = {
		"Work life": [
			"My name is Tony Green. I am a self taught developer with plenty of general work experience. Over my years in the work force I have aquired a classic work ethic, worked independently and with highly trained teams, and trained others to be effective and efficient.",
			"I enjoy being challenged and learning new things."
		],

		"Coding life": [
			"I began my coding journey with 'Python Crash Course' by Eric Matthes. Once I finished the book I signed up for a web developer course where I learned Html, CSS, PHP, and Javascript.",
			"While working through all these steps I had been building projects. From CLI games with python, to web pages with vanilla JS and PHP, to projects using frameworks like Laravel and Vue/Nuxt."
		],

		"Personal life": [
			"I am a Washington born, husband and father of two.",
			"I highly value my time with family and friends. Good conversation is worth it's weight in gold.",
			"I seek challenges in sports like skydiving and martial arts."
		],
	}

	
	
</script>