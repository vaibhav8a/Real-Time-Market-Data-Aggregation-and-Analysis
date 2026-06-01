import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MarketOverview, AssetTable } from '../components/common/AssetComponents';
import { PriceChart, DistributionChart } from '../components/charts/ChartComponents';
import { NewsSection } from '../components/common/NewsSection';
import { DashboardCard, StatCard } from '../components/common/Card';
import { FiTrendingUp, FiDollarSign, FiBarChart2, FiActivity } from 'react-icons/fi';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Simulate data loading
        setIsLoading(false);
    }, []);

    return (
        <div className="pt-24 pb-12 px-4 min-h-screen bg-gradient-primary">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold text-white mb-2">Market Dashboard</h1>
                    <p className="text-gray-400">Real-time market overview and analysis</p>
                </motion.div>

                {/* Market Overview Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                >
                    <MarketOverview />
                </motion.div>

                {/* Key Metrics */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                >
                    <StatCard
                        label="Portfolio Value"
                        value="$125,450"
                        change={2.45}
                        isPositive={true}
                        unit=""
                        icon={FiDollarSign}
                    />
                    <StatCard
                        label="24h Change"
                        value="$3,125"
                        change={1.23}
                        isPositive={true}
                        unit=""
                        icon={FiTrendingUp}
                    />
                    <StatCard
                        label="Active Watchlist"
                        value="24"
                        change={0}
                        isPositive={true}
                        unit=" Items"
                        icon={FiBarChart2}
                    />
                    <StatCard
                        label="Market Status"
                        value="Active"
                        unit=""
                        icon={FiActivity}
                    />
                </motion.div>

                {/* Charts Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
                >
                    <PriceChart title="Portfolio Performance (7D)" />
                    <DistributionChart title="Asset Allocation" />
                </motion.div>

                {/* Top Gainers and Losers */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
                >
                    <AssetTable
                        title="🚀 Top Gainers"
                        columns={['Symbol', 'Price', 'Change', 'Change %']}
                        data={[
                            { symbol: 'TSLA', name: 'Tesla Inc.', price: '$242.84', change: '+5.23', changePercent: '2.20' },
                            { symbol: 'NVDA', name: 'NVIDIA', price: '$875.43', change: '+12.34', changePercent: '1.43' },
                            { symbol: 'NFLX', name: 'Netflix Inc.', price: '$425.67', change: '+8.45', changePercent: '2.02' },
                            { symbol: 'AMZN', name: 'Amazon', price: '$175.43', change: '+3.12', changePercent: '1.81' },
                            { symbol: 'META', name: 'Meta', price: '$298.32', change: '+5.67', changePercent: '1.93' },
                        ]}
                    />
                    <AssetTable
                        title="📉 Top Losers"
                        columns={['Symbol', 'Price', 'Change', 'Change %']}
                        data={[
                            { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '$140.23', change: '-1.45', changePercent: '-1.02' },
                            { symbol: 'BA', name: 'Boeing', price: '$178.92', change: '-3.21', changePercent: '-1.76' },
                            { symbol: 'IBM', name: 'IBM', price: '$142.34', change: '-2.15', changePercent: '-1.48' },
                            { symbol: 'GE', name: 'General Electric', price: '$89.12', change: '-1.87', changePercent: '-2.05' },
                            { symbol: 'CVX', name: 'Chevron', price: '$156.23', change: '-2.34', changePercent: '-1.48' },
                        ]}
                    />
                </motion.div>

                {/* Crypto Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                >
                    <AssetTable
                        title="💰 Top Cryptocurrencies"
                        columns={['Symbol', 'Price', 'Change', 'Change %']}
                        data={[
                            { symbol: 'BTC', name: 'Bitcoin', price: '$45,230.50', change: '+1,250.30', changePercent: '2.84' },
                            { symbol: 'ETH', name: 'Ethereum', price: '$2,385.75', change: '+45.20', changePercent: '1.92' },
                            { symbol: 'BNB', name: 'Binance Coin', price: '$612.45', change: '+15.32', changePercent: '2.56' },
                            { symbol: 'XRP', name: 'Ripple', price: '$0.52', change: '+0.02', changePercent: '3.84' },
                            { symbol: 'SOL', name: 'Solana', price: '$142.34', change: '+5.23', changePercent: '3.81' },
                        ]}
                    />
                </motion.div>

                {/* News Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <NewsSection title="📰 Recent Market News" />
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
