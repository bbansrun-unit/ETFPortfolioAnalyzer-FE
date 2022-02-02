<template>
  <button class="close" @click="onClose" :class="{ inverted }">
    <div></div>
    <div></div>
  </button>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    onClose() {
      this.$emit("onClose");
    },
  },
};
</script>

<style lang="scss" scoped>
$button-each-width: 2px;
$button-size-ratio: 8;
$button-size-width: 30px;
$button-size-height: $button-each-width * ($button-size-ratio + 1);
$button-color: #fff;
$button-color-inv: #000;

.close {
  position: absolute;
  right: 1em;
  width: $button-size-width;
  height: $button-size-height;
  margin: 0.5em 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0 !important;
  transform: rotate(0deg);
  transition: 500ms ease-in-out;
  z-index: 10000;

  &.inverted {
    > div {
      background: $button-color;
    }
  }

  > div {
    display: block;
    position: absolute;
    width: 100%;
    height: $button-each-width;
    background: $button-color-inv;
    border: {
      radius: $button-each-width;
    }
    left: 0;
    opacity: 1;
    transform: rotate(0deg);
    transition: 500ms ease-in-out;

    &:nth-of-type(1) {
      top: $button-each-width * 2;
      transform: rotate(135deg);
    }

    &:nth-of-type(2) {
      top: $button-each-width * 2;
      transform: rotate(-135deg);
    }
  }
}
</style>
