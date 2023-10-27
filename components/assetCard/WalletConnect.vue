<template>
  <article
    class="relative z-0 flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-bluegray bg-opacity-75 pb-8 pl-6 pr-6 pt-12 text-white md:pl-12 md:pr-12"
  >
    <img
      src="~~/assets/images/home/bg-type-5.png"
      class="undraggable absolute left-0 top-0 h-full w-full"
    />
    <div>
      <h2
        class="z-1 relative text-center font-[InterBold] text-[28px] font-bold leading-[44px]"
      >
        <span v-if="asset === 'index'">WalletConnect V2</span>
        <span v-if="asset === 'kadena'">WalletConnect v2 Support </span>
      </h2>
      <p
        class="relative z-20 mx-auto mt-2 w-full text-center font-[InterMedium] text-base font-medium leading-7 opacity-75 lg:w-5/6"
      >
        <span v-if="asset === 'index'">
          Explore and interact with your favorite blockchain dApps securely
          while connected to your Koala Wallet.</span
        >
        <span v-if="asset === 'kadena'">
          Explore and interact with your favorite Kadena dApps securely while
          connected to your Koala Wallet.
        </span>
      </p>
    </div>
    <div class="max-w-[278px]">
      <img
        v-if="asset === 'index'"
        src="~/assets/images/home/card-walletconnect-1.png"
        class="relative bottom-[-35px] z-[1] w-full"
      />
      <img
        v-if="asset === 'kadena'"
        src="~/assets/images/home/card-walletconnect-2.svg"
        class="relative bottom-[-35px] z-[1] w-full"
      />
    </div>
  </article>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(["asset"]);
</script>
