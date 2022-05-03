<script setup>
import { ref } from 'vue'
import { postOnePost } from '@/apis/post'
import { getErrorContent } from '@/utils/response'
import swal from '@/plugins/swal'

const loading = ref(false)
const content = ref('')
const image = ref('')
const error = ref('')

/**
 * 驗證圖片格式
 * @returns {boolean}
 */
const validateImage = () => {
  if (image.value.length && !image.value.startsWith('https://')) {
    error.value = '圖片格式錯誤，僅限 JPG、PNG 圖片'
    return false
  }
  return true
}

/**
 * 送出貼文
 */
const submit = async () => {
  try {
    loading.value = true
    if (!validateImage()) return
    await postOnePost({
      content: content.value,
      image: image.value
    })
    error.value = ''
    content.value = ''
    image.value = ''
    swal({
      title: '新增貼文成功',
      icon: 'success',
      confirmButtonText: '確定',
      timer: 1500
    })
  } catch (e) {
    const message = getErrorContent(e.message)
    error.value = message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <h2
    class="relative isolate mb-4 after:absolute after:right-1 after:top-1 after:z-[-1] after:h-full after:w-full after:border-2 after:border-black-100 after:content-['']"
  >
    <div
      class="border-2 border-black-100 bg-white py-[18px] text-center font-azeret text-xl font-bold text-black-100"
    >
      張貼動態
    </div>
  </h2>
  <form
    method="post"
    class="rounded-lg border-2 border-black-100 p-8 shadow-card"
    @submit.prevent
  >
    <label for="content" class="mb-1 inline-block text-black-100"
      >貼文內容</label
    >
    <textarea
      v-model="content"
      class="block min-h-[169px] w-full border-2 border-black-100 py-3 px-4"
      placeholder="輸入您的貼文內容"
    ></textarea>
    <input
      v-model="image"
      type="text"
      class="mt-4 w-full rounded-none border-2 border-black-100 py-3 px-4 font-azeret leading-[22px] text-black-100"
      placeholder="圖片網址 https://..."
    />
    <!-- 暫時隱藏，等 imgur 實作 -->
    <template v-if="false">
      <label
        class="relative mt-4 inline-block rounded bg-black-100 py-1 px-8 text-white"
      >
        <input type="file" class="sr-only" />
        上傳圖片
      </label>
      <img src="" alt="post photo" class="mt-4" />
    </template>
    <p
      v-if="error"
      class="mt-8 text-center text-sm text-red-100"
      data-id="error"
    >
      <!-- 圖片檔案過大，僅限 1mb 以下檔案<br />圖片格式錯誤，僅限 JPG、PNG 圖片 -->
      {{ error }}
    </p>
    <Button
      class="mx-auto block w-[68.86%] rounded-lg border-2 border-black-100 bg-gray-200 font-azeret font-bold leading-[50px] text-black-100 hover:bg-yellow-100 hover:shadow-btn"
      :class="error ? 'mt-4' : 'mt-8'"
      :loading="loading"
      @click="submit"
      >送出貼文</Button
    >
  </form>
</template>
