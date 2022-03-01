/* eslint-disable no-param-reassign */
import Api from "@/api";

export const etf = {
  namespaced: true,
  state: () => ({
    list: [],
    filter: {},
    portfolio: {},
    totalAssets: 0,
    totalElements: 0,
  }),
  mutations: {
    getElements(state, data) {
      state.totalElements = data;
    },
    add(state, { data, retains }) {
      data['data'].forEach((compst) => {
        const amount = (compst.stockRatio * retains) / 100;
        // eslint-disable-next-line no-prototype-builtins
        if (state.portfolio.hasOwnProperty(compst.stockCode)) {
          state.portfolio[compst.stockCode].value += amount;
        } else {
          state.portfolio[compst.stockCode] = {
            group: compst.stockName,
            value: amount,
          };
        }
        state.totalAssets += amount;
      });
    },
    fetchList(state, value) {
      state.list = value;
    },
    filter(state, value) {
      state.filter = value;
    },
  },
  getters: {
    list(state) {
      return state.list;
    },
    portfolio(state) {
      return state.portfolio;
    },
    totalAssets(state) {
      return state.totalAssets;
    },
    totalElements(state) {
      return state.something;
    }
  },
  actions: {
    async list({ commit }, payload) {
      let { data } = await Api.getList(payload);
      commit("fetchList", data);
    },
    async query({ commit }, payload) {
      commit("filter", await Api.getDetail(payload));
    },
    async addPortfolio({ commit, state }, { code, retains }) {
      const { data: page } = await Api.getDetail(code, null);
      commit("getElements", page);

      const { data } = await Api.getDetail(code, state.totalElements);
      commit("add", {
        data,
        retains,
      });
    },
  },
};
