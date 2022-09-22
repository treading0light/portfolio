<template>
	<div class="w-1/2 h-1/2 overflow-hidden relative border-x-[20px] rounded-3xl
	text-3xl
	md:text-5xl
	lg:text-7xl
	">

        <div id="row1" ref="row1" class="flex flex-nowrap gap-20 translate-x-[-200%]">
          <p>Web Developer</p>
          <p>Database Architect</p>
          <p>Cool Guy</p>
        </div>

        <div id="row2" ref="row2" class="flex flex-nowrap gap-20 translate-x-[200%]">
          <p>Team Member</p>
          <p>Creative Mind</p>
          <p>Hard Worker</p>
        </div>

        <h1 id="head" class="absolute top-5 w-full text-center opacity-0">Developer</h1>

      </div>
</template>

<script setup>
	const row1 = ref(null)
	const row2 = ref(null)
	const x1 = ref('-120rem')
	const x2 = ref('-17rem')

	onMounted(() => {
		// let dynoClass = `translate-x-[${x1.value}]`
		// console.log(dynoClass)
		// row1.value.classList.add(dynoClass)
		// console.log(row1.value.classList)
	})

</script>

<style scoped>
	p {
		transition: transform 1s ease;
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
		animation: slide-right 10s 1s forwards;
	}

	#row2 {
		animation: slide-left 10s 1s forwards;
	}

	#head {
		animation: fade-in 2s 9s forwards;
		/*transition: visibility 2s ease-in;*/
	}
</style>