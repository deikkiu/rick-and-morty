<template>
	<Header />

	<main class="mm:mt-10 mmm:mt-6">
		<div class="container">
			<div>
				<Title text="Episodes" />

				<div
					class="grid mmm:grid-cols-1 mm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6"
				>
					<EpisodeCard v-for="item in list" :key="item['name']" :item="item" />
				</div>
			</div>
		</div>
	</main>

	<Footer />
</template>

<script>
import axios from 'axios';

import { Header, Footer, Menu, EpisodeCard } from '@/components/index';
import { Title } from '@/shared/ui/index';

export default {
	data() {
		return {
			list: [],
			pages: null,
			nextPage: null,
			prevPage: null,
		};
	},
	components: {
		Header,
		Footer,
		Menu,
		EpisodeCard,
		Title,
	},
	created() {
		this.getEpisodesByPage('https://rickandmortyapi.com/api/episode');
	},
	methods: {
		async getEpisodesByPage(url) {
			try {
				const { data } = await axios.get(url);
				this.list = data.results;
				this.pages = data.pages;
				this.nextPage = data.next;
				this.prevPage = data.prev;
			} catch (e) {
				throw new Error(e);
			}
		},
	},
};
</script>
