import axiosClient from './axiosClient';

const khuyenMaiApi = {
  getAll(params) {
    const url = '/sale';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/sale/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/sale`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/sale/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/sale/${id}`;
    return axiosClient.delete(url);
  },
};

export default khuyenMaiApi;
