import axios from "@/utils/axios";

export default {
  getList(payload) {
    if (payload) {
      return axios({
        url: `/api/etfs?size=${payload}`,
        method: 'GET',
      })
    }

    return axios({
      url: "/api/etfs",
      method: "GET",
    });
  },
  getDetail(code) {
    return axios({
      url: `/api/etf/${code}/stocks`,
      method: "GET",
    });
  },
};
