import { useStore } from "~/store";
export default defineNuxtPlugin((nuxtApp) => {
  const store = useStore();
  const router = useRouter();
  const state = ref(false);

  const toogleHtmlOverflow = () => {
    if (process.client) {
      const htmlClassList = document.querySelector("html").classList;
      if (state.value) {
        htmlClassList.add("overflow-hidden");
        htmlClassList.add("pr-4");
      } else {
        htmlClassList.remove("overflow-hidden");
        htmlClassList.remove("pr-4");
      }
    }
  };

  const refreshUrl = (params) => {
    const route = useRoute();
    let query = { ...route.query };
    if (state.value && params) {
      query.nftId = params.nftId;
    } else {
      delete query.nftId;
    }

    if (
      route.name !== "nft-collection" &&
      state.value &&
      params &&
      params.eucId
    ) {
      query.eucId = params.eucId;
    } else {
      delete query.eucId;
    }

    router.replace({
      name: route.name,
      params: route.params,
      query,
    });
  };

  const nftLightbox = {
    show: (payload) => {
      store.toggleNftLightbox({ isShown: true, ...payload });
      state.value = true;
      toogleHtmlOverflow();
      refreshUrl({ nftId: payload.id, eucId: payload.eucId });
    },
    hide: () => {
      store.toggleNftLightbox({ isShown: false });
      state.value = false;
      toogleHtmlOverflow();
      refreshUrl();
    },
    update: (payload) => {
      store.toggleNftLightbox({ isShown: true, ...payload });
      refreshUrl({ nftId: payload.id, eucId: payload.eucId });
    },
  };

  nuxtApp.provide("nftLightbox", nftLightbox);
});
