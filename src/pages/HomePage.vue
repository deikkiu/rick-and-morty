<template>
  <Header />

  <main class="mm:mt-10 mmm:mt-6">
    <div class="container">
      <div>
        <Title text="Characters" />

        <div
          class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mm:grid-cols-2 gap-4 mm:mt-6 mmm:mt-4"
        >
          <CharacterCard v-for="item in list" :key="item.id" :item="item" />
        </div>
      </div>

      <div>
        <Pagination
          :action="getCharactersByPage"
          :next="nextPage"
          :prev="prevPage"
        />
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
  Menu,
  CharacterCard,
  Pagination,
} from '@/components/index';
import { Title } from '@/shared/ui/index';

export default {
  data() {
    return {
      list: [],
      nextPage: null,
      prevPage: null,
    };
  },
  components: {
    Header,
    Footer,
    Menu,
    CharacterCard,
    Pagination,
    Title,
  },
  created() {
    this.getCharactersByPage('https://rickandmortyapi.com/api/character');
  },
  methods: {
    async getCharactersByPage(url) {
      try {
        const { data } = await axios.get(url);
        this.list = data.results;
        this.nextPage = data.info.next;
        this.prevPage = data.info.prev;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};
</script>
