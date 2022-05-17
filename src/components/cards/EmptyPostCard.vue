<template>
  <div class="rounded-lg border-2 border-black-100 shadow-100">
    <header
      class="flex space-x-[6px] border-b-2 border-black-100 py-[19px] px-4"
    >
      <div
        class="h-[9px] w-[9px] rounded-full border border-gray-400 bg-[#DE4B63]"
      ></div>
      <div
        class="h-[9px] w-[9px] rounded-full border border-gray-400 bg-[#FAA722]"
      ></div>
      <div
        class="h-[9px] w-[9px] rounded-full border border-gray-400 bg-[#83C51D]"
      ></div>
    </header>
    <p class="py-8 text-center text-gray-300">
      <slot>目前尚無動態，新增一則貼文吧！</slot>
    </p>
  </div>
</template>
