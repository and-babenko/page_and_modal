<template>
  <article
    class="borderGrayGradientBig flex w-fit flex-col flex-wrap items-center rounded-3xl bg-[#333654] bg-opacity-[0.36] px-4 py-6 md:px-6"
  >
    <div class="flex flex-row flex-wrap items-center justify-center gap-3">
      <div class="flex gap-3">
        <NuxtLink to="/">
          <div
            class="iconBox borderGrayGradientSmall flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-xl"
          >
            <img src="~/assets/icons/logo-ios.svg" />
          </div>
        </NuxtLink>
        <NuxtLink to="/">
          <div
            class="iconBox borderGrayGradientSmall flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-xl"
          >
            <img src="~/assets/icons/logo-android.svg" />
          </div>
        </NuxtLink>
      </div>
      <div class="flex gap-3">
        <NuxtLink to="/">
          <div
            class="iconBox borderGrayGradientSmall flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-xl"
          >
            <img src="~/assets/icons/logo-chrome.png" class="h-3/5" />
          </div>
        </NuxtLink>
        <NuxtLink to="/">
          <div
            class="iconBox borderGrayGradientSmall flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-xl"
          >
            <img src="~/assets/icons/logo-brave.png" class="h-3/5" />
          </div>
        </NuxtLink>
        <NuxtLink to="/">
          <div
            class="iconBox borderGrayGradientSmall flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-xl"
          >
            <img src="~/assets/icons/logo-edge.png" class="h-3/5" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <h3
      class="mt-4 font-[Inter] text-[15px] font-normal leading-4 text-white opacity-75"
    >
      Available for
      <span class="font-[InterSemiBold] font-semibold"> Mobile and Web </span>
    </h3>
  </article>
</template>

<style scopped>
.borderGrayGradientBig,
.borderGrayGradientSmall {
  position: relative;
}
.borderGrayGradientBig::before,
.borderGrayGradientSmall::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid transparent;
  background: linear-gradient(rgba(86, 90, 133, 0.488), rgba(0, 0, 0, 0))
    border-box;
  mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}

.borderGrayGradientBig::before {
  border-radius: 1.5rem;
}

.borderGrayGradientSmall::before {
  border-radius: 12px;
}

.iconBox {
  background: linear-gradient(
      269.87deg,
      rgba(51, 54, 84, 0.69) 4.44%,
      rgba(42, 43, 63, 0.69) 84.9%
    ),
    linear-gradient(
      191.22deg,
      rgba(109, 113, 167, 0.27) 8.28%,
      rgba(0, 0, 0, 0) 161.63%
    );
}
</style>
