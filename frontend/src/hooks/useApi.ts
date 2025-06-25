import { API_BASE_URL } from '../config/api';

export const useApi = () => {
  const getApiUrl = (endpoint: string) => {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    return `${API_BASE_URL}${cleanEndpoint}`;
  };
  
  return { getApiUrl, baseUrl: API_BASE_URL };
};