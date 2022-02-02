<template>
  <form class="search" @submit.prevent>
    <div class="container">
      <div class="input-group">
        <input
          type="text"
          name="etf"
          v-model="query"
          @keyup.enter.prevent="enterOnInput"
          @keyup="filter"
          autofocus
          autocomplete="off"
          placeholder="ETF 코드 혹은 명칭을 입력하세요."
          :class="{ active: active.autocomplete || active.inputDialog }"
          :disabled="active.inputDialog"
        />
        <AutoComplete
          v-if="active.autocomplete"
          :etfs="filteredList"
          @onETFSelected="reqAddPortfolio"
        />
      </div>
      <div class="input-group">
        <InputDialog
          v-show="active.inputDialog"
          :etf="selectedETF"
          @onCancel="init"
          @onDataInput="register"
        />
      </div>
    </div>
  </form>
</template>

<script>
import AutoComplete from "@/components/form/AutoComplete.vue";
import InputDialog from "@/components/dialog/InputDialog.vue";

export default {
  name: "searchForm",
  data() {
    return {
      query: "",
      selectedETF: {},
      active: {
        autocomplete: false,
        inputDialog: false,
      },
      allList: [],
      filteredList: [],
      portfolio: [],
    };
  },
  components: {
    AutoComplete,
    InputDialog,
  },
  watch: {
    query(value) {
      if (value) {
        this.active.autocomplete = true;
      } else {
        this.active.autocomplete = false;
      }
    },
  },
  async mounted() {
    await this.$store.dispatch("etf/list");
    this.allList = this.$store.getters["etf/list"].data;
  },
  methods: {
    async filter() {
      this.filteredList = this.allList.filter(
        (etf) =>
          etf.ISU_SRT_CD.indexOf(this.query) !== -1 ||
          etf.ISU_ABBRV.toLowerCase().indexOf(this.query) !== -1
      );
    },
    reqAddPortfolio(code) {
      const etfInfo = this.allList.find((etf) => etf.ISU_SRT_CD === code);
      this.selectedETF = etfInfo;
      this.active.autocomplete = false;
      this.active.inputDialog = true;
    },
    register(data) {
      this.portfolio.push(data);
      this.$store.dispatch("etf/addPortfolio", data);
      this.init();
      this.$emit("onUpdate", this.portfolio.length > 0);
    },
    enterOnInput() {
      if (this.filteredList.length === 1) {
        const code = this.filteredList[0].ISU_SRT_CD;
        this.reqAddPortfolio(code);
      }
    },
    init() {
      this.query = "";
      this.active.inputDialog = false;
      this.selectedETF = {};
    },
  },
};
</script>

<style lang="scss">
.input-group {
  position: relative;
  margin: 0 2em;
  input {
    width: 100%;
    margin: 0 auto;
  }
}
</style>

<style lang="scss" scoped>
input[type="text"] {
  font: {
    size: 1.5em;
  }
  padding: 0.5em 1em;
  border: {
    radius: 2em;
    width: 1px;
    style: solid;
    color: rgba(0, 0, 0, 0.2);
  }
  transition: border-radius 500ms ease-out;

  &.active {
    border: {
      radius: 1em 1em 0 0;
    }
  }

  &::placeholder {
    opacity: 0.5;
  }

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
}
</style>
