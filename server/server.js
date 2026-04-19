import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';
import dotenv from 'dotenv';
import { configureSocket } from './config/socket.js';
import { db, auth } from './config/firebase.js';
import * as stockService from './services/stockService.js';
import * as cryptoService from './services/cryptoService.js';
import * as newsService from './services/newsService.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
        methods: ['GET', 'POST'],
    },
});

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());

// Configure Socket.IO
configureSocket(io);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Stock endpoints
app.get('/api/stocks/quote/:symbol', async (req, res) => {
    try {
        const { symbol } = req.params;
        const quote = await stockService.getStockQuote(symbol.toUpperCase());
        res.json(quote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/stocks/top-gainers', async (req, res) => {
    try {
        const gainers = await stockService.getTopGainers();
        res.json(gainers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/stocks/top-losers', async (req, res) => {
    try {
        const losers = await stockService.getTopLosers();
        res.json(losers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crypto endpoints
app.get('/api/crypto/price/:symbol', async (req, res) => {
    try {
        const { symbol } = req.params;
        const price = await cryptoService.getCryptoPrice(symbol.toUpperCase());
        res.json(price);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/crypto/prices', async (req, res) => {
    try {
        const prices = await cryptoService.getCryptoPrices();
        res.json(prices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/crypto/top', async (req, res) => {
    try {
        const limit = req.query.limit || 10;
        const topCryptos = await cryptoService.getTopCryptos(parseInt(limit));
        res.json(topCryptos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// News endpoints
app.get('/api/news/latest', async (req, res) => {
    try {
        const limit = req.query.limit || 10;
        const news = await newsService.getLatestNews(parseInt(limit));
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/news/category/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const limit = req.query.limit || 10;
        const news = await newsService.getNewsByCategory(category, parseInt(limit));
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/news/symbol/:symbol', async (req, res) => {
    try {
        const { symbol } = req.params;
        const limit = req.query.limit || 5;
        const news = await newsService.getNewsBySymbol(symbol.toUpperCase(), parseInt(limit));
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Socket.IO event handlers
io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Subscribe to real-time updates
    socket.on('subscribe', (data) => {
        console.log(`${socket.id} subscribed to ${data.symbol}`);
        socket.join(`asset-${data.symbol}`);
    });

    // Unsubscribe from real-time updates
    socket.on('unsubscribe', (data) => {
        console.log(`${socket.id} unsubscribed from ${data.symbol}`);
        socket.leave(`asset-${data.symbol}`);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📡 Socket.IO connected on http://localhost:${PORT}`);
});

export { app, io };
