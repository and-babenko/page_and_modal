<template>
  <div class="relative w-full px-5 pb-24 text-white xl:px-[120px]">
    <DesignGradientBlue />
    <DesignGradientPink />
    <DesignGradientOrange />
    <div class="absolute -left-[0px] top-[0px] -z-10 h-[400px] w-[200px]">
      <img src="~/assets/images/home/dots.png" alt="dots" />
    </div>
    <main class="relative w-full pt-24">
      <NuxtLink
        to="/"
        class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white bg-opacity-10"
      >
        <img src="~/assets/images/backicon.svg" alt="backicon" />
      </NuxtLink>
      <section
        class="mt-8 w-full rounded-2xl bg-white bg-opacity-5 p-3 min-[350px]:p-6 md:p-8"
      >
        <div
          v-if="isLoading"
          class="flex h-[200px] w-full items-center justify-center"
        >
          <UiLineLoader />
        </div>
        <div
          v-else-if="testnetMode"
          class="my-8 break-all text-center font-['Inter'] text-lg text-white text-opacity-60"
        >
          NFTs are not tracked on tesnet
        </div>
        <div
          v-else
          class="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-24"
        >
          <div class="flex w-full flex-col gap-4 md:w-1/2">
            <div
              class="flex items-center justify-between gap-4 md:justify-start"
            >
              <h1
                class="m-auto font-['InterSemiBold'] text-[32px] font-semibold leading-10 text-white md:m-0"
              >
                {{ nftName || "" }}
              </h1>
            </div>
            <p class="font-['Inter'] text-lg opacity-60">
              {{ nftImages.description || "" }}
            </p>
            <div class="flex gap-3">
              <a
                v-if="nftImages.links?.website !== ''"
                :href="nftImages.links?.website"
                class="cursor-pointer opacity-60 hover:opacity-80 active:opacity-90"
                target="_blank"
              >
                <span class="flex w-[30px] justify-center">
                  <span class="web-svg"></span>
                </span>
              </a>
              <a
                v-if="nftImages.links?.marketplace !== ''"
                :href="nftImages.links?.marketplace"
                class="cursor-pointer opacity-60 hover:opacity-80 active:opacity-90"
                target="_blank"
              >
                <span class="flex w-[30px] justify-center">
                  <span class="market-svg"></span>
                </span>
              </a>
              <a
                v-if="nftImages.links?.twitter !== ''"
                :href="nftImages.links?.twitter"
                class="cursor-pointer opacity-60 hover:opacity-80 active:opacity-90"
                target="_blank"
              >
                <span class="flex w-[30px] justify-center">
                  <span class="twitter-fill-svg"></span>
                </span>
              </a>
              <a
                v-if="nftImages.links?.discord !== ''"
                :href="nftImages.links?.discord"
                class="cursor-pointer opacity-60 hover:opacity-80 active:opacity-90"
                target="_blank"
              >
                <span class="flex w-[30px] justify-center">
                  <span class="discord-svg"></span>
                </span>
              </a>
            </div>
            <div class="flex">
              <div class="flex flex-col gap-2 pr-6">
                <p class="font-['Inter'] text-sm opacity-60">Total Supply</p>
                <p
                  class="font-['InterSemiBold'] text-xl font-semibold text-white"
                >
                  {{ nftImages.supply || 0 }}
                </p>
              </div>
              <div
                class="flex flex-col gap-2 border-x-2 border-white border-opacity-10 px-6"
              >
                <p class="font-['Inter'] text-sm opacity-60">Unique owners</p>
                <p
                  class="font-['InterSemiBold'] text-xl font-semibold text-white"
                >
                  {{ nftImages.uniqueOwnersCount || 0 }}
                </p>
              </div>
              <div class="flex flex-col gap-2 pl-6">
                <p class="font-['Inter'] text-sm opacity-60">NFT images</p>
                <p
                  class="font-['InterSemiBold'] text-xl font-semibold text-white"
                >
                  {{ nftImages.numScrapedNFTs || 0 }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="flex h-[120px] w-full items-center justify-center md:h-[200px] md:w-1/2 md:justify-end"
          >
            <img
              :src="nftImages.bannerImageUrl"
              :alt="nftName"
              class="h-auto max-h-full max-w-full"
            />
          </div>
        </div>
      </section>

      <div
        v-if="!isLoading && !testnetMode"
        class="mt-8 w-full rounded-2xl bg-white bg-opacity-5"
      >
        <div
          class="flex w-full flex-col items-center justify-between gap-3 border-b border-b-[#353945] p-3 min-[350px]:p-6 sm:flex-row"
        >
          <p class="mr-auto font-['Inter'] text-sm leading-6 text-white">
            NFTs
          </p>
          <UiPagination
            class="w-full justify-between sm:w-auto"
            :totalItemsCount="nftImages.numScrapedNFTs"
            :currentPage="pageId"
            :setPage="setCurrentPage"
            :isLoading="isLoading"
            :currentPageSize="pageSize"
          />
        </div>
        <div class="flex w-full flex-wrap gap-4 p-6">
          <div class="nftsList w-full gap-4 md:gap-0">
            <div
              v-for="(item, index) in nftImages.collectionImages"
              :key="index + eucId"
            >
              <NFTItem
                :id="item.id"
                :image="item.imageUrl"
                :title="nftName"
                :infoURL="buildNFTitemURL(item)"
                :showImages="true"
                class="w-[100px] sm:w-[220px] md:w-full"
              />
            </div>
          </div>
        </div>
        <div
          class="flex w-full flex-col items-start justify-between gap-4 p-3 min-[350px]:p-6 sm:flex-row sm:items-center"
        >
          <UiPageSelect
            :options="pageCountOptions"
            :selected="pageSize"
            :changePageCount="setPageCount"
          />
          <UiPagination
            class="w-full justify-between sm:w-auto"
            :totalItemsCount="nftImages.numScrapedNFTs"
            :currentPage="pageId"
            :setPage="setCurrentPage"
            :isLoading="isLoading"
            :currentPageSize="pageSize"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { getNFTCollectionImages } from "~~/api/nftsAPI";
import { useStore } from "~~/store";

const app = useNuxtApp();
const route = useRoute();
const store = useStore();
const router = useRouter();

const pageId = ref(0);
const isLoading = ref(true);
const nftImages = ref([]);
const pageCountOptions = ref([10, 25, 50, 100]);
const pageSize = ref(10);

const eucId = computed(() => decodeURIComponent(route.params.eucId));
const nftName = computed(() => store.selectedNFTName);
const testnetMode = computed(() => store.testnetMode);

const setHeaderTags = async () => {
  let templateName;
  if (nftName.value) {
    templateName = testnetMode.value
      ? `Kadena Testnet Explorer - ${nftName.value} Collection`
      : `Kadena Explorer - ${nftName.value} Collection`;
  } else {
    templateName = testnetMode.value
      ? `Kadena Testnet Explorer - Collection`
      : `Kadena Explorer - Collection`;
  }

  if (route.query.pageId && route.query.pageSize && route.query.nftId) {
    const res = await useAsyncData("images", () =>
      getNFTCollectionImages(
        route.params.eucId,
        Number(route.query.pageId),
        Number(route.query.pageSize),
      ),
    );
    const nftItem = res.data.value.collectionImages.find(
      (item) => item.id === Number(route.query.nftId),
    );

    useHead({
      titleTemplate: templateName,
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: nftItem.imageUrl,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: nftItem.imageUrl,
        },
      ],
    });
  } else {
    useHead({
      titleTemplate: templateName,
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: app.$getBannerImageURL(eucId.value),
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: app.$getBannerImageURL(eucId.value),
        },
      ],
    });
  }
};

setHeaderTags();

const setLightboxGallery = () => {
  const nftImagesToRaw = toRaw(nftImages.value);
  const collectionImages = nftImagesToRaw.collectionImages.map((item) => {
    item.name = nftImagesToRaw.name;
    item.links = nftImagesToRaw.links;
    return item;
  });
  store.setLightboxGallery(collectionImages);
};

const getNFTlists = async (eucID, pageID, pageCount) => {
  isLoading.value = true;
  nftImages.value = await getNFTCollectionImages(eucID, pageID, pageCount);
  store.setSelectedNFTName(nftImages.value.name);
  setLightboxGallery();
  isLoading.value = false;
};

const showLightbox = (payload, links, eucId) => {
  app.$nftLightbox.show({
    image: payload.imageUrl,
    infoURL: payload.infoUrl,
    id: payload.id,
    name: payload.name,
    accountName: payload.accountName,
    links,
    eucId,
  });
};

const setPageCount = (value) => {
  pageSize.value = value;
  pageId.value = 0;
  app.$updateQuery("nft-collection-eucId", pageId.value, pageSize.value);
};

const setNftLightboxData = () => {
  const nftId = Number(route.query.nftId);
  if (Number.isInteger(nftId) && nftImages.value.collectionImages) {
    const image = nftImages.value.collectionImages.find(
      (image) => image.id === nftId,
    );
    if (image) {
      showLightbox(image, nftImages.value.links, nftImages.value.eucId);
    }
  }
};

watch(
  () => route.query,
  async (value, oldValue) => {
    if (
      value.pageId !== oldValue.pageId ||
      value.pageSize !== oldValue.pageSize
    ) {
      const { pageId: currentPage, pageSize: pageCount } = validateQueryParams(
        route.query,
      );
      pageId.value = currentPage;
      pageSize.value = pageCount;
      await getNFTlists(eucId.value, pageId.value, pageSize.value);
    }

    if (value.nftId) {
      setNftLightboxData();
    } else {
      app.$nftLightbox.hide();
    }
  },
);

onMounted(async () => {
  if (testnetMode.value) {
    isLoading.value = false;
    return;
  }

  const validatedQuery = validateQueryParams(route.query);

  if (!validatedQuery) {
    router.replace({
      name: route.name,
      query: {
        pageId: 0,
        pageSize: 10,
      },
    });
    return;
  }

  const { pageId: currentPage, pageSize: pageCount } = validatedQuery;

  pageId.value = currentPage;
  pageSize.value = maxPageSizeChecker(pageCount);

  // pageSize exist, but maxPageSizeChecker wasn't passed. Replacing query...
  if (pageCount !== pageSize.value) {
    router.replace({
      name: route.name,
      query: {
        ...route.query,
        pageSize: pageSize.value,
      },
    });
    return;
  }

  // Pushing custom pageSize to PageSelect
  if (!pageCountOptions.value.includes(pageSize.value)) {
    pageCountOptions.value.push(pageSize.value);
  }

  await getNFTlists(eucId.value, pageId.value, pageSize.value);
  setNftLightboxData();
});

const setCurrentPage = (val) => {
  router.push({
    path: `/nft-collection/${encodeURIComponent(eucId.value)}`,
    query: {
      pageId: parseInt(val),
      pageSize: pageSize.value,
    },
  });
};

const buildNFTitemURL = (item) => {
  const itemObjected = Object.assign({}, item);
  return itemObjected.infoUrl && itemObjected.infoUrl !== ""
    ? itemObjected.infoUrl
    : nftImages.value.links.website;
};
</script>

<style scoped>
.nftsList {
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-around;
}
@media (min-width: 768px) {
  .nftsList {
    display: grid !important;
    grid-gap: 24px;
    grid-template-columns: repeat(5, 1fr);
  }
}

.web-svg {
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 1px solid #ffffff;
  background-color: white;
  -webkit-mask: url("~~/assets/images/home/web.svg") no-repeat center;
  mask: url("~~/assets/images/home/web.svg") no-repeat center;
}

.market-svg {
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 1px solid #ffffff;
  background-color: white;
  -webkit-mask: url("~~/assets/images/home/market.svg") no-repeat center;
  mask: url("~~/assets/images/home/market.svg") no-repeat center;
}
.twitter-fill-svg {
  display: inline-block;
  width: 21px;
  height: 21px;
  border: 1px solid #ffffff;
  background-color: white;
  -webkit-mask: url("~~/assets/images/home/twitter.svg") no-repeat center;
  mask: url("~~/assets/images/home/twitter.svg") no-repeat center;
  margin-top: 1px;
}

.discord-svg {
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 1px solid #ffffff;
  background-color: white;
  -webkit-mask: url("~~/assets/images/home/discord.svg") no-repeat center;
  mask: url("~~/assets/images/home/discord.svg") no-repeat center;
}
.light .web-svg,
.light .market-svg,
.light .twitter-fill-svg,
.light .discord-svg {
  border: 1px solid #000000;
  background-color: black;
}
</style>
