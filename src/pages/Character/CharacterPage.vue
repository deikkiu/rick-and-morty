<template>
	<Header />

	<main class="mt-10">
		<div class="container">
			<div class="flex flex-row gap-x-16">
				<img
					class="w-96 h-auto rounded-2xl"
					:src="item.image"
					:alt="item.name"
				/>

				<div class="mt-2">
					<h1 class="text-5xl font-bold text-white">{{ item.name }}</h1>
					<h2 class="mt-4 text-xl text-white">
						Участвовал в {{ item.episode.length }} серии
					</h2>

					<InfoCard :item="item" type="inner" />
				</div>
			</div>
		</div>
	</main>

	<Footer />
</template>

<script>
import axios from 'axios';
import { Header, Footer, InfoCard } from '@/components/index';

import { getIdFromUrl } from '@/shared/lib/helpers';

export default {
	data() {
		return {
			item: null,
			episodesUrl: null,
			originUrl: null,
			locationUrl: null,
		};
	},
	props: ['id'],
	components: {
		Header,
		Footer,
		InfoCard,
	},
	async created() {
		try {
			const { data } = await axios.get(
				`https://rickandmortyapi.com/api/character/${this.id}`
			);
			this.item = data;
			this.episodesUrl = `https://rickandmortyapi.com/api/episode/${getIdFromUrl(this.item.episode).join(',')}`;
			this.originUrl = `/location/${getIdFromUrl(this.item.originUrl.url).join(',')}`;
			this.locationUrl = `/location/${getIdFromUrl(this.item.location.url).join(',')}`;
		} catch (e) {
			throw new Error(e);
		}
	},
};
</script>
