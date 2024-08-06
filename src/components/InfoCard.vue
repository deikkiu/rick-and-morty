<template>
  <div class="mt-4">
    <div
      v-if="item.status !== 'unknown'"
      class="flex flex-row items-center gap-x-1"
    >
      <template v-if="item.status === 'Alive'">
        <img
          class="w-4 h-auto"
          src="@/assets/icons/alive.svg"
          :alt="item.status"
        />
      </template>
      <template v-if="item.status === 'Dead'">
        <img
          class="w-4 h-auto"
          src="@/assets/icons/dead.svg"
          :alt="item.status"
        />
      </template>

      <p class="text-base text-white truncate capitalize">
        {{ item.status }}
      </p>
    </div>

    <div class="flex flex-row items-center gap-x-1">
      <img
        class="w-4 h-auto"
        src="@/assets/icons/type.svg"
        :alt="item.species"
      />

      <p class="text-base text-white truncate capitalize">
        {{ item.species }}
      </p>
    </div>

    <div
      v-if="item.gender !== 'unknown'"
      class="flex flex-row items-center gap-x-1"
    >
      <img
        class="w-4 h-auto"
        src="@/assets/icons/gender.svg"
        :alt="item.gender"
      />

      <p class="text-base text-white truncate capitalize">
        {{ item.gender }}
      </p>
    </div>

    <div
      v-if="item.origin.name !== 'unknown' && type !== 'inner'"
      class="flex flex-row items-center gap-x-1"
    >
      <img
        class="w-4 h-auto"
        src="@/assets/icons/location.svg"
        :alt="item.gender"
      />

      <p class="text-base text-white truncate capitalize">
        {{ item.origin.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    type: String,
  },
};
</script>
