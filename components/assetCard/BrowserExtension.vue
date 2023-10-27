<template>
  <article
    class="relative z-10 flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-bluegray bg-opacity-75 text-white"
  >
    <img
      src="~~/assets/images/home/bg-type-1.png"
      class="undraggable absolute left-0 top-0 z-[-1] h-full w-full"
      alt="extensions-bg"
    />
    <h2
      class="relative z-20 pt-12 text-center font-[InterBold] text-[28px] font-bold leading-[44px]"
    >
      Browser Extension
    </h2>
    <p
      class="relative z-20 mt-3 w-full pl-6 pr-6 text-center font-[InterMedium] text-base font-medium leading-7 opacity-75 md:pl-12 md:pr-12 lg:w-4/5"
    >
      <span v-if="asset === 'kadena' || asset === 'index'">
        From browser extension to mobile, Koala Wallet provides a seamless
        cross-platform crypto wallet experience for your on-chain activities.
      </span>
      <span
        v-if="asset === 'ethereum' || asset === 'quai' || asset === 'polygon'"
      >
        From browser extension to mobile, Koala Wallet provides a seamless
        crypto wallet experience cross-platform for your on-chain activities.
      </span>
    </p>
    <div class="flex w-full items-start justify-between gap-14 pt-10">
      <div class="mt-auto">
        <img
          v-if="
            asset === 'index' ||
            asset === 'ethereum' ||
            asset === 'quai' ||
            asset === 'polygon'
          "
          src="~/assets/images/home/card-extensions-1.png"
          alt="browser-extensions"
        />
        <img
          v-if="asset === 'kadena'"
          src="~/assets/images/home/card-extensions-2.png"
          alt="browser-extensions"
        />
      </div>

      <div class="relative right-[0] flex flex-col gap-4">
        <div
          class="iconDarkBox flex h-[48px] w-[48px] items-center justify-center rounded-l-md lg:h-[64px] lg:w-[64px]"
        >
          <img src="~/assets/icons/logo-edge.png" class="h-3/5" />
        </div>

        <div
          class="iconDarkBox flex h-[48px] w-[48px] items-center justify-center rounded-l-md lg:h-[64px] lg:w-[64px]"
        >
          <img src="~/assets/icons/logo-brave.png" class="h-3/5" />
        </div>

        <div
          class="iconDarkBox flex h-[48px] w-[48px] items-center justify-center rounded-l-md lg:h-[64px] lg:w-[64px]"
        >
          <img src="~/assets/icons/logo-chrome.png" class="h-2/3" />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(["asset"]);
</script>

<style scoped>
.iconDarkBox {
  background: linear-gradient(
    265deg,
    rgba(86, 70, 111, 0.69) 0%,
    rgba(28, 30, 53, 0.69) 100%
  );
  box-shadow: 2px 4px 5px 0px #00000045;
}
</style>
