import axiosClient from './axiosClient';

const saleCodeApi = {
  getAll(params) {
    const url = '/saleCode';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/saleCode/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/saleCode`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/saleCode/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/saleCode/${id}`;
    return axiosClient.delete(url);
  },
};

export default saleCodeApi;
