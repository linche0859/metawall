<script setup>
import { ref } from 'vue'
import { getTracks } from '@/apis/track'
import { dayFormat, dayDiff } from '@/plugins/day'
import EmptyPostCard from '@/components/cards/EmptyPostCard.vue'

const loading = ref(false)
const tracks = ref([])

/**
 * 設置追蹤名單
 */
const setTracks = async () => {
  loading.value = true
  const { data } = await getTracks()
  tracks.value = data
  loading.value = false
}

setTracks()
</script>

<template>
  <h2
    class="relative isolate after:absolute after:right-1 after:top-1 after:z-[-1] after:h-full after:w-full after:border-2 after:border-black-100 after:content-['']"
  >
    <div
      class="mb-8 border-2 border-black-100 bg-white py-[18px] text-center font-azeret text-xl font-bold text-black-100"
    >
      追蹤名單
    </div>
  </h2>
  <empty-post-card v-if="loading">載入中...</empty-post-card>
  <template v-else>
    <ul v-if="tracks.length" class="space-y-4">
      <li
        v-for="item in tracks"
        :key="item._id"
        class="flex items-center rounded-lg border-2 border-black-100 py-[18px] px-4 shadow-100"
      >
        <img
          v-img-avatar-fallback
          :src="item.tracking.avatar"
          alt="avatar"
          class="mr-4 h-10 w-10 flex-shrink-0 rounded-full"
        />
        <div class="flex-grow">
          <router-link
            :to="{ name: 'User', params: { userId: item.tracking._id } }"
            class="font-bold text-black-100 hover:text-primary hover:underline"
            >{{ item.tracking.name }}</router-link
          >
          <div class="text-sm text-gray-300">
            追蹤時間：{{ dayFormat(item.createdAt) }}
          </div>
        </div>
        <div class="self-end text-sm text-black-100">
          您已追蹤 {{ dayDiff(item.createdAt) }}！
        </div>
      </li>
    </ul>
    <empty-post-card v-else>目前尚無追蹤名單</empty-post-card>
  </template>
</template>
