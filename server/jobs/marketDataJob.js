import * as stockService from '../services/stockService.js';
import * as cryptoService from '../services/cryptoService.js';
import * as newsService from '../services/newsService.js';

// Scheduled job to fetch market data
export const marketDataJob = async (io) => {
    try {
        console.log('Fetching market data...');

        // Fetch stock data
        const topGainers = await stockService.getTopGainers();
        const topLosers = await stockService.getTopLosers();

        // Fetch crypto data
        const cryptoPrices = await cryptoService.getCryptoPrices();

        // Fetch news
        const latestNews = await newsService.getLatestNews(5);

        // Emit to all connected clients
        io.emit('marketUpdate', {
            topGainers,
            topLosers,
            cryptoPrices,
            latestNews,
            timestamp: new Date(),
        });

        console.log('Market data sent to all clients');
    } catch (error) {
        console.error('Error in market data job:', error.message);
    }
};

export default marketDataJob;
