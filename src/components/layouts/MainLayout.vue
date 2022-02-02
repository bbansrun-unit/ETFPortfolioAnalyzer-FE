<template>
  <main>
    <HamburgerButton @onLNBActive="active.lnb = !active.lnb" />
    <GNB :title="appName" />
    <LNB v-show="active.lnb" />

    <Cover />

    <section class="content">
      <header class="large">
        <strong>
          <span>보유하고 있는 ETF 정보를 입력해서</span>
          <br />
          <span><em>각 종목의 포트폴리오 내 비중</em>을 확인해보세요.</span>
        </strong>
      </header>
      <SearchForm @onUpdate="updated" />
      <ResultDialog
        v-if="active.resultDialog"
        :portfolio="portfolio"
        :totalAssets="totalAssets"
        @onCancel="closeResult"
      />
    </section>
    <CalculateButton
      v-if="active.calculateButton"
      @onCalculate="calculate"
      v-tooltip.left="`계산하기를 눌러 종목별 비중을 확인하세요.`"
    />

    <FooterComponent />
  </main>
</template>

<script>
import LNB from "@/components/global/LNB.vue";
import GNB from "@/components/global/GNB.vue";
import Cover from "@/components/Cover.vue";
import SearchForm from "@/components/form/SearchForm.vue";
import ResultDialog from "@/components/ResultDialog.vue";
import CalculateButton from "@/components/CalculateButton.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import HamburgerButton from "@/components/global/HamburgerButton.vue";

export default {
  name: "MainLayout",
  data() {
    return {
      appName: "",
      active: {
        lnb: false,
        calculateButton: false,
        resultDialog: false,
      },
      portfolio: [],
      totalAssets: 0,
    };
  },
  components: {
    LNB,
    GNB,
    Cover,
    SearchForm,
    ResultDialog,
    CalculateButton,
    FooterComponent,
    HamburgerButton,
  },
  mounted() {
    this.appName = this.$store.getters["constants/appTitle"];
  },
  methods: {
    updated(available) {
      if (available) {
        this.active.calculateButton = true;
      }
    },
    calculate() {
      this.active.resultDialog = true;
      this.portfolio = this.$store.getters["etf/portfolio"];
      this.totalAssets = this.$store.getters["etf/totalAssets"];
    },
    closeResult() {
      this.active.resultDialog = false;
      this.active.calculateButton = false;
      this.portfolio = [];
      this.totalAssets = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
$default-color: #fff;

main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: $default-color;
  background: {
    image: url("https://w.namu.la/s/cc47145790e2f1e2f1f8e76f5b8e476b96057b8f7f91a5812cf1f193f5552d14d0f9d23236c032049e11986a22945266cbdd0f3647212526d385b50215c1ee5df74f2e9d544c761a969deb3090b875bd032347af540178f7df4583827585ba11");
    repeat: no-repeat;
    attachment: fixed;
    position: center;
    size: cover;
  }
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  z-index: 1;
}

header.large {
  z-index: 2;
  color: #fff;

  font: {
    weight: 300;
    size: 3rem;
  }
  text: {
    align: center;
  }
  margin: {
    bottom: 1em;
  }
  em {
    font: {
      weight: 700;
    }
    text: {
      decoration: underline;
    }
  }
}
</style>

<style lang="scss">
.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
