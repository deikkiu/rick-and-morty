<template>
  <router-link :to="'/character/' + item.id">
    <div class="card hover:bg-cardHoverBg">
      <img
        class="w-full mm:h-48 mmm:h-56 rounded-lg"
        :src="item.image"
        :alt="item.name"
      />
      <h3 class="mt-4 text-base font-bold text-white">
        {{ item.name }}
      </h3>

      <InfoCard :item="item" type="default" />
    </div>
  </router-link>
</template>

<script>
import InfoCard from './InfoCard.vue';

export default {
  props: {
    item: Object,
  },
  components: {
    InfoCard,
  },
};
</script>
