<template>
  <table>
    <thead>
      <tr>
        <th>종목명</th>
        <th>총 매수금액</th>
        <th>비중</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ group, value } in portfolioByRank" :key="group">
        <td>{{ group }}</td>
        <td>{{ currency(value) }}</td>
        <td>{{ ratio(value) }}%</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">
          <i
            >현재 시점에서의 포트폴리오 비중을 표시한 것입니다. 시장 상황에 따라
            변동이 가능합니다.</i
          >
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
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
  computed: {
    portfolioByRank() {
      return Object.values(this.portfolio).sort((a, b) => b.value - a.value);
    },
  },
  methods: {
    currency(value) {
      return Math.round(value)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    ratio(value) {
      return ((value / this.totalAssets) * 100).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
$default-color: #000;

table {
  width: 100%;
  color: $default-color;
  border: {
    spacing: 0 1rem;
    collapse: separate;
  }

  thead {
    tr {
      color: #fff;
      background: rgb(0, 89, 178);

      th {
        font-weight: 100;
        font-size: 1.5rem;
        padding: 1rem 0;
      }

      box-shadow: rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px;
    }
  }

  tbody {
    tr {
      background: #fff;
      box-shadow: rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px;

      td {
        font-size: 1.2rem;
        padding: 1rem 0.5rem;
        &:nth-of-type(2),
        &:nth-of-type(3) {
          font-weight: 300;
          font-size: 1.4rem;
          text-align: center;
        }
      }
    }
  }

  tfoot {
    tr {
      background: linear-gradient(
        to right bottom,
        rgb(0, 127, 255),
        rgb(0, 89, 178) 120%
      );
      td {
        color: #fff;
        padding: 1rem 0.5rem;
      }
    }
  }
}
</style>
