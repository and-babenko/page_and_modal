export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  const updateQuery = (routeName: string, pageId: number, pageSize: number) => {
    router.push({
      name: routeName,
      query: {
        pageId,
        pageSize,
      },
    });
  };

  nuxtApp.provide("updateQuery", updateQuery);
});
