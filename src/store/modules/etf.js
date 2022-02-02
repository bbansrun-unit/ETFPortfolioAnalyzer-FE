/* eslint-disable no-param-reassign */
import Api from "@/api";

export const etf = {
  namespaced: true,
  state: () => ({
    list: [],
    filter: {},
    portfolio: {},
    totalAssets: 0,
  }),
  mutations: {
    add(state, { data, retains }) {
      data.forEach((compst) => {
        const amount = (compst.COMPST_RTO * retains) / 100;
        // eslint-disable-next-line no-prototype-builtins
        if (state.portfolio.hasOwnProperty(compst.COMPST_ISU_CD)) {
          state.portfolio[compst.COMPST_ISU_CD].value += amount;
        } else {
          state.portfolio[compst.COMPST_ISU_CD] = {
            group: compst.COMPST_ISU_NM,
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
  },
  actions: {
    async list({ commit }) {
      commit("fetchList", await Api.getList());
    },
    async query({ commit }, payload) {
      commit("filter", await Api.getDetail(payload));
    },
    async addPortfolio({ commit }, { code, retains }) {
      const { data } = await Api.getDetail(code);
      commit("add", {
        data,
        retains,
      });
    },
  },
};
