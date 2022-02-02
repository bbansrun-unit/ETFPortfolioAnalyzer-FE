<template>
  <div class="cover" :style="{ zIndex }"></div>
</template>

<script>
export default {
  props: {
    zIndex: {
      type: Number,
      required: false,
    },
  },
};
</script>

<style>
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
}
</style>
