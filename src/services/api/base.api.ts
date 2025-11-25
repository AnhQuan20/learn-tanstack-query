
import type { CancelToken } from "axios";
import axiosHttp from "../interceptor/api.interceptor";


class BaseApiService {
  getData = async (
    url: string,
    params?: any,
    cancelToken?: CancelToken | undefined
  ): Promise<any> => {
    try {
      const response = await axiosHttp.get(url, {
        params,
        cancelToken: cancelToken,
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  postData = async (url: string, request?: any, header?: any): Promise<any> => {
    try {
      const response = await axiosHttp.post(url, request, header);
      return response;
    } catch (error) {
      return error;
    }
  };

  putData = async (url: string, request?: any): Promise<any> => {
    try {
      const response = await axiosHttp.put(url, request);
      return response;
    } catch (error) {
      return error;
    }
  };

  deleteData = async (url: string, request?: any): Promise<any> => {
    try {
      const response = await axiosHttp.delete(url, request);
      return response;
    } catch (error) {
      return error;
    }
  };
}

export default BaseApiService;
