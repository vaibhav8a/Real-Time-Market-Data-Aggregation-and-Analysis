import io from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000';

export const socket = io(SOCKET_URL, {
    autoConnect: true,
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5,
});

// Connection events
socket.on('connect', () => {
    console.log('✅ Connected to Socket.IO server');
});

socket.on('disconnect', () => {
    console.log('❌ Disconnected from Socket.IO server');
});

socket.on('error', (error) => {
    console.error('Socket.IO error:', error);
});

// Subscribe to a stock or crypto
export const subscribeToAsset = (symbol) => {
    socket.emit('subscribe', { symbol });
};

// Unsubscribe from a stock or crypto
export const unsubscribeFromAsset = (symbol) => {
    socket.emit('unsubscribe', { symbol });
};

// Listen for market updates
export const onMarketUpdate = (callback) => {
    socket.on('marketUpdate', callback);
};

// Listen for asset updates
export const onAssetUpdate = (symbol, callback) => {
    socket.on(`asset-${symbol}`, callback);
};

export default socket;
