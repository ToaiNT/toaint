import axiosClient from './axiosClient';

const typeProductApi = {
  getAll(params) {
    const url = '/navPath';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/navPath/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/navPath`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/navPath/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/navPath/${id}`;
    return axiosClient.delete(url);
  },
};

export default typeProductApi;
