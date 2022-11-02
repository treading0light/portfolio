<template>
	<div id="viewer" class="fixed flex justify-center items-center w-full h-screen">
		<button @click="close()" class="btn btn-circle btn-secondary text-center absolute right-10 top-10">X</button>
		<img class="w-[80%] lg:w-[60%]" :src="cert">
	</div>
</template>

<script setup>
	const props = defineProps({
		cert: String
	})
	const emit = defineEmits(['close'])

	const close = () => {
		emit('close')
	}
</script>

<style scoped>
	* {
		z-index: 30;
	}

	#viewer {
		background-color: rgba(0, 0, 0, 0.7);
	}
</style>