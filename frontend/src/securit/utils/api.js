import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', 
});

export const forgotPassword = (email) => api.post('/forgot-password/forgot-password', { email });
export const resetPassword = (token, newPassword) => api.post('/forgot-password/reset-password', { token, newPassword });

export default api;