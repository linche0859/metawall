<script setup>
import { ref } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  sort: {
    type: String,
    default: 'desc'
  }
})
const emit = defineEmits(['change-sort', 'change-keyword'])
const keyword = ref('')

/**
 * 切換排序事件
 * @param {object} e
 */
const changeSortHandler = (e) => {
  emit('change-sort', e.target.value)
}
</script>

<template>
  <div class="lg:flex lg:space-x-3">
    <div class="relative mb-[6px] lg:mb-0 lg:w-[29.26%] lg:flex-shrink-0">
      <select
        :value="props.sort"
        class="block w-full appearance-none border-2 border-black-100 bg-white py-3 pl-4 pr-[28px] font-azeret leading-[22px] text-black-100"
        @change="changeSortHandler"
      >
        <option value="" disabled>請選擇</option>
        <option value="desc" selected>最新貼文</option>
        <option value="asc" selected>貼文發佈時間</option>
      </select>
      <i
        class="fa-solid fa-angle-down absolute right-4 top-1/2 -translate-y-1/2 text-black-100"
      ></i>
    </div>
    <div class="flex lg:flex-grow">
      <input
        v-model="keyword"
        @keyup.enter="emit('change-keyword', keyword)"
        type="text"
        class="flex-grow rounded-none border-y-2 border-l-2 border-black-100 py-3 px-4 font-azeret leading-[22px] text-black-100"
        placeholder="搜尋貼文"
      />
      <Button
        use-icon
        :loading="props.loading"
        class="w-[46px] flex-shrink-0 border-2 border-black-100 bg-primary text-xl text-white"
        @click="emit('change-keyword', keyword)"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </Button>
    </div>
  </div>
</template>
