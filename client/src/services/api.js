import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('authToken');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Stock API endpoints
export const stockAPI = {
    getQuote: (symbol) => api.get(`/stocks/quote/${symbol}`),
    getTopGainers: () => api.get('/stocks/top-gainers'),
    getTopLosers: () => api.get('/stocks/top-losers'),
};

// Crypto API endpoints
export const cryptoAPI = {
    getPrice: (symbol) => api.get(`/crypto/price/${symbol}`),
    getPrices: () => api.get('/crypto/prices'),
    getTop: (limit = 10) => api.get(`/crypto/top?limit=${limit}`),
};

// News API endpoints
export const newsAPI = {
    getLatest: (limit = 10) => api.get(`/news/latest?limit=${limit}`),
    getByCategory: (category, limit = 10) => api.get(`/news/category/${category}?limit=${limit}`),
    getBySymbol: (symbol, limit = 5) => api.get(`/news/symbol/${symbol}?limit=${limit}`),
};

// Health check
export const healthCheck = () => api.get('/health');

export default api;
