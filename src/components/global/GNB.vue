<template>
  <nav class="gnb">
    <header>
      <h1>{{ title }}</h1>
    </header>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.gnb {
  position: fixed;
  width: 100%;
  height: calc(30px + 2em);
  padding: {
    left: calc(40px + 1.5em);
  }
  top: 0;
  left: 0;
  z-index: 2;

  header {
    height: inherit;
  }
}

h1 {
  display: inline-block;
  height: inherit;
  font: {
    size: 1.5em;
  }
  line-height: 2.5em;
}
</style>
