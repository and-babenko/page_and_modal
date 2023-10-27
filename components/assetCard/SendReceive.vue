<template>
  <article
    class="relative z-10 flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-bluegray bg-opacity-75 pb-8 pl-6 pr-6 pt-12 text-white md:pl-12 md:pr-12"
  >
    <img
      v-if="asset === 'index' || asset === 'kadena'"
      src="~/assets/images/home/bg-type-3.png"
      class="undraggable absolute top-0 z-[0] flex h-full w-full"
    />
    <img
      v-if="asset === 'ethereum' || asset === 'quai' || asset === 'polygon'"
      src="~/assets/images/home/bg-type-2.png"
      class="undraggable absolute top-0 z-[0] flex h-full w-full"
    />
    <div>
      <h2
        class="z-1 relative text-center font-[InterBold] text-[28px] font-bold leading-[44px]"
      >
        Send & Receive
      </h2>
      <p
        class="z-1 relative mx-auto mt-2 w-full text-center font-[InterMedium] text-base font-medium leading-7 opacity-75 lg:w-5/6"
      >
        <span
          v-if="
            asset === 'index' ||
            asset === 'ethereum' ||
            asset === 'quai' ||
            asset === 'polygon'
          "
        >
          Koala Wallet makes it safe and easy to send and receive crypto to your
          wallet address.
        </span>
        <span v-if="asset === 'kadena'">
          Koala Wallet makes it safe and easy to send and receive Kadena from
          your k:address.
        </span>
      </p>
    </div>
    <div class="z-1 relative mt-16 w-full">
      <img
        v-if="asset === 'index'"
        src="~/assets/images/home/card-send-receive-1.png"
        class="w-full"
      />
      <img
        v-if="asset === 'kadena'"
        src="~/assets/images/home/card-send-receive-2.png"
        class="w-full"
      />
      <img
        v-if="asset === 'ethereum'"
        src="~/assets/images/home/card-send-receive-3.png"
        class="w-full"
      />
      <img
        v-if="asset === 'quai'"
        src="~/assets/images/home/card-send-receive-4.png"
        class="w-full"
      />
      <img
        v-if="asset === 'polygon'"
        src="~/assets/images/home/card-send-receive-5.png"
        class="w-full"
      />
    </div>
  </article>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(["asset"]);
</script>
