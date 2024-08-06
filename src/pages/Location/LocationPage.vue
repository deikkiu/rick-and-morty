<template>
	<Header />

	<main class="mm:mt-10 mmm:mt-6">
		<div class="container">
			<div>
				<img class="w-16 h-16" src="@/assets/icons/planet.svg" alt="Episode" />

				<h1 class="mt-4 text-4xl font-bold text-white">{{ item.name }}</h1>

				<div class="mt-4 flex flex-row items-center gap-x-2">
					<img class="w-6 h-6" src="@/assets/icons/planet.svg" alt="Type" />
					<p class="text-base text-white">{{ item.type }}</p>
				</div>

				<div class="mt-2 flex flex-row items-center gap-x-2">
					<img
						class="w-6 h-6"
						src="@/assets/icons/dimension.svg"
						alt="dimension"
					/>
					<p class="text-base text-white">{{ item.dimension }}</p>
				</div>
			</div>

			<div class="mt-10">
				<Title text="Residents" />

				<div
					class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mm:grid-cols-2 gap-4 mm:mt-6 mmm:mt-4"
				>
					<CharacterCard
						v-for="resident in residents"
						:key="resident['name']"
						:item="resident"
					/>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</template>

<script>
import axios from 'axios';
import { getIdFromUrl } from '@/shared/lib/helpers';

import { Header, Footer, CharacterCard } from '@/components/index';
import { Title } from '@/shared/ui';

export default {
	data() {
		return {
			item: null,
			residents: null,
		};
	},
	props: ['id'],
	components: {
		Header,
		Footer,
		CharacterCard,
		Title,
	},
	created() {
		this.getLocationById(this.id);
	},
	methods: {
		async getLocationById(id) {
			try {
				const data = await axios.get(
					`https://rickandmortyapi.com/api/location/${id}`
				);
				this.item = data.data;

				// residents
				const list = await axios.get(
					`https://rickandmortyapi.com/api/character/${getIdFromUrl(this.item.residents)}`
				);

				Array.isArray(list['data'])
					? (this.residents = list['data'])
					: this.residents.push(list['data']);
			} catch (e) {
				throw new Error(e);
			}
		},
	},
};
</script>
