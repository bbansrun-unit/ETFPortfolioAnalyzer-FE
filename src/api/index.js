import axios from "@/utils/axios";

export default {
  getList(payload) {
    if (payload) {
      return axios({
        url: `/analyzer/etfs?size=${payload}`,
        method: 'GET',
      })
    }

    return axios({
      url: "/analyzer/etfs",
      method: "GET",
    });
  },
  getDetail(code, elements=null) {
    if (elements) {
      return axios({
        url: `/analyzer/isustocks/search/etf?etfCode=${code}&size=${elements}`,
        method: 'GET',
      })
    }

    return axios({
      url: `/analyzer/isustocks/search/etf?etfCode=${code}`,
      method: "GET",
    });
  },
};
