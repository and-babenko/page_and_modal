<template>
  <a
    class="flex h-full flex-col gap-4"
    :href="infoURL"
    target="_blank"
    @click.prevent="showLightbox"
  >
    <div
      v-if="showImages === true"
      class="overflow-hidden rounded-3xl"
      :class="divClass"
      :style="{ height: `${imageWidth}px` }"
    >
      <img
        v-if="image !== ''"
        :id="`${id}_${title}`"
        loading="lazy"
        :src="image"
        class="w-full"
        :style="{
          transform: `scale(${proportion}, ${proportion})`,
          transformOrigin: divClass ? `center center` : `center top`,
          imageRendering: imageNaturalWidth < 75 ? 'pixelated' : 'auto',
        }"
        alt="nft image"
      />
      <h2 v-else class="flex h-full w-full items-center justify-center">
        <span>Image not available</span>
      </h2>
    </div>
    <div class="flex flex-col gap-1">
      <div
        class="overflow-hidden text-ellipsis whitespace-nowrap font-['Inter'] text-sm opacity-60"
      >
        {{ title }}
      </div>
      <div class="font-['Inter'] text-lg">#{{ id }}</div>
    </div>
  </a>
</template>

<script setup>
const props = defineProps([
  "title",
  "image",
  "id",
  "infoURL",
  "divClass",
  "showImages",
  "links",
  "eucId",
]);

const app = useNuxtApp();

const proportion = ref(1);
const imageWidth = ref(173);
const imageNaturalWidth = ref(0);

const makeImages = async () =>
  await nextTick(() => {
    const images = document.getElementById(`${props.id}_${props.title}`);
    if (images) {
      images.onload = () => {
        imageWidth.value = images.clientWidth;
        imageNaturalWidth.value = images.naturalWidth;
        const height = images.clientHeight;
        if (imageWidth.value !== height) {
          proportion.value = imageWidth.value / height;
        }
      };
    }
  });

const showLightbox = () => {
  app.$nftLightbox.show({
    image: props.image,
    infoURL: props.infoURL,
    id: props.id,
    name: props.title,
    links: props.links,
    eucId: props.eucId,
  });
};

onMounted(async () => {
  if (props.showImages) {
    await makeImages();
  }
});

watch(props, async () => {
  if (props.showImages) {
    await makeImages();
  }
});
</script>
