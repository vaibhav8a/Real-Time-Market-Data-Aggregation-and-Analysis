import axios from 'axios';
import { API_KEYS, API_BASE_URLS } from '../config/apiKeys.js';

// Mock crypto data for development
const mockCryptoData = {
    'BTC': { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', price: 45230.50, change: 1250.30, changePercent: 2.84, marketCap: 882456000000, volume24h: 28934000000 },
    'ETH': { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', price: 2385.75, change: 45.20, changePercent: 1.92, marketCap: 285934000000, volume24h: 12845000000 },
    'BNB': { id: 'binancecoin', symbol: 'BNB', name: 'Binance Coin', price: 612.45, change: 15.32, changePercent: 2.56, marketCap: 93456000000, volume24h: 1234000000 },
    'XRP': { id: 'ripple', symbol: 'XRP', name: 'Ripple', price: 0.52, change: 0.02, changePercent: 3.84, marketCap: 28934000000, volume24h: 1845000000 },
    'ADA': { id: 'cardano', symbol: 'ADA', name: 'Cardano', price: 0.98, change: -0.03, changePercent: -2.95, marketCap: 35234000000, volume24h: 834000000 },
    'SOL': { id: 'solana', symbol: 'SOL', name: 'Solana', price: 142.34, change: 5.23, changePercent: 3.81, marketCap: 61234000000, volume24h: 2345000000 },
    'DOGE': { id: 'dogecoin', symbol: 'DOGE', name: 'Dogecoin', price: 0.28, change: 0.01, changePercent: 3.57, marketCap: 40234000000, volume24h: 1123000000 },
    'LINK': { id: 'chainlink', symbol: 'LINK', name: 'Chainlink', price: 28.45, change: -0.89, changePercent: -3.02, marketCap: 13934000000, volume24h: 567000000 },
};

export const getCryptoPrice = async (symbol) => {
    try {
        // For now, return mock data
        if (mockCryptoData[symbol]) {
            return mockCryptoData[symbol];
        }

        // Placeholder for actual API call
        return {
            symbol,
            price: Math.random() * 50000,
            change: (Math.random() - 0.5) * 5000,
            changePercent: (Math.random() - 0.5) * 10,
        };
    } catch (error) {
        console.error(`Error fetching crypto price for ${symbol}:`, error.message);
        throw error;
    }
};

export const getCryptoPrices = async (symbols = []) => {
    try {
        if (symbols.length === 0) {
            return Object.values(mockCryptoData);
        }
        return symbols
            .map(symbol => mockCryptoData[symbol])
            .filter(crypto => crypto !== undefined);
    } catch (error) {
        console.error('Error fetching crypto prices:', error.message);
        throw error;
    }
};

export const getTopCryptos = async (limit = 10) => {
    try {
        return Object.values(mockCryptoData).slice(0, limit);
    } catch (error) {
        console.error('Error fetching top cryptos:', error.message);
        throw error;
    }
};

export default {
    getCryptoPrice,
    getCryptoPrices,
    getTopCryptos,
};
