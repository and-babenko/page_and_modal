export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const getBannerImageURL = (eucId) => {
    /* URL to fetch image for twitter preview */
    return "";
  };

  nuxtApp.provide("getBannerImageURL", getBannerImageURL);
});
