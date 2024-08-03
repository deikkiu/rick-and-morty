<template>
	<Header />

	<main class="mt-10">
		<div class="container">
			<div>
				<Title text="Episodes" />

				<div class="grid grid-cols-5 gap-4 mt-6">
					{{ list }}
				</div>
			</div>
		</div>
	</main>

	<Footer />
</template>

<script>
import axios from 'axios';

import { Header, Footer, Menu } from '@/components/index';
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
