<template>
  <article class="dialog">
    <div class="container">
      <CloseButton @onClose="cancel" :inverted="true" />
      <header>
        <h3>ETF 포트폴리오 결과</h3>
      </header>
      <section class="body">
        <!-- <Donut :data="Object.values(portfolio)" /> -->
        <TableComponent :portfolio="portfolio" :totalAssets="totalAssets" />
      </section>
    </div>
  </article>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
import CloseButton from "@/components/global/CloseButton.vue";
// import Donut from "@/components/charts/Donut.vue";

export default {
  name: "resultDialog",
  props: {
    portfolio: {
      type: Object,
      required: true,
    },
    totalAssets: {
      type: Number,
      required: true,
    },
  },
  components: {
    TableComponent,
    CloseButton,
    // Donut,
  },
  methods: {
    cancel() {
      this.$emit("onCancel");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/dialog";

section {
  max-height: 50vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
