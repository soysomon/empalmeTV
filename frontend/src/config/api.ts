// config/api.ts
// Detectar entorno basado en la URL del navegador
const isDevelopment = window.location.hostname === 'localhost' ||
                     window.location.hostname === '127.0.0.1' ||
                     window.location.hostname === '0.0.0.0' ||
                     window.location.port === '5173' || // Vite default port
                     window.location.port === '3000';   // React default port

// URLs de la API
const DEVELOPMENT_API_URL = 'http://localhost:5001/api';
const PRODUCTION_API_URL = 'https://empalmetv-production.up.railway.app/api';

// Seleccionar la URL correcta según el entorno
export const API_BASE_URL = isDevelopment ? DEVELOPMENT_API_URL : PRODUCTION_API_URL;

console.log('Entorno detectado:', isDevelopment ? 'desarrollo' : 'producción');
console.log('Hostname actual:', window.location.hostname);
console.log('API URL configurada:', API_BASE_URL);