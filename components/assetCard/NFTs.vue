<template>
  <div
    class="relative z-10 flex flex-col items-center overflow-hidden rounded-3xl bg-bluegray bg-opacity-75 px-6 pb-8 pt-12 text-white md:pl-12 md:pr-12"
  >
    <img
      src="~/assets/images/home/bg-type-4.png"
      class="undraggable absolute top-0 z-[0] flex h-full w-full"
    />
    <div>
      <h2
        class="z-1 relative text-center font-[InterBold] text-[28px] font-bold leading-[44px]"
      >
        <span v-if="asset === 'index'">NFTs</span>
        <span v-if="asset === 'kadena'">NFT Support </span>
      </h2>
      <p
        class="z-1 relative mx-auto mt-2 w-full text-center font-[InterMedium] text-base font-medium leading-7 opacity-75 lg:w-5/6"
      >
        <span v-if="asset === 'index'"
          >Share, store, and manage your precious crypto collectibles in our NFT
          Jungle.</span
        >
        <span v-if="asset === 'kadena'"
          >Share, store, and manage your precious Kadena collectibles in our NFT
          Jungle.</span
        >
      </p>
    </div>
    <div
      class="z-1 relative mb-4 mt-8 flex max-w-[300px] flex-[0.7] justify-center md:mb-14 md:max-w-[360px]"
    >
      <img
        v-if="asset === 'index'"
        src="~/assets/images/home/card-nfts-1.png"
        class="w-full"
      />
      <img
        v-if="asset === 'kadena'"
        src="~/assets/images/home/card-nfts-2.png"
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(["asset"]);
</script>
