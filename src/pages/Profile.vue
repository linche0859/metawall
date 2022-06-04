<script setup>
import { computed, ref } from 'vue'
import { user } from '@/compatibles/data'
import { patchProfile, patchPassword } from '@/apis/user'
import { postImage } from '@/apis/file'
import { getErrorContent } from '@/utils/response'
import swal from '@/plugins/swal'

const loading = ref(false)
const tab = ref('nickname')
const nicknameError = ref('')
const passwordError = ref('')
const tabs = ref([
  { id: 'nickname', title: '暱稱修改' },
  { id: 'password', title: '重設密碼' }
])
const genders = ref([
  { id: 'male', title: '男性' },
  { id: 'female', title: '女性' }
])
const nicknameForm = ref({
  avatar: '',
  name: '',
  gender: 'male',
  avatarFile: null
})
const passwordForm = ref({
  password: '',
  confirmPassword: ''
})
const inputFile = ref(null)

/**
 * 渲染的標籤列表
 * @returns {array}
 */
const renderTabs = computed(() => {
  if (user.value.thirdAuth)
    return tabs.value.filter((item) => item.id !== 'password')
  return tabs.value
})

nicknameForm.value.avatar = user.value.avatar
nicknameForm.value.name = user.value.name
nicknameForm.value.gender = user.value.gender

const changeAvatarHandler = (e) => {
  const file = e.target.files.item(0)
  nicknameError.value = ''
  if (!['image/jpeg', 'image/png'].includes(file.type)) {
    nicknameError.value = '檔案格式錯誤，僅限上傳 jpg、jpeg 與 png 格式'
    inputFile.value.value = ''
    return
  }
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    nicknameForm.value.avatar = reader.result
    nicknameForm.value.avatarFile = file
  }
}
/**
 * 上傳會員頭像
 */
const uploadAvatar = async () => {
  try {
    const formData = new FormData()
    formData.append('image', nicknameForm.value.avatarFile)
    const { data } = await postImage({
      params: { type: 'avatar' },
      payload: formData
    })
    return data
  } catch (e) {
    return Promise.reject(e)
  }
}
const submitProfileHandler = async () => {
  loading.value = true
  nicknameError.value = ''
  try {
    let link = ''
    if (nicknameForm.value.avatarFile) {
      link = await uploadAvatar()
    }
    const { name, gender } = nicknameForm.value
    const payload = { name, gender }
    if (link) payload.avatar = link

    await patchProfile(payload)
    swal({
      title: '更新成功'
    })
    if (link) user.value.avatar = link
    user.value.name = name
    user.value.gender = gender
    nicknameError.value = ''
    inputFile.value.value = ''
    nicknameForm.value.avatarFile = null
  } catch (e) {
    const message = getErrorContent(e.message)
    nicknameError.value = message
  } finally {
    loading.value = false
  }
}
const submitPasswordHandler = async () => {
  loading.value = true
  passwordError.value = ''
  try {
    const { password, confirmPassword } = passwordForm.value
    await patchPassword({ password, confirm_password: confirmPassword })
    swal({
      title: '更新成功'
    })
    passwordError.value = ''
    passwordForm.value.password = ''
    passwordForm.value.confirmPassword = ''
  } catch (e) {
    const message = getErrorContent(e.message)
    passwordError.value = message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <h2
    class="relative isolate after:absolute after:right-1 after:top-1 after:z-[-1] after:h-full after:w-full after:border-2 after:border-black-100 after:content-['']"
  >
    <div
      class="mb-8 border-2 border-black-100 bg-white py-[18px] text-center font-azeret text-xl font-bold text-black-100"
    >
      修改個人資料
    </div>
  </h2>
  <div class="flex px-4">
    <button
      v-for="item in renderTabs"
      :key="item.id"
      class="rounded-t-lg border-x-2 border-t-2 border-black-100 py-2 px-6"
      :class="item.id === tab ? 'bg-black-100 text-white' : 'text-black-100'"
      @click="tab = item.id"
    >
      {{ item.title }}
    </button>
  </div>
  <!-- 暱稱修改 -->
  <form
    v-show="tab === 'nickname'"
    method="post"
    class="flex flex-col items-center rounded-lg border-2 border-black-100 py-8 shadow-100"
    @submit.prevent
  >
    <img
      v-img-avatar-fallback
      :src="nicknameForm.avatar"
      alt="avatar"
      class="mb-4 h-[107px] w-[107px] rounded-full object-cover"
    />
    <label
      class="mb-11px relative cursor-pointer bg-black-100 py-1 px-6 text-white"
    >
      <input
        ref="inputFile"
        type="file"
        class="sr-only"
        accept="image/*"
        @change="changeAvatarHandler"
      />
      上傳大頭照
    </label>
    <div class="w-[60.6%]">
      <label for="nickname" class="mb-1 inline-block text-black-100"
        >暱稱</label
      >
      <input
        id="nickname"
        type="text"
        class="mb-4 w-full border-2 border-black-100 py-[14px] px-6 font-azeret leading-[22px] text-black-100"
        v-model.trim="nicknameForm.name"
      />
      <label for="male" class="mb-[6px] inline-block text-black-100"
        >性別</label
      >
      <ul class="mb-8 flex space-x-6">
        <li v-for="item in genders" :key="item.id">
          <label
            class="relative flex cursor-pointer items-center text-black-100"
          >
            <input
              v-model="nicknameForm.gender"
              type="radio"
              name="gender"
              class="peer sr-only"
              :id="item.id"
              :value="item.id"
              :checked="nicknameForm.gender === item.id"
            />
            <span
              class="relative mr-3 inline-block h-5 w-5 rounded-full border-2 border-black-100 before:absolute before:top-1/2 before:left-1/2 before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:content-[''] peer-checked:before:bg-black-100"
            ></span>
            {{ item.title }}
          </label>
        </li>
      </ul>
      <p v-if="nicknameError" class="mb-4 text-center text-sm text-red-100">
        <!-- 1.圖片寬高比必需為 1:1，請重新輸入 <br />
        2. 解析度寬度至少 300像素以上，請重新輸入 -->
        {{ nicknameError }}
      </p>
      <Button
        class="w-full rounded-lg border-2 border-black-100 bg-yellow-100 font-azeret font-bold leading-[50px] text-black-100 shadow-200 hover:bg-primary hover:text-white"
        :loading="loading"
        @click="submitProfileHandler"
      >
        送出更新
      </Button>
    </div>
  </form>
  <!-- 重設密碼 -->
  <form
    v-show="tab === 'password'"
    method="post"
    class="rounded-lg border-2 border-black-100 py-8 shadow-100"
    @submit.prevent
  >
    <div class="mx-auto max-w-[60.6%]">
      <label for="new-password" class="mb-1 inline-block text-black-100"
        >輸入新密碼</label
      >
      <input
        id="new-password"
        type="password"
        class="mb-4 w-full border-2 border-black-100 py-[14px] px-6 text-black-100"
        placeholder="請輸入新密碼"
        v-model="passwordForm.password"
      />
      <label for="confirm" class="mb-1 inline-block text-black-100"
        >輸入新密碼</label
      >
      <input
        id="confirm"
        type="password"
        class="mb-8 w-full border-2 border-black-100 py-[14px] px-6 text-black-100"
        placeholder="再次輸入新密碼"
        v-model="passwordForm.confirmPassword"
      />
      <p v-if="passwordError" class="mb-4 text-center text-sm text-red-100">
        {{ passwordError }}
      </p>
      <Button
        class="block w-full rounded-lg border-2 border-gray-100 bg-gray-200 font-azeret font-bold leading-[50px] text-white"
        :loading="loading"
        @click="submitPasswordHandler"
      >
        重設密碼
      </Button>
    </div>
  </form>
</template>
