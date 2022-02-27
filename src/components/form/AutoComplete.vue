<template>
  <div class="preview">
    <div class="list">
      <div
        class="etf"
        v-for="etf in etfs"
        :key="etf.etfCode"
        @click="onSelected(etf.etfCode)"
      >
        <span>{{ etf.etfCode }}</span>
        <span>{{ etf.etfName }}</span>
      </div>
    </div>
    <div class="message" v-show="etfs.length > 0">
      <span>{{ etfs.length }}개의 검색결과가 있습니다.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "autoComplete",
  props: {
    etfs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onSelected(code) {
      this.$emit("onETFSelected", code);
    },
  },
};
</script>

<style lang="scss" scoped>
$default-color: #000;

.preview {
  position: absolute;
  width: 100%;
  color: $default-color;
  background: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  > .list {
    max-height: 200px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    > .etf {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      cursor: pointer;

      &:hover {
        background: rgba(0, 0, 0, 0.25);
      }
    }
  }

  > .message {
    text-align: center;
    padding: 0.5rem 0;
    background: #e9e9e9;
  }
}
</style>
