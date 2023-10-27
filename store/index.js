import { defineStore } from "pinia";
// import { getSearchResult } from "~/api/indexerAPI";

export const useStore = defineStore("app-stores", {
  state: () => {
    return {
      selectedNFTName: "",

      testnetMode: false,
      isLoading: false,
      lightboxGallery: [],
      nftLightbox: {
        isShown: false,
        image: null,
        infoURL: null,
        id: null,
        name: null,
        accountName: null,
        links: null,
        eucId: null,
      },
    };
  },
  actions: {
    setTestnet(payload) {
      this.testnetMode = payload;
    },

    toggleNftLightbox({
      isShown,
      image,
      infoURL,
      id,
      name,
      accountName,
      links,
      eucId,
    }) {
      this.nftLightbox.isShown = isShown;
      this.nftLightbox.image = image;
      this.nftLightbox.infoURL = infoURL;
      this.nftLightbox.id = id;
      this.nftLightbox.name = name;
      this.nftLightbox.accountName = accountName;
      this.nftLightbox.links = links;
      this.nftLightbox.eucId = eucId;
    },
    setLightboxGallery(payload) {
      this.lightboxGallery = payload;
    },
    setSelectedNFTName(payload) {
      this.selectedNFTName = payload;
    },
  },
});
