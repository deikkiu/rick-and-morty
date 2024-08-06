<template>
  <div class="sm:mt-8 mmm:mt-4 flex flex-row items-center justify-center gap-4">
    <button
      @click="action(prev)"
      :disabled="!prev"
      class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-cardHoverBg active:bg-cardHoverBg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        ></path>
      </svg>
      Prev
    </button>
    <div class="flex items-center gap-2"></div>
    <button
      @click="action(next)"
      :disabled="!next"
      class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-cardHoverBg active:bg-cardHoverBg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Next
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    action: Function,
    next: String ?? null,
    prev: String ?? null,
  },
};
</script>
