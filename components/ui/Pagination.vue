<template>
  <div class="flex gap-2 font-[Inter]">
    <button
      class="rounded-lg bg-white bg-opacity-10 px-2 py-2 sm:px-4"
      :style="isFirstPageButtonDisabled ? 'opacity: 0.3' : ''"
      :disabled="isFirstPageButtonDisabled"
      @click="firstPageClick"
    >
      <div class="text-[10px] font-medium leading-3 sm:text-xs">FIRST</div>
    </button>
    <button
      class="rounded-lg bg-white bg-opacity-10 p-2"
      :style="isPreviousPageButtonDisabled ? 'opacity: 0.3' : ''"
      :disabled="isPreviousPageButtonDisabled"
      @click="previousPage"
    >
      <div class="text-[10px] font-medium leading-3 sm:text-xs">
        <span class="arrow-left"></span>
      </div>
    </button>
    <div
      class="rounded-lg bg-white bg-opacity-10 px-2 py-2 text-center text-xs sm:px-3"
    >
      <span v-if="totalItemsCount">
        {{ pageInfo }}
      </span>
      <span v-else>
        {{ currentPageView }}
      </span>
    </div>
    <button
      class="rounded-lg bg-white bg-opacity-10 p-2"
      :style="isNextPageButtonDisabled ? 'opacity: 0.3' : ''"
      :disabled="isNextPageButtonDisabled"
      @click="nextPage"
    >
      <div class="text-[10px] font-medium leading-3 sm:text-xs">
        <span class="arrow-right"></span>
      </div>
    </button>
    <button
      v-if="totalItemsCount"
      class="rounded-lg bg-white bg-opacity-10 px-2 py-2 sm:px-4"
      :style="isLastPageButtonDisabled ? 'opacity: 0.3' : ''"
      :disabled="isLastPageButtonDisabled"
      @click="lastPageClick"
    >
      <div class="text-[10px] font-medium leading-3 sm:text-xs">LAST</div>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  forcePage: {
    // old
    type: Function,
    default: () => {},
  },
  firstBtnClick: {
    // old
    type: Function,
    default: () => {},
  },
  setPage: {
    type: Function,
    default: () => {},
  },
  totalItemsCount: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 0,
  },
  currentPageSize: {
    type: Number,
    default: 25,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const totalPages = computed(() =>
  Math.ceil(props.totalItemsCount / props.currentPageSize),
);
const currentPageView = computed(() => `Page ${props.currentPage + 1}`);
const pageInfo = computed(() => `${currentPageView.value}/${totalPages.value}`);
const isButtonsDisabled = computed(() => props.isLoading);
const isFirstPageButtonDisabled = computed(
  () => !props.currentPage || isButtonsDisabled.value,
);
const isLastPageButtonDisabled = computed(
  // () => props.currentPage === totalPages.value - 1 || isButtonsDisabled.value,
  () => true,
);
const isNextPageButtonDisabled = computed(() => isLastPageButtonDisabled.value);
const isPreviousPageButtonDisabled = computed(
  () => isFirstPageButtonDisabled.value,
);

const changePage = (index) => {
  props.forcePage(index); // old
  props.setPage(index);
};
const firstPageClick = () => {
  if (isFirstPageButtonDisabled.value) {
    return;
  }
  props.firstBtnClick(); // old
  changePage(0);
};
const lastPageClick = () => {
  if (isLastPageButtonDisabled.value) {
    return;
  }
  changePage(totalPages.value - 1 || 0);
};
const nextPage = () => {
  if (isNextPageButtonDisabled.value) {
    return;
  }
  changePage(parseInt(props.currentPage) + 1);
};
const previousPage = () => {
  if (isPreviousPageButtonDisabled.value) {
    return;
  }
  changePage(parseInt(props.currentPage) - 1);
};
</script>

<style scoped>
.arrow-left {
  display: inline-block;
  width: 16px;
  height: 8px;
  background-color: white;
  -webkit-mask: url("~/assets/images/home/arrow-left.svg") no-repeat center;
  mask: url("~/assets/images/home/arrow-left.svg") no-repeat center;
}
.arrow-right {
  display: inline-block;
  width: 16px;
  height: 8px;
  background-color: white;
  -webkit-mask: url("~/assets/images/home/arrow-right.svg") no-repeat center;
  mask: url("~/assets/images/home/arrow-right.svg") no-repeat center;
}

.light .arrow-left,
.light .arrow-right {
  background-color: black;
}
</style>
