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
						Participated in {{ item.episode.length }} episodes
					</h2>

					<InfoCard :item="item" type="inner" />

					<div class="mt-6">
						<router-link
							v-if="item.origin.name !== 'unknown'"
							:to="'/location/' + originId"
						>
							<div
								class="w-fit h-auto px-4 pb-4 pt-3 bg-cardBg rounded-xl hover:bg-cardHoverBg"
							>
								<img
									class="w-full h-12"
									src="/src/assets/icons/planet.svg"
									alt="Planet"
								/>
								<h3 class="mt-2 text-base text-center font-bold text-blue">
									{{ item.origin.name }}
								</h3>
							</div>
						</router-link>
					</div>
				</div>
			</div>

			<div class="mt-10">
				<Title text="Episodes" />

				<div class="grid grid-cols-5 gap-4 mt-6">
					<EpisodeCard
						v-for="episode in episodes"
						:key="episode['name']"
						:item="episode"
					/>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</template>

<script>
import axios from 'axios';
import {
	Header,
	Footer,
	InfoCard,
	EpisodeCard,
	LocationCard,
} from '@/components/index';
import { Title } from '@/shared/ui';

import { getIdFromUrl } from '@/shared/lib/helpers';

export default {
	data() {
		return {
			item: null,
			episodes: [],
			originId: null,
		};
	},
	props: ['id'],
	components: {
		Header,
		Footer,
		InfoCard,
		Title,
		EpisodeCard,
		LocationCard,
	},
	created() {
		this.getCharacterById(this.id);
	},
	methods: {
		async getCharacterById(id) {
			try {
				const data = await axios.get(
					`https://rickandmortyapi.com/api/character/${id}`
				);
				this.item = data.data;

				// episodes
				const list = await axios.get(
					`https://rickandmortyapi.com/api/episode/${getIdFromUrl(this.item.episode)}`
				);

				Array.isArray(list['data'])
					? (this.episodes = list['data'])
					: this.episodes.push(list['data']);

				// location id
				this.originId = getIdFromUrl(this.item.origin.url);
			} catch (e) {
				throw new Error(e);
			}
		},
	},
};
</script>
