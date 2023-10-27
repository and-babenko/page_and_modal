<template>
  <article
    class="relative z-10 flex flex-col items-center overflow-hidden rounded-3xl bg-bluegray bg-opacity-75 pb-8 pl-6 pr-6 pt-12 text-white md:pl-12 md:pr-12"
  >
    <img
      src="~/assets/images/home/bg-type-1.png"
      class="undraggable absolute top-0 z-[0] flex h-full w-full"
    />
    <h2
      class="z-1 relative text-center font-[InterBold] text-[28px] font-bold leading-[44px]"
    >
      Private & Secure
    </h2>
    <p
      class="z-1 relative mt-2 w-full text-center font-[InterMedium] text-base font-medium leading-7 opacity-75 lg:w-5/6"
    >
      <span
        v-if="asset === 'index' || asset === 'ethereum' || asset === 'kadena'"
      >
        Your Koala Wallet is non-custodial, this means you and only you have
        access to your funds and private keys.
      </span>
      <span v-if="asset === 'quai' || asset === 'polygon'">
        Your Koala Wallet is non-custodial - only you have access to your
        assets, accounts and data.
      </span>
    </p>
    <div class="z-1 relative mt-14 w-full">
      <img src="~/assets/images/home/card-private.png" class="w-full" />
    </div>
  </article>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(["asset"]);
</script>
