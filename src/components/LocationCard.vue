<template>
  <router-link :to="'/location/' + item.id">
    <div class="card hover:bg-cardHoverBg">
      <img
        class="w-full h-14"
        :src="
          item.type === 'Planet'
            ? '/src/assets/icons/planet.svg'
            : '/src/assets/icons/location.svg'
        "
        :alt="item.name"
      />
      <p class="mt-3 text-base text-center text-white">{{ item.type }}</p>
      <h3 class="text-base text-center font-bold text-blue">{{ item.name }}</h3>
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
