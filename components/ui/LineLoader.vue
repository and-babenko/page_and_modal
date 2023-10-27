<template>
  <span class="loader" />
</template>

<style scoped>
.loader {
  color: rgba(255, 255, 255, 0.5);
  position: relative;
  font-size: 11px;
  background: rgba(255, 255, 255, 0.5);
  animation: escaleY 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 0;
  left: 2em;
  background: rgba(255, 255, 255, 0.5);
  width: 1em;
  height: 4em;
  animation: escaleY 1s infinite ease-in-out;
}
.loader:before {
  left: -2em;
  animation-delay: -0.32s;
}
.light .loader,
.light .loader:before,
.light .loader:after {
  background: rgba(0, 0, 0, 0.5);
}

@keyframes escaleY {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
