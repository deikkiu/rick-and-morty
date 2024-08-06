<template>
  <router-link :to="'/episode/' + item.id">
    <div class="card hover:bg-cardHoverBg">
      <div class="flex flex-row items-center gap-x-2">
        <img
          class="w-6 h-6"
          src="@/assets/icons/episode.svg"
          :alt="item.name"
        />

        <h3 class="font-bold text-base text-center text-blue truncate">
          {{ item.name }}
        </h3>
      </div>

      <p class="mt-2 text-sm text-white pr-2">{{ item.episode }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>
