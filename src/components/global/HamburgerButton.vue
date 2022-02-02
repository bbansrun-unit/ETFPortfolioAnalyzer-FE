<template>
  <button class="hamburger" :class="{ active }" @click="updateActive">
    <div></div>
    <div></div>
    <div></div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    updateActive() {
      this.active = !this.active;
      this.$emit("onLNBActive");
    },
  },
};
</script>

<style lang="scss" scoped>
$button-each-width: 5px;
$button-size-ratio: 5;
$button-size-width: 40px;
$button-size-height: $button-each-width * ($button-size-ratio + 1);
$button-color: #fff;
$button-color-inv: #000;

.hamburger {
  position: fixed;
  width: $button-size-width;
  height: $button-size-height;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0 !important;
  margin: 1em 0.5em 1em 1em;
  transform: rotate(0deg);
  transition: 500ms ease-in-out;
  z-index: 10000;

  &.active {
    > div {
      background: $button-color-inv;

      &:nth-of-type(1) {
        top: $button-each-width * 2;
        transform: rotate(135deg);
      }

      &:nth-of-type(2) {
        opacity: 0;
        left: -80px;
      }

      &:nth-of-type(3) {
        top: $button-each-width * 2;
        transform: rotate(-135deg);
      }
    }
  }

  > div {
    display: block;
    position: absolute;
    width: 100%;
    height: $button-each-width;
    background: $button-color;
    border: {
      radius: $button-each-width;
    }
    left: 0;
    opacity: 1;
    transform: rotate(0deg);
    transition: 500ms ease-in-out;

    &:nth-of-type(1) {
      top: 0px;
    }

    &:nth-of-type(2) {
      top: $button-each-width * calc($button-size-ratio / 2);
    }

    &:nth-of-type(3) {
      top: $button-each-width * $button-size-ratio;
    }
  }
}
</style>
