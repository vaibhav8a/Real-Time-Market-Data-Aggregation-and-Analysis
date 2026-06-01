import axios from 'axios';
import { API_KEYS, API_BASE_URLS } from '../config/apiKeys.js';

// Mock news data for development
const mockNewsData = [
    {
        id: 1,
        title: 'Apple Reports Strong Q2 Earnings',
        description: 'Apple exceeded market expectations with record revenue in Q2 2024.',
        source: 'Financial Times',
        url: 'https://example.com/news/1',
        imageUrl: 'https://via.placeholder.com/300x200?text=Apple+News',
        publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        category: 'stocks',
        relatedSymbols: ['AAPL'],
    },
    {
        id: 2,
        title: 'Bitcoin Surges Past $45,000 Mark',
        description: 'Bitcoin reaches new highs as institutional adoption increases.',
        source: 'CoinDesk',
        url: 'https://example.com/news/2',
        imageUrl: 'https://via.placeholder.com/300x200?text=Bitcoin+News',
        publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        category: 'crypto',
        relatedSymbols: ['BTC'],
    },
    {
        id: 3,
        title: 'Fed Holds Interest Rates Steady',
        description: 'Federal Reserve maintains current interest rate at 5.25%-5.50% range.',
        source: 'Reuters',
        url: 'https://example.com/news/3',
        imageUrl: 'https://via.placeholder.com/300x200?text=Fed+News',
        publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        category: 'market',
        relatedSymbols: [],
    },
    {
        id: 4,
        title: 'Tesla Announces New Gigafactory',
        description: 'Tesla to build new manufacturing facility in Mexico by 2025.',
        source: 'Reuters',
        url: 'https://example.com/news/4',
        imageUrl: 'https://via.placeholder.com/300x200?text=Tesla+News',
        publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        category: 'stocks',
        relatedSymbols: ['TSLA'],
    },
    {
        id: 5,
        title: 'Ethereum Upgrades Network',
        description: 'Latest Ethereum upgrade improves network efficiency by 30%.',
        source: 'The Block',
        url: 'https://example.com/news/5',
        imageUrl: 'https://via.placeholder.com/300x200?text=Ethereum+News',
        publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
        category: 'crypto',
        relatedSymbols: ['ETH'],
    },
];

export const getLatestNews = async (limit = 10) => {
    try {
        // For now, return mock data
        return mockNewsData.slice(0, limit);
    } catch (error) {
        console.error('Error fetching latest news:', error.message);
        throw error;
    }
};

export const getNewsByCategory = async (category, limit = 10) => {
    try {
        return mockNewsData
            .filter(news => news.category === category)
            .slice(0, limit);
    } catch (error) {
        console.error(`Error fetching news by category ${category}:`, error.message);
        throw error;
    }
};

export const getNewsBySymbol = async (symbol, limit = 5) => {
    try {
        return mockNewsData
            .filter(news => news.relatedSymbols.includes(symbol))
            .slice(0, limit);
    } catch (error) {
        console.error(`Error fetching news for symbol ${symbol}:`, error.message);
        throw error;
    }
};

export default {
    getLatestNews,
    getNewsByCategory,
    getNewsBySymbol,
};
