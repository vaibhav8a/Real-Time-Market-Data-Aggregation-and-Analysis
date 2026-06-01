// API Keys Configuration
export const API_KEYS = {
    ALPHA_VANTAGE: process.env.ALPHA_VANTAGE_API_KEY,
    FINNHUB: process.env.FINNHUB_API_KEY,
    COINGECKO: process.env.COINGECKO_API_KEY,
    NEWS_API: process.env.NEWS_API_KEY,
};

// API Base URLs
export const API_BASE_URLS = {
    ALPHA_VANTAGE: 'https://www.alphavantage.co/query',
    FINNHUB: 'https://finnhub.io/api/v1',
    COINGECKO: 'https://api.coingecko.com/api/v3',
    NEWS_API: 'https://newsapi.org/v2',
};

export default {
    API_KEYS,
    API_BASE_URLS,
};
