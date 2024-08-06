<template>
  <Header />

  <main class="mt-10 mmm:mt-6">
    <div class="container">
      <div v-if="item">
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

      <div class="mt-10" v-if="characters && characters.length">
        <Title text="Characters" />

        <div
          class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mm:grid-cols-2 gap-4 mm:mt-6 mmm:mt-4"
        >
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
      characters: [],
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
        const response = await axios.get(
          `https://rickandmortyapi.com/api/episode/${id}`
        );
        this.item = response.data;

        // characters
        const charactersIds = this.item.characters
          .map((url) => getIdFromUrl(url))
          .join(',');
        const characterResponse = await axios.get(
          `https://rickandmortyapi.com/api/character/${charactersIds}`
        );

        this.characters = Array.isArray(characterResponse.data)
          ? characterResponse.data
          : [characterResponse.data];
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
