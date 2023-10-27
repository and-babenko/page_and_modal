<template>
  <header class="relative w-full">
    <div
      ref="headerRef"
      class="fixed z-50 flex w-full flex-row items-center justify-between gap-4 px-5 pb-6 pt-8 xl:pl-[120px] xl:pr-[120px]"
    >
      <UiHeaderLogo />

      <nav
        class="relative z-10 hidden flex-row items-center text-white md:flex md:gap-4 xl:gap-10"
      >
        <NuxtLink
          to="/"
          class="text-[15px] font-semibold leading-4 hover:text-pink"
          @click="scrollToTop"
        >
          Index
        </NuxtLink>
        <NuxtLink
          to="/collection"
          class="text-[15px] font-semibold leading-4 hover:text-pink"
          @click="scrollToTop"
        >
          Collection
        </NuxtLink>

        <NuxtLink
          to="/"
          class="pinkYellowButton flex h-12 w-[182px] cursor-pointer items-center justify-center rounded-full text-[15px] font-semibold leading-4"
          @click="scrollToTop"
          >Download App
        </NuxtLink>
      </nav>
      <div class="block cursor-pointer md:hidden" @click="toggleMobileMenu">
        <img src="~/assets/icons/icon-burger-menu.svg" />
      </div>
    </div>

    <div
      v-if="isShowMobileMenu"
      class="fixed bottom-0 top-20 z-50 flex w-full flex-col items-center justify-between overflow-auto border-t border-white bg-[#171826] pb-14 pt-10 md:hidden"
    >
      <nav class="mt-14 flex w-full flex-col items-center gap-12 text-white">
        <NuxtLink
          to="/"
          class="text-[15px] font-semibold leading-4"
          @click="onHandleMobileMenuClick"
        >
          Index
        </NuxtLink>
        <NuxtLink
          to="/collection"
          class="text-[15px] font-semibold leading-4"
          @click="onHandleMobileMenuClick"
        >
          Collection
        </NuxtLink>

        <NuxtLink
          to="/"
          class="pinkYellowButton flex h-12 w-[182px] cursor-pointer items-center justify-center rounded-full"
          @click="onHandleMobileMenuClick"
        >
          <div class="text-[15px] font-semibold leading-4">Download App</div>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
const isShowMobileMenu = ref(false);
const headerRef = ref("");

const portrait = computed(() => window.matchMedia("(orientation: portrait)"));

const onHandleMobileMenuClick = () => {
  toggleMobileMenu();
  scrollToTop();
};

const toggleMobileMenu = () => {
  isShowMobileMenu.value = !isShowMobileMenu.value;
};

watch(isShowMobileMenu, () => {
  isShowMobileMenu.value
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
});

const handleChangeOrientation = () => {
  // Unlock scroll if device is horisontal (on many devices there are no menu when they are horisontal)
  if (window.screen.width > window.screen.height) {
    document.body.style.overflow = "";
  }

  // If user turned device to vertical again but popup was opened before and not closed - just close (prevent lots of bugs)
  if (window.screen.width < window.screen.height && isShowMobileMenu.value) {
    isShowMobileMenu.value = false;
  }
};

const handleScroll = () => {
  if (window.scrollY > 0) {
    headerRef.value.style = "background-color: #171826";
  } else {
    headerRef.value.style = "background-color: transparent";
  }
};

onMounted(() => {
  document.addEventListener("scroll", handleScroll);
  portrait.value.addEventListener("change", handleChangeOrientation);
});

onBeforeUnmount(() => {
  document.removeEventListener("scroll", handleScroll);
  portrait.value.removeEventListener("change", handleChangeOrientation);
});
</script>
