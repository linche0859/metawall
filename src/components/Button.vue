<script setup>
import Loader from '@/components/Loader.vue'

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
    <span :class="{ hidden: loading && useIcon }">
      <slot></slot>
    </span>
    <Loader :class="[{ hidden: !loading }, { 'ml-3': !useIcon }]" />
  </button>
</template>
