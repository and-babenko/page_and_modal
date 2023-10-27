<template>
  <NuxtLink to="/" @click="scrollToTop">
    <img
      src="~/assets/images/logos/koala-name-logo.svg"
      class="h-5 md:h-8"
      @contextmenu.prevent="showContextMenu"
    />
  </NuxtLink>
  <ul
    v-if="showMenu"
    ref="contextMenuRef"
    class="context-menu top-[4rem] md:top-[5rem]"
  >
    <li class="flex" @click="copySvgLogoClickHandler">
      <p class="font-semibold hover:text-pink">Copy Logo as SVG</p>
      <div class="relative">
        <p
          v-if="copied[0]"
          class="absolute left-[10px] rounded bg-[#081420] px-[4px] py-[2px] text-white"
        >
          Copied!
        </p>
      </div>
    </li>
    <li class="flex" @click="copyPngLogoClickHandler">
      <p class="font-semibold hover:text-pink">Copy Logo as PNG</p>
      <div class="relative">
        <p
          v-if="copied[1]"
          class="absolute left-[10px] rounded bg-[#081420] px-[4px] py-[2px] text-white"
        >
          Copied!
        </p>
      </div>
    </li>
    <hr />
    <li class="mt-2 font-semibold hover:text-pink" @click="hideContextMenu">
      <NuxtLink to="/" class="flex justify-between gap-2">
        Figma Brand Kit
        <img src="~/assets/icons/icon-new-tab.svg" alt="open" />
      </NuxtLink>
    </li>
    <li class="font-semibold hover:text-pink" @click="hideContextMenu">
      <NuxtLink to="/" class="flex justify-between gap-2">
        Media Assets
        <img src="~/assets/icons/icon-new-tab.svg" alt="open" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { stringedLogo } from "~/utils/assets/stringedLogoToCopy.js";

const showMenu = ref(false);
const contextMenuRef = ref("");
const copied = ref([false, false]);

const hideContextMenu = () => {
  showMenu.value = false;
};

const showContextMenu = (event) => {
  event.preventDefault();
  showMenu.value = true;
};

const copySvgLogoClickHandler = () => {
  navigator.clipboard.writeText(stringedLogo);
  copied.value[0] = true;
  setTimeout(() => {
    copied.value[0] = false;
  }, 400);
};

const copyPngLogoClickHandler = async () => {
  /*
  Fetched file from server, get blob object to copied it in clipboard and write in clipboard new blob as image/png.
  */
  const response = await fetch("/media/png/koala_white_text.png");
  const blob = await response.blob();
  await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
  copied.value[1] = true;
  setTimeout(() => {
    copied.value[1] = false;
  }, 400);
};

const handleClickOutsideHeaderLogo = (event) => {
  if (contextMenuRef.value && !contextMenuRef.value.contains(event.target)) {
    showMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutsideHeaderLogo);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutsideHeaderLogo);
});
</script>

<style scoped>
.context-menu {
  position: absolute;
  z-index: 111111;
  padding: 10px 20px;
  margin: 0;
  list-style: none;
  border-radius: 20px;
  color: white;
  border: 1px solid #fff;
  background-color: rgb(23, 24, 38);
}

.context-menu li {
  padding: 8px;
  cursor: pointer;
}
</style>
