<template>
  <div ref="assetsRef" class="relative">
    <div
      class="flex cursor-pointer items-center justify-center text-sm font-normal leading-5 hover:text-pink hover:underline"
      @click="onAssetsMenuClick"
    >
      <div class="flex w-full gap-2">
        <span class="mx-auto">{{ currentAsset }}</span>
        <img
          src="~/assets/icons/icon-arrow-top-gra.svg"
          class="select-none duration-100"
          :class="showAssetsMenu ? 'rotate-180' : ''"
        />
      </div>
    </div>
    <div
      v-if="showAssetsMenu"
      class="assets-menu -left-[40px] bottom-[25px] flex w-[135px] flex-col text-[15px] font-semibold leading-4"
    >
      <NuxtLink
        to="/"
        class="text-[15px] font-semibold leading-4 hover:text-pink"
        @click="onAssetClickHandler"
      >
        Kadena
      </NuxtLink>
      <NuxtLink
        to="/"
        class="text-[15px] font-semibold leading-4 hover:text-pink"
        @click="onAssetClickHandler"
      >
        Ethereum
      </NuxtLink>
      <NuxtLink
        to="/"
        class="text-[15px] font-semibold leading-4 hover:text-pink"
        @click="onAssetClickHandler"
      >
        Polygon
      </NuxtLink>
      <NuxtLink
        to="/"
        class="text-[15px] font-semibold leading-4 hover:text-pink"
        @click="onAssetClickHandler"
      >
        Quai
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const showAssetsMenu = ref(false);
const assetsRef = ref("");

const currentAsset = computed(() => {
  switch (route.name) {
    case "kadena":
      return "Kadena";
    case "ethereum":
      return "Ethereum";
    case "polygon":
      return "Polygon";
    case "quai":
      return "Quai";
    default:
      return "Assets";
  }
});

const onAssetsMenuClick = () => {
  showAssetsMenu.value = !showAssetsMenu.value;
};

const onAssetClickHandler = () => {
  showAssetsMenu.value = false;
};

const handleClickOutside = (event) => {
  if (assetsRef.value && !assetsRef.value.contains(event.target)) {
    showAssetsMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});
</script>

<style scoped>
.assets-menu {
  position: absolute;
  z-index: 100;
  padding: 10px 20px;
  margin: 0;
  list-style: none;
  border-radius: 20px;
  color: white;
  border: 1px solid #383a61;
  background-color: rgb(23, 24, 38);
}

.assets-menu a {
  padding: 8px;
}
</style>
