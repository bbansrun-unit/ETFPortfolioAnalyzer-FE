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
$button-background: rgb(0, 89, 178);
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
  box-shadow: rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px;
  z-index: 999;
  cursor: pointer;
}
</style>
