// src/api/index.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

console.log('API_URL:', API_URL); // Verifique se está imprimindo o valor correto no console

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;