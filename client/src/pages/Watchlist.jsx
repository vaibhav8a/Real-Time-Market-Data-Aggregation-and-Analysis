import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiTrash2, FiBell } from 'react-icons/fi';
import { DashboardCard, Badge } from '../components/common/Card';
import { AssetTable } from '../components/common/AssetComponents';

const Watchlist = () => {
    const [watchlistItems, setWatchlistItems] = useState([
        { symbol: 'AAPL', name: 'Apple Inc.', price: '182.45', change: '2.35', changePercent: '1.31', category: 'stocks' },
        { symbol: 'BTC', name: 'Bitcoin', price: '$45,230.50', change: '+1,250', changePercent: '2.84', category: 'crypto' },
        { symbol: 'MSFT', name: 'Microsoft', price: '378.91', change: '3.12', changePercent: '0.83', category: 'stocks' },
        { symbol: 'ETH', name: 'Ethereum', price: '$2,385.75', change: '+45.20', changePercent: '1.92', category: 'crypto' },
        { symbol: 'TSLA', name: 'Tesla Inc.', price: '242.84', change: '5.23', changePercent: '2.20', category: 'stocks' },
    ]);

    const [filter, setFilter] = useState('all');

    const filteredItems = filter === 'all' ? watchlistItems : watchlistItems.filter(item => item.category === filter);

    const handleRemove = (symbol) => {
        setWatchlistItems(watchlistItems.filter(item => item.symbol !== symbol));
    };

    const handleAddAlert = (symbol) => {
        console.log(`Setting alert for ${symbol}`);
        // TODO: Implement alert functionality
    };

    return (
        <div className="pt-24 pb-12 px-4 min-h-screen bg-gradient-primary">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold text-white mb-2">My Watchlist</h1>
                    <p className="text-gray-400">Track your favorite assets and get real-time updates</p>
                </motion.div>

                {/* Controls */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap gap-3 mb-8"
                >
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === 'all'
                                ? 'bg-accent text-black'
                                : 'bg-secondary/50 border border-tertiary text-gray-300 hover:border-accent/50'
                            }`}
                    >
                        All Assets
                    </button>
                    <button
                        onClick={() => setFilter('stocks')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === 'stocks'
                                ? 'bg-accent text-black'
                                : 'bg-secondary/50 border border-tertiary text-gray-300 hover:border-accent/50'
                            }`}
                    >
                        Stocks
                    </button>
                    <button
                        onClick={() => setFilter('crypto')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === 'crypto'
                                ? 'bg-accent text-black'
                                : 'bg-secondary/50 border border-tertiary text-gray-300 hover:border-accent/50'
                            }`}
                    >
                        Crypto
                    </button>
                    <button className="ml-auto px-4 py-2 bg-accent hover:bg-green-600 text-black rounded-lg font-medium transition-all flex items-center gap-2">
                        <FiPlus size={20} />
                        Add Asset
                    </button>
                </motion.div>

                {/* Watchlist Items */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <DashboardCard>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-tertiary/50">
                                        <th className="text-gray-400 font-medium text-left py-4 px-4">Asset</th>
                                        <th className="text-gray-400 font-medium text-left py-4 px-4">Price</th>
                                        <th className="text-gray-400 font-medium text-left py-4 px-4">Change</th>
                                        <th className="text-gray-400 font-medium text-left py-4 px-4">Change %</th>
                                        <th className="text-gray-400 font-medium text-left py-4 px-4">Type</th>
                                        <th className="text-gray-400 font-medium text-right py-4 px-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredItems.map((item, idx) => (
                                        <motion.tr
                                            key={item.symbol}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="border-b border-tertiary/30 hover:bg-tertiary/20 transition-colors"
                                        >
                                            <td className="py-4 px-4">
                                                <div>
                                                    <p className="text-white font-bold">{item.symbol}</p>
                                                    <p className="text-gray-400 text-sm">{item.name}</p>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-white font-semibold">{item.price}</td>
                                            <td className={`py-4 px-4 ${parseFloat(item.change) >= 0 ? 'text-accent' : 'text-danger'}`}>
                                                {parseFloat(item.change) >= 0 ? '+' : ''}{item.change}
                                            </td>
                                            <td className={`py-4 px-4 ${parseFloat(item.changePercent) >= 0 ? 'text-accent' : 'text-danger'}`}>
                                                {parseFloat(item.changePercent) >= 0 ? '+' : ''}{item.changePercent}%
                                            </td>
                                            <td className="py-4 px-4">
                                                <Badge
                                                    label={item.category === 'crypto' ? '💰 Crypto' : '📈 Stock'}
                                                    variant={item.category === 'crypto' ? 'accent' : 'default'}
                                                />
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex gap-2 justify-end">
                                                    <button
                                                        onClick={() => handleAddAlert(item.symbol)}
                                                        className="p-2 hover:bg-tertiary rounded-lg transition-colors text-gray-400 hover:text-accent"
                                                        title="Set Price Alert"
                                                    >
                                                        <FiBell size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleRemove(item.symbol)}
                                                        className="p-2 hover:bg-tertiary rounded-lg transition-colors text-gray-400 hover:text-danger"
                                                        title="Remove from Watchlist"
                                                    >
                                                        <FiTrash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {filteredItems.length === 0 && (
                            <div className="text-center py-8">
                                <p className="text-gray-400">No assets in your watchlist</p>
                            </div>
                        )}
                    </DashboardCard>
                </motion.div>

                {/* Suggested Assets */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8"
                >
                    <h2 className="text-2xl font-bold text-white mb-4">Suggested Assets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '140.23', type: 'Stock' },
                            { symbol: 'AMZN', name: 'Amazon', price: '175.43', type: 'Stock' },
                            { symbol: 'BNB', name: 'Binance Coin', price: '612.45', type: 'Crypto' },
                            { symbol: 'XRP', name: 'Ripple', price: '$0.52', type: 'Crypto' },
                            { symbol: 'NFLX', name: 'Netflix', price: '425.67', type: 'Stock' },
                            { symbol: 'SOL', name: 'Solana', price: '$142.34', type: 'Crypto' },
                        ].map((asset) => (
                            <motion.div
                                key={asset.symbol}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-gradient-glass backdrop-blur-md border border-tertiary/50 rounded-lg p-4 hover:border-accent/50 transition-all cursor-pointer group"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <p className="text-white font-bold">{asset.symbol}</p>
                                        <p className="text-gray-400 text-sm">{asset.name}</p>
                                    </div>
                                    <Badge label={asset.type} size="sm" variant={asset.type === 'Crypto' ? 'accent' : 'default'} />
                                </div>
                                <p className="text-accent font-semibold mb-3">{asset.price}</p>
                                <button className="w-full py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded-lg font-medium transition-all text-sm group-hover:bg-accent group-hover:text-black">
                                    + Add to Watchlist
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Watchlist;
