<template>
  <div :class="isRelative ? 'relativeBlueGra' : 'blueGra'" />
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(["isRelative"]);
</script>

<style scoped>
.blueGra {
  position: absolute;
  background: rgba(51, 51, 153, 0.15);
  border-radius: 50%;
  transform: translate3d(0, 0, 0);
}

.relativeBlueGra {
  position: relative;
  background: rgba(51, 51, 153, 0.2);
  border-radius: 50%;
  transform: translate3d(0, 0, 0);
}
</style>
