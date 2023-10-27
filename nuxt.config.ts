// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: [
    "@/assets/css/common.css",
    "@/assets/css/fonts.css",
    "@/assets/css/icons.css",
  ],
  eslint: {
    lintOnStart: false,
    emitWarning: false,
    emitError: false,
    exclude: ["**/.nuxt/**"],
  },
  devtools: { enabled: false },
  app: {
    head: {
      title: "Koala Wallet - The safest choice for your crypto assets!",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "description",
          content:
            "Easily buy, send, receive & safely store your crypto all in one place! Only you have access to your assets, data & private keys in your Koala Wallet.",
        },
        {
          name: "twitter:title",
          content: "Koala Wallet - The safest choice for your crypto assets!",
        },
        {
          name: "twitter:description",
          content:
            "Easily buy, send, receive & safely store your crypto all in one place! Only you have access to your assets, data & private keys in your Koala Wallet.",
        },
        {
          name: "twitter:card",
          content: "app",
        },
        {
          name: "twitter:site",
          content: "@koalawallet",
        },
        {
          name: "twitter:app:name:iphone",
          content: "Koala Wallet",
        },
        {
          name: "twitter:app:id:iphone",
          content: "1627486259",
        },
        {
          name: "twitter:app:name:ipad",
          content: "Koala Wallet",
        },
        {
          name: "twitter:app:id:ipad",
          content: "1627486259",
        },
        {
          name: "twitter:app:name:googleplay",
          content: "Koala Wallet",
        },
        {
          name: "twitter:app:id:googleplay",
          content: "com.eucalyptuslabs.kowallet",
        },
        {
          name: "twitter:image",
          content: process.env.SITE_URL + "/meta_image.png",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Koala Wallet - The safest choice for your crypto assets!",
        },
        {
          property: "og:description",
          content:
            "Easily buy, send, receive & safely store your crypto all in one place! Only you have access to your assets, data & private keys in your Koala Wallet.",
        },
        {
          property: "og:image",
          content: process.env.SITE_URL + "/meta_image.png",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },
});
