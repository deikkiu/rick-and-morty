import { createWebHistory, createRouter } from 'vue-router';

import {
  HomePage,
  EpisodeListPage,
  LocationListPage,
  CharacterPage,
  EpisodePage,
  LocationPage,
} from '@/pages/index';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/episodes', component: EpisodeListPage },
    { path: '/locations', component: LocationListPage },
    { path: '/character/:id', component: CharacterPage, props: true },
    { path: '/episode/:id', component: EpisodePage, props: true },
    { path: '/location/:id', component: LocationPage, props: true },
    { path: '/:pathMatch(.*)*', component: HomePage },
  ],
});
