<template>
  <footer>
    &copy; <span>{{ year }}</span> 통장요정. All rights reserved.
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
  width: 100%;
  bottom: 1em;
  left: 50%;
  text-align: center;
  transform: translate(-50%, 0);
}
</style>
