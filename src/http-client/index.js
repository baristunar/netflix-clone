import { axiosInstance } from '../utils/axios';

class HttpClient {
  static api_key = `?api_key=${process.env.API_KEY}`;

  static get(url, config) {
    const endpoint = url + this.api_key;
    return axiosInstance.get(endpoint, config);
  }
  static post(url, data = {}, config) {
    const endpoint = url + this.api_key;
    return axiosInstance.post(endpoint, data);
  }
  static put(url, data = {}, config) {
    const endpoint = url + this.api_key;
    return axiosInstance.put(endpoint, data);
  }
  static patch(url, data = {}, config) {
    const endpoint = url + this.api_key;
    return axiosInstance.patch(endpoint, data);
  }
  static delete(url, config) {
    const endpoint = url + this.api_key;
    return axiosInstance.delete(endpoint);
  }
}

export default HttpClient;
