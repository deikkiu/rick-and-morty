import { createMemoryHistory, createRouter } from 'vue-router';

import {
	HomePage,
	EpisodeListPage,
	LocationListPage,
	CharacterPage,
	EpisodePage,
	LocationPage,
} from '@/pages/index';

export default createRouter({
	history: createMemoryHistory(),
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/episodes', component: EpisodeListPage },
		{ path: '/locations', component: LocationListPage },
		{ path: '/character', component: CharacterPage },
		{ path: '/episode', component: EpisodePage },
		{ path: '/location', component: LocationPage },
	],
});
