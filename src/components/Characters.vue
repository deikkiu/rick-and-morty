<template>
	<div class="grid grid-cols-5 gap-4">
		<Card v-for="item in list" :key="item['name']" :item="item" />
	</div>
</template>

<script>
import Card from './Card.vue';

export default {
	props: {
		list: Array,
	},
	components: {
		Card,
	},
};
</script>
