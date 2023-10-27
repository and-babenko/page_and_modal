<template>
  <article
    class="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-bluegray bg-opacity-75 pb-8 pl-6 pr-6 pt-12 text-white md:pl-12 md:pr-12"
  >
    <img
      src="~/assets/images/home/bg-type-2.png"
      class="undraggable absolute top-0 z-[0] flex h-full w-full"
    />
    <h2
      class="z-1 relative text-center font-[InterBold] text-[28px] font-bold leading-[44px]"
    >
      <span
        v-if="asset === 'index' || asset === 'ethereum' || asset === 'polygon'"
      >
        Buy Crypto
      </span>
      <span v-if="asset === 'kadena'">Buy KDA</span>
    </h2>

    <p
      class="z-1 relative mx-auto mt-2 w-full text-center font-[InterMedium] text-base font-medium leading-7 opacity-75 lg:w-4/5"
    >
      <span
        v-if="asset === 'index' || asset === 'ethereum' || asset === 'polygon'"
      >
        With Koala Wallet, purchasing crypto has never been easier. Stock up on
        your favorite coins and tokens directly in-app!
      </span>
      <span v-if="asset === 'kadena'">
        With Koala Wallet, purchasing crypto has never been easier. Stock up on
        KDA directly in-app, without leaving your wallet!
      </span>
    </p>

    <div class="z-1 relative my-auto mr-8 lg:mr-12 lg:mt-10">
      <img v-if="asset === 'index'" src="~/assets/images/home/card-buy-1.png" />
      <img
        v-if="asset === 'kadena'"
        src="~/assets/images/home/card-buy-2.png"
      />
      <img
        v-if="asset === 'ethereum'"
        src="~/assets/images/home/card-buy-3.png"
      />
      <img
        v-if="asset === 'polygon'"
        src="~/assets/images/home/card-buy-4.png"
      />
    </div>
  </article>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(["asset"]);
</script>
