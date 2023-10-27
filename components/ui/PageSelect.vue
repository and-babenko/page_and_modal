<template>
  <div class="flex items-center justify-between gap-4">
    <div class="font-['Inter'] text-[14px] font-normal leading-6 text-white">
      Show
    </div>
    <div class="select">
      <select @change="changeSelectPage($event.target.value)">
        <option
          v-for="(item, index) in options"
          :key="index"
          :value="item"
          :selected="item == selected ? true : false"
        >
          {{ item }}
        </option>
      </select>
    </div>
    <div class="font-['Inter'] text-[14px] font-normal leading-6 text-white">
      {{ itemsText }}
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  changePageCount: Function,
  selected: {
    type: [Number, String],
    default: 10,
  },
  options: {
    type: Array,
    default: () => [10, 25, 50, 100],
  },
  itemsText: {
    type: String,
    default: "Records",
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const changeSelectPage = (value) => {
  // const data = (value && parseInt(value)) || props.options[0] || 10;
  // props.changePageCount(parseInt(data));
};
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #262626;
  background-image: none;
  flex: 1;
  padding: 0 1em;
  color: #fff;
  cursor: pointer;
  font-size: 0.75em;
  font-family: "Open Sans", sans-serif;
}

select::-ms-expand {
  display: none;
}

.select {
  position: relative;
  display: flex;
  width: 4.5em;
  line-height: 2.5;
  background: #262626;
  overflow: hidden;
  border-radius: 8px;
}

.light select,
.light .select {
  background: rgba(23, 23, 23, 0.08);
  color: rgb(23, 23, 23);
}

.light .select::after {
  background: none;
}
.select::after {
  content: url("../../assets/images/home/select.svg");
  position: absolute;
  top: -3px;
  right: 0;
  padding: 0 0.5em;
  background: #262626;
  cursor: pointer;
  pointer-events: none;
  transition: 0.25s all ease;
}
</style>
