import axios from '../utils/axios';

export default {
  getList() {
    return axios({
      url: '/api/etfs',
      method: 'GET',
    });
  },
  getDetail(code) {
    return axios({
      url: `/api/etf/${code}`,
      method: 'GET',
    });
  },
};
