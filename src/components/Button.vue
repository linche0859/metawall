<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  // 只使用圖示做顯示
  useIcon: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    class="flex items-center justify-center"
    :class="{ 'cursor-not-allowed': props.loading }"
    :disabled="loading"
  >
    <svg
      class="h-5 w-5 animate-spin text-white"
      :class="[{ hidden: !loading }, { 'mr-3': !useIcon }]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
        data-darkreader-inline-stroke=""
        style="--darkreader-inline-stroke: currentColor"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        data-darkreader-inline-fill=""
        style="--darkreader-inline-fill: currentColor"
      ></path>
    </svg>
    <span :class="{ hidden: loading && useIcon }">
      <slot></slot>
    </span>
  </button>
</template>
