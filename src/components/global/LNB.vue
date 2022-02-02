<template>
  <nav class="lnb">
    <Cover :zIndex="-1" />

    <section class="body">
      <header>
        <h2>{{ appTitle }}</h2>
      </header>

      <hr />

      <LNBMenu />
    </section>
  </nav>
</template>

<script>
import Cover from "@/components/global/Cover.vue";
import LNBMenu from "@/components/global/LNBMenu.vue";

export default {
  components: {
    Cover,
    LNBMenu,
  },
  data() {
    return {
      appTitle: "",
    };
  },
  mounted() {
    this.appTitle = this.$store.getters["constants/appTitle"];
  },
};
</script>

<style lang="scss" scoped>
$default-color: #000;
$background: #fff;

.lnb {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  color: $default-color;
  z-index: 1001;

  > .body {
    width: 400px;
    height: inherit;
    padding: {
      top: calc(50px + 1em);
    }
    background: $background;
  }
}

header {
  padding: 0 1em;
  h2 {
    font: {
      size: 2em;
    }
  }
}

hr {
  width: 70%;
  margin: 1.5em 1em;
  border: {
    style: solid;
    width: 1px;
  }
  outline: none;
}
</style>
