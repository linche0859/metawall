<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <h2 class="mb-10 text-9xl tracking-wide">404</h2>
    <router-link
      :to="{ name: 'Index' }"
      class="rounded-lg border-2 border-black-100 bg-primary px-10 font-azeret font-bold leading-[50px] text-white shadow-200"
      >回首頁</router-link
    >
  </div>
</template>
