const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

export const API_BASE_URL = `${API_URL}/api`;
export const API_URL_BASE = API_URL;

console.log('🚀 API URL configurada:', API_URL);