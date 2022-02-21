import axios from "@/utils/axios";

export default {
  getList() {
    return axios({
      url: "/list",
      method: "GET",
    });
  },
  getDetail(code) {
    return axios({
      url: `/compositions/${code}`,
      method: "GET",
    });
  },
};
