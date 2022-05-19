<script setup>
import { ref } from 'vue'
import { postOnePost } from '@/apis/post'
import { postImage } from '@/apis/file'
import { getErrorContent } from '@/utils/response'
import swal from '@/plugins/swal'

const loading = ref(false)
const content = ref('')
const imageUrl = ref('')
const error = ref('')
const postFile = ref(null)
const inputFile = ref(null)

/**
 * 變更檔案事件
 * @param {file} e File instance
 */
const changeFileHandler = (e) => {
  const file = e.target.files.item(0)
  error.value = ''
  if (!['image/jpeg', 'image/png'].includes(file.type)) {
    error.value = '檔案格式錯誤，僅限上傳 jpg、jpeg 與 png 格式'
    inputFile.value.value = ''
    return
  }
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    imageUrl.value = reader.result
    postFile.value = file
  }
}
/**
 * 上傳貼文圖片
 */
const uploadImage = async () => {
  try {
    const formData = new FormData()
    formData.append('image', postFile.value)
    const { data } = await postImage(formData)
    return data
  } catch (e) {
    return Promise.reject(e)
  }
}
/**
 * 送出貼文
 */
const submit = async () => {
  loading.value = true
  try {
    let link = ''
    if (postFile.value) {
      link = await uploadImage()
    }
    const payload = { content: content.value }
    if (link) payload.image = link

    await postOnePost(payload)
    content.value = ''
    imageUrl.value = ''
    error.value = ''
    inputFile.value.value = ''
    postFile.value = null
    swal({
      title: '新增貼文成功'
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
    class="rounded-lg border-2 border-black-100 p-8 shadow-100"
    @submit.prevent
  >
    <label for="content" class="mb-1 inline-block text-black-100"
      >貼文內容</label
    >
    <textarea
      v-model.trim="content"
      class="block min-h-[169px] w-full border-2 border-black-100 py-3 px-4"
      placeholder="輸入您的貼文內容"
    ></textarea>
    <!-- 暫時隱藏，等 imgur 實作 -->
    <label
      class="relative mt-4 inline-block cursor-pointer rounded bg-black-100 py-1 px-8 text-white"
    >
      <input
        ref="inputFile"
        type="file"
        class="sr-only"
        accept="image/*"
        @change="changeFileHandler"
      />
      上傳圖片
    </label>
    <img
      v-show="imageUrl"
      :src="imageUrl"
      alt="post image"
      class="mt-4 rounded-lg object-cover"
    />
    <p
      v-if="error"
      class="mt-8 text-center text-sm text-red-100"
      data-id="error"
    >
      <!-- 圖片檔案過大，僅限 1mb 以下檔案<br />圖片格式錯誤，僅限 JPG、PNG 圖片 -->
      {{ error }}
    </p>
    <Button
      class="mx-auto block w-[68.86%] rounded-lg border-2 border-black-100 bg-gray-200 font-azeret font-bold leading-[50px] text-black-100 hover:bg-yellow-100 hover:shadow-200"
      :class="error ? 'mt-4' : 'mt-8'"
      :loading="loading"
      @click="submit"
      >送出貼文</Button
    >
  </form>
</template>
