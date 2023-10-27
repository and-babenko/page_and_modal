<template>
  <article
    class="relative z-10 flex flex-col items-center justify-start overflow-hidden rounded-3xl bg-bluegray bg-opacity-75 px-6 pb-8 pt-12 text-white md:pl-12 md:pr-12"
  >
    <img
      src="~/assets/images/home/bg-type-6.png"
      class="undraggable absolute top-0 z-[0] flex h-full w-full"
    />
    <div>
      <h2
        class="z-1 relative text-center font-[InterBold] text-[28px] font-bold leading-[44px]"
      >
        Swap in Seconds
      </h2>
      <p
        class="z-1 relative mt-2 w-full max-w-[390px] text-center font-[InterMedium] text-base font-medium leading-7 opacity-75"
      >
        <span v-if="asset === 'index'">
          Swap between all your favorite crypto assets and more!
        </span>
        <span v-if="asset === 'kadena'">
          Swap between all your favorite Kadena assets and more!
        </span>
      </p>
    </div>
    <div
      v-if="asset === 'index'"
      class="z-1 relative mt-[30px] md:mt-[70px] md:max-w-[380px]"
    >
      <img src="~/assets/images/home/card-swap-1.png" class="w-full" />
    </div>

    <div
      v-if="asset === 'kadena'"
      class="z-1 relative mt-[30px] w-full md:mt-[80px] md:max-w-[360px]"
    >
      <div
        class="swap-blue-gra absolute bottom-0 h-[149px] w-full rounded-lg md:h-[168px]"
      />
      <img src="~/assets/images/home/card-swap-2.png" class="w-full" />
    </div>
  </article>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(["asset"]);
</script>

<style scoped>
.swap-blue-gra {
  background: linear-gradient(
    180.91deg,
    rgba(59, 59, 176, 0) 0.78%,
    #3b3bb0 99.22%
  );
}
</style>
