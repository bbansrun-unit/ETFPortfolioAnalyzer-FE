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
        <td>
          {{ currency(value) }}
        </td>
        <td>{{ ratio(value) }}%</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">
          <i>End of Portfolio</i>
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
      return Object.values(this.portfolio).sort((a, b) => b.amount - a.amount);
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

  & th {
    font-weight: 700;
    font-size: 1.5rem;
    padding: 1rem 0;
  }

  & tr {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    > td {
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

  tfoot {
    td {
      color: #fff;
      background: skyblue;
    }
  }
}
</style>
