
import axios from "axios";


const axiosHttp = axios.create({
  baseURL: import.meta.env.VITE_DATABASE_URL,
  withCredentials: false,
});



axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";


axiosHttp.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  async (error) => {

    return Promise.reject(error);
  }
);

export default axiosHttp;
