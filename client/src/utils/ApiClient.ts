const API_BASE_URL = 'http://localhost:3000';

interface ApiClientOptions extends RequestInit {
  headers?: HeadersInit;
}

export async function ApiClient(endpoint: string, options: ApiClientOptions, body: Record<string, string> | FormData) {
  const config: RequestInit = {
    method: 'GET',
    ...options,
    headers: {
      ...options.headers,
    },
    body: body instanceof FormData ? body : JSON.stringify(body),
  };

  return fetch(`${API_BASE_URL}/${endpoint}`, config);
}
