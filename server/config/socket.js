// Socket.IO Configuration
export const configureSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);

        // Handle disconnection
        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });

        // Handle real-time subscriptions
        socket.on('subscribe', (data) => {
            console.log(`Client ${socket.id} subscribed to:`, data);
            // Join a room for the subscribed asset
            socket.join(`asset-${data.symbol}`);
        });

        // Handle unsubscriptions
        socket.on('unsubscribe', (data) => {
            console.log(`Client ${socket.id} unsubscribed from:`, data);
            socket.leave(`asset-${data.symbol}`);
        });
    });
};

export default configureSocket;
