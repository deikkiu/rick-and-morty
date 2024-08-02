<template>
	<h1 className="text-3xl font-bold underline">Home Page</h1>

	<div class="mt-10">
		<ul id="array-rendering">
			<li v-for="item in list" v-bind:key="item.id">
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
	getCharactersByPage,
	getCharactersById,
} from '@/api/character/character';

const list = ref([]);

async function fetchData() {
	try {
		const data = await getCharactersByPage(1);
		list.value = data.results;
	} catch (e) {
		throw new Error(e);
	}
}

onMounted(fetchData);
</script>
