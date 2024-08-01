import { defineStore } from 'pinia';

export const useCharactersPageStore = defineStore('character', {
	state: () => ({ page: 0 }),
	getters: {
		getCharactersPage: (state) => state.page,
	},
	actions: {
		incrementCharactersPage() {
			this.page++;
		},
		decrementCharactersPage() {
			this.page--;
		},
	},
});
