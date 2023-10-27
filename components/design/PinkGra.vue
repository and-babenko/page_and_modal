<template>
  <div :class="isRelative ? 'relativePinkGra' : 'pinkGra'" />
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(["isRelative"]);
</script>

<style scoped>
.pinkGra {
  position: absolute;
  background: rgba(255, 0, 204, 0.15);
  border-radius: 50%;
  transform: translate3d(0, 0, 0);
}

.relativePinkGra {
  border-radius: 50%;
  position: relative;
  background: rgba(255, 0, 204, 0.2);
  position: relative;
}
</style>
