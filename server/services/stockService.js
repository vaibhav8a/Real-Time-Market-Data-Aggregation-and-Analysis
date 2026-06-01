import axios from 'axios';
import { API_KEYS, API_BASE_URLS } from '../config/apiKeys.js';

// Mock stock data for development
const mockStockData = {
    'AAPL': { symbol: 'AAPL', name: 'Apple Inc.', price: 182.45, change: 2.35, changePercent: 1.31 },
    'GOOGL': { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 140.23, change: -1.45, changePercent: -1.02 },
    'MSFT': { symbol: 'MSFT', name: 'Microsoft Corporation', price: 378.91, change: 3.12, changePercent: 0.83 },
    'AMZN': { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 175.43, change: -2.18, changePercent: -1.23 },
    'TSLA': { symbol: 'TSLA', name: 'Tesla Inc.', price: 242.84, change: 5.23, changePercent: 2.20 },
    'NFLX': { symbol: 'NFLX', name: 'Netflix Inc.', price: 425.67, change: 8.45, changePercent: 2.02 },
    'META': { symbol: 'META', name: 'Meta Platforms Inc.', price: 298.32, change: -4.21, changePercent: -1.39 },
    'NVDA': { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 875.43, change: 12.34, changePercent: 1.43 },
};

export const getStockPrice = async (symbol) => {
    try {
        // For now, return mock data
        if (mockStockData[symbol]) {
            return mockStockData[symbol];
        }

        // Placeholder for actual API call
        return {
            symbol,
            price: Math.random() * 500,
            change: (Math.random() - 0.5) * 10,
            changePercent: (Math.random() - 0.5) * 5,
        };
    } catch (error) {
        console.error(`Error fetching stock price for ${symbol}:`, error.message);
        throw error;
    }
};

export const getStockQuote = async (symbol) => {
    try {
        return mockStockData[symbol] || getStockPrice(symbol);
    } catch (error) {
        console.error(`Error fetching stock quote for ${symbol}:`, error.message);
        throw error;
    }
};

export const getTopGainers = async () => {
    try {
        const stocks = Object.values(mockStockData);
        return stocks.sort((a, b) => b.changePercent - a.changePercent).slice(0, 5);
    } catch (error) {
        console.error('Error fetching top gainers:', error.message);
        throw error;
    }
};

export const getTopLosers = async () => {
    try {
        const stocks = Object.values(mockStockData);
        return stocks.sort((a, b) => a.changePercent - b.changePercent).slice(0, 5);
    } catch (error) {
        console.error('Error fetching top losers:', error.message);
        throw error;
    }
};

export default {
    getStockPrice,
    getStockQuote,
    getTopGainers,
    getTopLosers,
};
