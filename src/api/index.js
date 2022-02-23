import axios from "@/utils/axios";

export default {
  getList() {
    return axios({
      url: "/analyzer/etfs",
      method: "GET",
    });
  },
  getDetail(code) {
    return axios({
      url: `/analyzer/etf/${code}`,
      method: "GET",
    });
  },
};
