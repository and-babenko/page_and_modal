<template>
  <main
    class="flex w-full flex-col items-center justify-center overflow-hidden pt-24"
  >
    <section
      class="relative flex w-full flex-col items-center px-5 pt-14 md:max-w-[1440px] md:flex-row md:items-start md:justify-between md:pl-14 md:pr-3 lg:gap-8 xl:pl-[184px] xl:pr-[75px]"
    >
      <div
        class="relative z-10 flex w-full flex-col items-center md:w-[47%] md:items-start lg:mt-[65px]"
      >
        <h3
          class="pinkOrangeGradientText text-center font-['InterMedium'] text-[10px] font-medium uppercase tracking-[2px] md:text-left lg:mt-[13px] lg:text-xs"
        >
          Your Keys, your coins, your koala wallet
        </h3>
        <h1
          class="mt-3 text-center font-['InterExtraBold'] text-5xl font-extrabold leading-[65px] text-white md:text-left lg:text-[64px] lg:leading-[72px]"
        >
          Your Passport to the
          <span class="pinkOrangeGradientText inline sm:hidden md:inline"
            >Crypto</span
          >&nbsp;
          <span
            class="pinkOrangeGradientText hidden pb-1 font-['InterExtraBold'] text-5xl font-extrabold leading-[65px] sm:inline md:hidden lg:text-[64px] lg:leading-[72px]"
          >
            Crypto Ecosystem
          </span>
        </h1>
        <span
          class="pinkOrangeGradientText inline pb-1 font-['InterExtraBold'] text-5xl font-extrabold leading-[65px] sm:hidden md:inline lg:text-[64px] lg:leading-[72px]"
          >Ecosystem
        </span>
        <p
          class="mt-6 w-11/12 text-center font-['InterMedium'] text-base font-normal leading-7 text-white opacity-75 md:mt-5 md:text-left md:text-lg"
        >
          Koala Wallet makes it easier than ever to buy, send, receive, and
          safely store your crypto assets.
        </p>

        <div
          class="mt-8 flex flex-row items-center justify-center gap-4 md:justify-start md:gap-8"
        >
          <NuxtLink
            to="#"
            class="pinkYellowButton flex h-16 w-40 cursor-pointer items-center justify-center rounded-full font-['InterBold'] text-[15px] font-bold leading-4 text-white md:w-44"
          >
            Download App
          </NuxtLink>
        </div>

        <AvailableWalletPlatforms class="mt-8" />
      </div>

      <div
        class="relative mt-8 max-w-full md:mt-[-12px] md:max-w-[53%] lg:pl-2.5"
      >
        <img
          src="~/assets/images/home/phone-index.png"
          alt="koalawallet-ethereum"
          class="relative z-10 w-[400px] md:w-full md:max-w-[650px]"
        />
        <DesignPinkGra
          class="-left-2 top-0 z-[0] h-[615px] w-[615px] rounded-full blur-[60px]"
        />
        <DesignBlueGra
          class="left-[-200px] top-[-100px] -z-10 h-[570px] w-[570px] rounded-full blur-[60px]"
        />
      </div>
      <div class="absolute -top-9 right-0 z-0">
        <img src="~/assets/images/home/dots-1.png" />
      </div>
    </section>

    <section
      class="relative mt-24 grid w-full grid-cols-1 grid-rows-2 gap-8 px-5 md:max-w-[1440px] md:grid-cols-2 md:px-8 xl:mt-[110px] xl:px-[120px]"
    >
      <div class="absolute left-0 top-10 z-0">
        <img
          src="~/assets/images/home/dots-2.png"
          class="w-full md:w-[800px]"
        />
      </div>
      <div class="absolute -left-[400px] top-10 z-0 flex">
        <DesignBlueGra
          :is-relative="true"
          class="h-[300px] w-[300px] rounded-full blur-[70px] md:h-[400px] md:w-[400px]"
        />
        <DesignPinkGra
          :is-relative="true"
          class="mt-[400px] h-[300px] w-[300px] rounded-full blur-[70px] md:h-[400px] md:w-[400px]"
        />
      </div>

      <AssetCardPrivateSecure :asset="'index'" />
      <AssetCardNFTs :asset="'index'" />
      <AssetCardSendReceive :asset="'index'" />
      <AssetCardSwap :asset="'index'" />
      <AssetCardWalletConnect :asset="'index'" />
      <AssetCardBuy :asset="'index'" />
      <AssetCardBrowserExtension :asset="'index'" />
      <AssetCardTranslations />
    </section>

    <DownloadApp />
  </main>
</template>
