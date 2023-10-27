<template>
  <Transition name="fade">
    <div
      v-if="isShown"
      class="fixed left-0 top-0 z-[150] flex h-[100vh] w-[100vw] items-center"
      :class="lightboxClass"
    >
      <button
        class="bg-white-fixed fixed right-[20px] top-[20px] z-[103] flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-opacity-30 md:right-[50px] md:top-[50px]"
        @click.stop="hideLightbox"
      >
        <img
          class="h-[20px] w-[20px]"
          src="@/assets/images/home/close.svg"
          alt="close"
        />
      </button>
      <div
        class="fixed z-[102] mt-0 flex items-center"
        :class="{
          'left-0 top-0 h-[100vh] w-[100vw] overflow-auto':
            isZoomed && shouldBeZoomed,
        }"
      >
        <div class="relative mx-auto flex flex-col">
          <div
            v-if="!isZoomed"
            class="text-white-fixed max-w-screen flex justify-between gap-1.5 px-4 md:max-w-[512px]"
          >
            <h3
              class="flex max-w-[95%] items-center justify-center text-ellipsis font-['InterSemiBold'] text-2xl md:text-[32px]"
            >
              {{ collectionName }}
            </h3>
            <h3 class="font-['Inter'] text-2xl md:text-[32px]">#{{ id }}</h3>
          </div>
          <div
            v-if="!isZoomed"
            class="text-white-fixed mt-3 flex gap-3 px-4 font-['Inter'] text-opacity-50"
          >
            <NuxtLink
              v-if="accountName !== '' && routeName !== 'account-account'"
              :to="`/`"
              class="flex gap-2"
              @click="hideLightbox"
            >
              <span class="owner"></span>
              <span class="underline decoration-1 underline-offset-4"
                >Owner</span
              >
            </NuxtLink>
            <NuxtLink
              v-if="routeName !== 'nft-collection-eucId'"
              :to="`/`"
              class="flex gap-2"
              @click="hideLightbox"
            >
              <span class="collection-thumbnails"></span>
              <span class="underline decoration-1 underline-offset-4"
                >Collection</span
              >
            </NuxtLink>
            <NuxtLink
              class="flex cursor-pointer gap-2"
              @click.prevent="copyURLtoClibboard"
            >
              <span class="share"></span>
              <span
                v-if="!copied"
                class="underline decoration-1 underline-offset-4"
                >Share</span
              >
              <span v-else class="underline decoration-1 underline-offset-4"
                >Copied!</span
              >
            </NuxtLink>
          </div>
          <div
            id="nft-image-wrap"
            class="relative mt-5 self-center"
            :class="countZoomedClass"
            @touchstart="startSwipe"
            @touchend="endSwipe"
          >
            <div
              class="bg-blur absolute left-0 top-0 z-[-2] flex h-full w-full items-center justify-center"
            >
              <img id="image" :src="image" alt="nft" />
            </div>
            <div
              class="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-2xl"
            >
              <div
                class="display-inline overflow-hidden rounded-2xl"
                :class="countProportion"
              >
                <img
                  id="image"
                  :src="image"
                  alt="nft"
                  :class="countProportion"
                  @click="isZoomed = !isZoomed"
                />
              </div>
            </div>
          </div>
          <template v-if="!isZoomed">
            <a
              v-if="infoUrl || links?.website"
              :href="infoUrl || links?.website"
              class="bg-white-fixed text-white-fixed mx-auto mt-6 inline-block rounded-2xl bg-opacity-30 px-4 py-5 font-['InterBold'] text-[12px] uppercase md:px-8 md:text-[14px]"
            >
              Open Marketplace
            </a>
            <button
              class="bg-white-fixed absolute -bottom-[50px] left-[10px] z-[103] flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-opacity-30 disabled:bg-opacity-10 md:left-[-80px] md:top-[320px]"
              :disabled="disablePreviosButton"
              @click="previousNft"
            >
              <img src="~~/assets/images/home/arrow-left.svg" alt="" />
            </button>

            <button
              v-if="disableNuxtButton && route.name === 'nft-collections'"
              class="bg-white-fixed absolute bottom-[0px] right-[10px] z-[103] flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-opacity-30 disabled:bg-opacity-10 md:right-[-80px] md:top-[320px]"
            >
              <NuxtLink
                :to="`/`"
                class="flex h-full w-full items-center justify-center gap-2"
              >
                <span class="collection-thumbnails"></span>
              </NuxtLink>
            </button>
            <button
              v-else
              class="bg-white-fixed absolute -bottom-[50px] right-[10px] z-[103] flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-opacity-30 disabled:bg-opacity-10 md:right-[-80px] md:top-[320px]"
              :disabled="disableNuxtButton"
              @click="nextNft"
            >
              <img src="~~/assets/images/home/arrow-right.svg" alt="" />
            </button>
          </template>
        </div>
      </div>
      <div
        class="bg-black-fixed fixed left-0 top-0 z-[101] h-full w-full bg-opacity-80 backdrop-blur"
        @click.stop="hideLightbox"
      ></div>
    </div>
  </Transition>
</template>

<script>
import { useStore } from "~/store";

export default {
  name: "NFTLightbox",
  setup() {
    const app = useNuxtApp();
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const copied = ref(false);
    const startSwipePositionX = ref(0);
    const endSwipePositionX = ref(0);
    const isZoomed = ref(false);
    const imageWidth = ref(0);
    const imageNaturalWidth = ref(0);
    const imageNaturalHeight = ref(0);

    const pageId = computed(() => route.query.pageId || "0");
    const pageSize = computed(() => route.query.pageSize || "10");
    const isShown = computed(() => store.nftLightbox.isShown);
    const image = computed(() => store.nftLightbox.image);
    const infoUrl = computed(() => store.nftLightbox.infoURL);
    const collectionName = computed(() => store.nftLightbox.name);
    const accountName = computed(() => store.nftLightbox.accountName);
    const eucId = computed(() => store.nftLightbox.eucId);
    const id = computed(() => store.nftLightbox.id);
    const links = computed(() => store.nftLightbox.links);
    const gallery = computed(() => store.lightboxGallery);
    const galleryLength = computed(() => store.lightboxGallery.length);
    const nftIndexInCollection = computed(() =>
      gallery.value
        ? gallery.value.findIndex(
            (image) =>
              image.id === id.value && image.name === collectionName.value,
          )
        : 0,
    );
    const disablePreviosButton = computed(() => {
      return nftIndexInCollection.value === 0 && pageId.value === "0";
    });
    const disableNuxtButton = computed(() => {
      const isLastInGallery =
        nftIndexInCollection.value + 1 === gallery.value.length;
      if (
        route.name === "account-account" ||
        route.name === "nft-collections"
      ) {
        return isLastInGallery;
      }

      if (route.name === "nft-collection-eucId") {
        if (!route.query.eucId) {
          /*
            Disable next-button if new nft-page was opened from lightbox but new nfts were not loaded.
            EucId will be setted only after fetching.
          */
          return true;
        }
        return galleryLength.value < Number(pageSize.value) && isLastInGallery;
      }

      return galleryLength.value < Number(pageSize.value) && isLastInGallery;
    });
    const routeName = computed(() => route.name);
    const countProportion = computed(() => {
      const proportion = imageNaturalWidth.value / imageNaturalHeight.value;
      switch (true) {
        case proportion < 1:
          return "h-full";
        case proportion > 1:
          return "w-full";
        default:
          return "w-full h-full";
      }
    });
    const shouldBeZoomed = computed(() => {
      return imageNaturalWidth.value > 400 || imageNaturalHeight.value > 400;
    });

    const countZoomedClass = computed(() => {
      if (isZoomed.value && shouldBeZoomed.value) {
        return `w-[${imageNaturalWidth.value}px] h-[${imageNaturalHeight.value}px] p-8`;
      } else {
        return "md:w-[512px] md:h-[512px] p-4 w-full max-w-[340px] md:max-w-fit";
      }
    });

    const lightboxClass = computed(() => {
      if (isZoomed.value && shouldBeZoomed.value) {
        return `overflow-auto md:justify-center justify-start p-8`;
      } else {
        return "justify-center";
      }
    });

    const makeImages = async () =>
      await nextTick(() => {
        const images = document.getElementById("image");
        if (images) {
          images.onload = () => {
            imageWidth.value = images.clientWidth;
            imageNaturalWidth.value = images.naturalWidth;
            imageNaturalHeight.value = images.naturalHeight;
          };
        }
      });
    const hideLightbox = () => {
      if (isZoomed.value === true) {
        isZoomed.value = false;
      } else {
        app.$nftLightbox.hide();
      }
    };

    const updateLightbox = (payload) => {
      const payloadToRaw = toRaw(payload);
      app.$nftLightbox.update({
        image: payloadToRaw.imageUrl,
        infoURL: payloadToRaw.infoUrl,
        id: payloadToRaw.id,
        name: payloadToRaw.name,
        accountName: payloadToRaw.accountName,
        links: payloadToRaw.links,
        eucId: payloadToRaw.eucId,
      });
    };

    const previousNft = () => {
      const previousImage = gallery.value[nftIndexInCollection.value - 1];
      if (!previousImage) {
        if (Number(pageId.value) !== 0) {
          router.replace({
            name: route.name,
            query: {
              pageId: Number(pageId.value) - 1,
              pageSize: route.query.pageSize,
              nftId: Number(route.query.nftId) - 1,
            },
          });
        }
      } else {
        updateLightbox(previousImage);
      }
    };

    const nextNft = () => {
      const nextImage = gallery.value[nftIndexInCollection.value + 1];
      if (!nextImage) {
        // if (galleryLength.value === Number(pageSize.value)) {
        //   router.replace({
        //     name: route.name,
        //     query: {
        //       pageId: Number(pageId.value) + 1,
        //       pageSize: route.query.pageSize,
        //       nftId: Number(route.query.nftId) + 1,
        //     },
        //   });
        // }
        hideLightbox();
      } else {
        updateLightbox(nextImage);
      }
    };

    const copyURLtoClibboard = () => {
      let url = window.location.href;
      if (route.name === "nft-collections") {
        url = `${window.location.origin}/nft-collection/${eucId.value}?pageId=0&pageSize=${pageSize.value}&nftId=${id.value}`;
      }
      navigator.clipboard.writeText(url);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 600);
    };

    const handleSwipeDirection = () => {
      if (isZoomed.value === true) return;
      const diffInPixel = endSwipePositionX.value - startSwipePositionX.value;
      if (
        endSwipePositionX.value < startSwipePositionX.value &&
        diffInPixel < -100
      ) {
        if (disableNuxtButton.value && route.name === "nft-collections") {
          router.push({
            path: `/nft-collection/${eucId.value}`,
          });
        } else {
          nextNft();
        }
      }

      if (
        endSwipePositionX.value > startSwipePositionX.value &&
        diffInPixel > -100
      ) {
        if (!disablePreviosButton.value) previousNft();
      }
    };

    const startSwipe = (event) => {
      startSwipePositionX.value = event.changedTouches[0].screenX;
    };

    const endSwipe = (event) => {
      endSwipePositionX.value = event.changedTouches[0].screenX;
      handleSwipeDirection();
    };

    watch(image, async (value) => {
      if (value) {
        await makeImages();
      }
    });

    onMounted(() => {
      if (process.client) {
        window.addEventListener(
          "popstate",
          () => {
            hideLightbox();
          },
          true,
        );
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener("popstate", () => {}, false);
    });

    return {
      isShown,
      image,
      infoUrl,
      id,
      disablePreviosButton,
      disableNuxtButton,
      collectionName,
      routeName,
      accountName,
      links,
      copied,
      eucId,
      isZoomed,
      route,
      galleryLength,
      shouldBeZoomed,
      countProportion,
      countZoomedClass,
      lightboxClass,
      hideLightbox,
      previousNft,
      nextNft,
      copyURLtoClibboard,
      startSwipe,
      endSwipe,
    };
  },
};
</script>

<style scoped>
.bg-black-fixed {
  background: rgb(0, 0, 0, 0.95);
}
.bg-white-fixed {
  background: rgb(255, 255, 255, 0.2);
}
.bg-white-fixed:disabled {
  background: rgb(255, 255, 255, 0.05);
}
.bg-blur {
  filter: blur(50px);
  opacity: 0.7;
}
.text-white-fixed {
  color: rgba(255, 255, 255, 0.8);
}
</style>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.collection-thumbnails {
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-mask: url("~~/assets/images/home/collection-thumbnails.svg") no-repeat
    center;
  mask: url("~~/assets/images/home/collection-thumbnails.svg") no-repeat center;
}
.share {
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-mask: url("~~/assets/images/home/share.svg") no-repeat center;
  mask: url("~~/assets/images/home/share.svg") no-repeat center;
}
.owner {
  display: inline-block;
  width: 25px;
  height: 26px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-mask: url("~~/assets/images/home/owner.svg") no-repeat center;
  mask: url("~~/assets/images/home/owner.svg") no-repeat center;
}
</style>
