<template>
  <article class="dialog">
    <CloseButton @onClose="cancel" />
    <form @submit.prevent>
      <section class="container">
        <header>
          <h3>{{ etf.ISU_ABBRV }}</h3>
          포트폴리오 등록
        </header>

        <div class="divider"></div>

        <div class="input-group">
          <label for="avgBuy">평균매수가</label>
          <input
            type="number"
            name="avgBuy"
            v-model="buy"
            min="0"
            @keyup.enter="register"
            placeholder="평균 매수가를 입력해주세요."
            required
            autofocus
          />
        </div>
        <div class="input-group">
          <label for="amount">수량</label>
          <input
            type="number"
            name="amount"
            v-model="amount"
            min="0"
            @keyup.enter="register"
            placeholder="보유 수량을 입력해주세요."
            required
          />
        </div>
        <div class="input-group">
          <button type="submit" @click="register">등록</button>
        </div>
      </section>
    </form>
  </article>
</template>

<script>
import CloseButton from "@/components/global/CloseButton.vue";

export default {
  components: { CloseButton },
  name: "inputDialog",
  props: {
    etf: {
      type: Object,
      required: true,
    },
  },
  watch: {
    etf(value) {
      if (value) {
        this.init();
      }
    },
  },
  data() {
    return {
      buy: null,
      amount: null,
    };
  },
  methods: {
    init() {
      this.buy = 0;
      this.amount = 0;
    },
    cancel() {
      this.$emit("onCancel");
    },
    register() {
      if (this.buy > 0 && this.amount > 0) {
        this.$emit("onDataInput", {
          code: this.etf.ISU_SRT_CD,
          retains: this.buy * this.amount,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/dialog";

$default-color: #000;
$background: #fff;

.dialog {
  padding: 1em;
  color: $default-color;
  background: $background;

  header {
    font: {
      weight: 100;
    }

    h3 {
      font: {
        size: 3rem;
      }
      overflow: hidden;
      text: {
        overflow: ellipsis;
      }
      white-space: nowrap;
    }
  }
}

button[type="submit"] {
  display: block;
  font: {
    weight: 100;
  }
  width: 100%;
  padding: 1em;
  background: #7952b3;
  color: #fff;
  cursor: pointer;
  border: {
    radius: 0.5em;
    width: 0;
    color: none;
  }
}

.input-group {
  margin: {
    bottom: 1em;
  }
}

input[type="number"] {
  padding: 1em;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
  }
}
</style>
