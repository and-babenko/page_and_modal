<template>
  <div class="relative z-10 flex min-h-[100vh] flex-col overflow-hidden">
    <Header />
    <slot class="relative z-0 flex-1" />
    <Footer />
    <NFTLightbox />
  </div>
</template>
