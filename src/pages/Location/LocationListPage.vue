<template>
  <Header />

  <main class="mm:mt-10 mmm:mt-6">
    <div class="container">
      <div>
        <Title text="Locations" />

        <div
          class="grid mmm:grid-cols-1 mm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6"
        >
          <LocationCard v-for="item in list" :key="item.id" :item="item" />
        </div>
      </div>

      <div>
        <Pagination
          :action="getLocationsByPage"
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
  LocationCard,
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
    LocationCard,
    Pagination,
    Title,
  },
  created() {
    this.getLocationsByPage('https://rickandmortyapi.com/api/location');
  },
  methods: {
    async getLocationsByPage(url) {
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
