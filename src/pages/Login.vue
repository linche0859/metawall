<script setup></script>

<template>
  <main class="flex min-h-screen">
    <div
      class="m-auto flex w-full max-w-[869px] items-center border-2 border-black-100 bg-[#EFECE7] py-[70px] px-[48px]"
      style="box-shadow: -8px 8px 0px #00040029"
    >
      <img
        src="../assets/images/login/social-circle.png"
        alt="social circle"
        class="mr-[50px] flex-shrink-0"
      />
      <div class="min-w-[373px] flex-grow text-center">
        <h1 class="font-paytone text-[60px] leading-[84px] text-primary">
          MetaWall
        </h1>
        <p
          class="mb-[36px] font-helvetica text-2xl font-bold leading-[33px] text-black-100"
        >
          到元宇宙展開全新社交圈
        </p>
        <form action="/login" method="post">
          <input
            type="email"
            class="mb-4 block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 font-azeret leading-[19px] text-black-100"
            placeholder="Email"
          />
          <input
            type="password"
            class="mb-8 block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 font-azeret leading-[19px] text-black-100"
            placeholder="Password"
          />
          <p class="mb-4 hidden text-sm text-red-100" data-id="error">
            帳號或密碼錯誤，請重新輸入！
          </p>
          <button
            class="mb-4 block w-full rounded-lg border-2 border-black-100 bg-primary font-azeret font-bold leading-[50px] text-white shadow-btn"
            data-id="login"
          >
            登入
          </button>
          <a
            href="./register.html"
            class="font-azeret leading-[22px] text-black-100"
          >
            註冊帳號
          </a>
        </form>
      </div>
    </div>
  </main>
</template>
