<template>
  <button class="calculate" @click="calculate">
    <font-awesome-icon icon="calculator"></font-awesome-icon>
  </button>
</template>

<script>
export default {
  name: "calculateButton",
  methods: {
    calculate() {
      this.$emit("onCalculate", true);
    },
  },
};
</script>

<style lang="scss" scoped>
$button-size: 80px;
$button-background: skyblue;
$button-type-circle: 50%;

.calculate {
  position: fixed;
  right: 1em;
  bottom: 1em;

  width: $button-size;
  height: $button-size;
  background: {
    color: $button-background;
  }
  border: {
    width: 0;
    radius: $button-type-circle;
  }
  color: #fff;
  font: {
    size: 1.5em;
  }
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 999;
  cursor: pointer;
}
</style>
