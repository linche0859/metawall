<script setup>
import { ref } from 'vue'

const isFocus = ref(false)
</script>

<template>
  <div class="relative">
    <button
      class="block w-10 rounded-full leading-10 text-black-100 hover:bg-secondary"
      :class="{ 'bg-secondary': isFocus }"
      @click="isFocus = true"
      @focus="isFocus = true"
      @blur="isFocus = false"
    >
      <i class="fas fa-ellipsis-h"></i>
    </button>
    <div v-show="isFocus" class="absolute right-0 top-[calc(100%+8px)] z-[1]">
      <slot></slot>
    </div>
  </div>
</template>
