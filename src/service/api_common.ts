import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const fullUrl = this.baseUrl + url;
    const response: AxiosResponse<T> = await axios.get(fullUrl, config);
    return response.data;
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const fullUrl = this.baseUrl + url;
    const response: AxiosResponse<T> = await axios.post(fullUrl, data, config);
    return response.data;
  }

  // Add more methods for other HTTP methods like PUT, PATCH, DELETE, etc.
  public async request<T>(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const fullUrl = this.baseUrl + url;
    const response: AxiosResponse<T> = await axios.request({
      method,
      url: fullUrl,
      data,
      ...config,
    });
    return response.data;
  }
}

export default ApiClient;
