<template>
  <footer
    class="mx-auto mt-24 w-full pb-5 pl-5 pr-5 text-white md:max-w-[1440px] xl:pl-[120px] xl:pr-[120px]"
  >
    <div class="w-full rounded-3xl bg-lightblue p-6 pb-12 pt-12 md:p-12">
      <nav
        class="flex w-full flex-col items-center justify-between gap-6 md:flex-row"
      >
        <NuxtLink to="/">
          <img
            src="~/assets/images/logos/koala-name-logo.svg"
            class="h-5 md:h-8"
          />
        </NuxtLink>
        <div class="flex flex-row items-center gap-5 sm:gap-7 md:gap-12">
          <NuxtLink to="/">
            <img src="~/assets/icons/logo-instagram.svg" />
          </NuxtLink>
          <NuxtLink to="/">
            <img src="~/assets/icons/logo-tiktok.svg" />
          </NuxtLink>
          <NuxtLink to="/">
            <img src="~/assets/icons/logo-youtube.svg" />
          </NuxtLink>
          <a href="" target="_blank" class="h-[24px] w-[24px] text-[0px]">
            <span class="twitter-svg" />
          </a>
          <NuxtLink to="/">
            <img src="~/assets/icons/logo-telegram.svg" />
          </NuxtLink>
          <NuxtLink to="/">
            <img src="~/assets/icons/icon-discord.svg" />
          </NuxtLink>
          <NuxtLink to="/">
            <img
              src="~/assets/icons/logo-medium.svg"
              class="max-h-[24px] w-full max-w-[24px]"
            />
          </NuxtLink>
        </div>
      </nav>

      <div class="mt-6 h-[1px] w-full bg-white opacity-[0.15] md:mt-12" />

      <div
        class="mt-6 flex w-full flex-col-reverse items-end justify-between gap-3 md:mt-12 md:flex-row"
      >
        <nav
          class="flex flex-[1] flex-col items-center justify-end gap-2 md:gap-4 min-[900px]:flex-row"
        >
          <UiAssetsSelector />
          <NuxtLink to="/">
            <p class="text-sm font-normal leading-5 hover:underline">
              Media Kit
            </p>
          </NuxtLink>
          <NuxtLink to="/">
            <p class="text-sm font-normal leading-5 hover:underline">
              Privacy Policy
            </p>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>
