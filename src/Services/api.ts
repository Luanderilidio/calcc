// src/api/index.ts
import axios from 'axios';

// Configuração do Axios (URL base e outros parâmetros)
const api = axios.create({
  baseURL: 'https://api.example.com', // URL base da API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
