<template>
  <section
    class="mt-[60px] flex w-full flex-col items-center pb-5 pl-5 pr-5 text-white md:mt-[100px] md:pl-0 md:pr-0"
  >
    <div><img src="~/assets/images/logos/koala.svg" /></div>
    <h2
      class="mt-12 text-center text-[32px] font-extrabold leading-10 md:text-5xl md:leading-[64px]"
    >
      Explore with your Koala Wallet
    </h2>
    <p
      class="mt-4 w-full text-center text-[21px] font-medium leading-7 md:w-auto md:text-2xl md:leading-8"
    >
      Enter the Crypto Ecosystem Today
    </p>
    <button
      class="pinkYellowButton mt-16 flex h-14 w-48 cursor-pointer items-center justify-center rounded-full"
      @click="onDownloadClickHandler"
    >
      <span class="text-[15px] font-semibold leading-4">Download App</span>
    </button>
  </section>
</template>

<script setup>
const router = useRouter();

const onDownloadClickHandler = () => {
  scrollToTop();
  router.push({
    path: `#`,
  });
};
</script>
