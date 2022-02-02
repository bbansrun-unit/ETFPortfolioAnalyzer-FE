export const constants = {
  namespaced: true,
  state: () => ({
    appTitle: "ETF 포트폴리오 분석",
  }),
  getters: {
    appTitle(state) {
      return state.appTitle;
    },
  },
};
