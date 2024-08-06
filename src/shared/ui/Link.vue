<script setup>
defineProps(['name', 'url']);
</script>

<template>
	<router-link :to="url" class="flex items-center">
		<span
			class="font-sans sm:text-lg mm:text-base text-white transition hover:text-blue"
		>
			{{ name }}
		</span>
	</router-link>
</template>
