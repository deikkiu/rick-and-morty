<template>
	<Header />

	<main class="mt-10">
		<div class="container">
			<div>
				<img
					class="w-16 h-16"
					src="@/assets/icons/episode-w.svg"
					alt="Episode"
				/>

				<h1 class="mt-4 text-4xl font-bold text-white">{{ item.name }}</h1>

				<div class="mt-4 flex flex-row items-center gap-x-2">
					<img class="w-6 h-6" src="@/assets/icons/sesson.svg" alt="Session" />
					<p class="text-base text-white">{{ item.episode }}</p>
				</div>

				<div class="mt-2 flex flex-row items-center gap-x-2">
					<img class="w-6 h-6" src="@/assets/icons/date.svg" alt="Date" />
					<p class="text-base text-white">{{ item.air_date }}</p>
				</div>
			</div>

			<div class="mt-10">
				<Title text="Characters" />

				<div class="grid grid-cols-5 gap-4 mt-6">
					<CharacterCard
						v-for="character in characters"
						:key="character['name']"
						:item="character"
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
			characters: null,
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
		this.getEpisodeById(this.id);
	},
	methods: {
		async getEpisodeById(id) {
			try {
				const data = await axios.get(
					`https://rickandmortyapi.com/api/episode/${id}`
				);
				this.item = data.data;

				// characters
				const list = await axios.get(
					`https://rickandmortyapi.com/api/character/${getIdFromUrl(this.item.characters)}`
				);

				Array.isArray(list['data'])
					? (this.characters = list['data'])
					: this.characters.push(list['data']);
			} catch (e) {
				throw new Error(e);
			}
		},
	},
};
</script>
