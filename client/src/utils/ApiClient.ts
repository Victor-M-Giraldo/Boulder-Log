/* eslint-disable @typescript-eslint/no-explicit-any */
import { ValidationError } from '../errors/ValidationError';
import { ApiError } from '../errors/ApiError';

interface ApiClientOptions extends RequestInit {
  headers?: HeadersInit;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = import.meta.env.VITE_BASE_API_URL) {
    this.baseUrl = baseUrl;
  }

  async request<T>(
    endpoint: string,
    options?: ApiClientOptions,
    body?: Record<string, any> | FormData
  ): Promise<T> {
    const config: RequestInit = {
      method: 'GET',
      ...options,
      headers: {
        ...options?.headers,
      },
      body:
        body instanceof FormData
          ? body
          : body
          ? JSON.stringify(body)
          : undefined,
    };

    const response = await fetch(`${this.baseUrl}/${endpoint}`, config);

    if (!response.ok) {
      const errorData = await response.json();
      switch (response.status) {
        case 400:
          throw new ValidationError(errorData);
        case 401:
          throw new ApiError(401, errorData.message);
        case 403:
          throw new ApiError(403, errorData);
        case 404:
          throw new ApiError(404, errorData);
        case 500:
          throw new ApiError(500, errorData);
        default:
          throw new ApiError(response.status, errorData);
      }
    }

    return (await response.json()) as T;
  }

  async get<T>(endpoint: string, options?: ApiClientOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  async post<T>(
    endpoint: string,
    body: Record<string, any> | FormData,
    options?: ApiClientOptions
  ): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'POST' }, body);
  }

  async put<T>(
    endpoint: string,
    body: Record<string, any> | FormData,
    options?: ApiClientOptions
  ): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'PUT' }, body);
  }

  async delete<T>(endpoint: string, options?: ApiClientOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}
export default new ApiClient();
