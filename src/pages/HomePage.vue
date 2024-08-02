<script setup>
import { ref, onMounted } from 'vue';
import { getCharactersByPage } from '@/api/character/character';

import { Header, Footer, Menu, Characters } from '@/components/index';
import { Title } from '@/shared/ui/index';

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

<template>
	<Header />

	<main class="mt-10">
		<div class="container">
			<div>
				<Title text="Characters" />

				<div class="mt-6">
					<Characters :list="list" />
				</div>
			</div>
		</div>
	</main>

	<Footer />
</template>
