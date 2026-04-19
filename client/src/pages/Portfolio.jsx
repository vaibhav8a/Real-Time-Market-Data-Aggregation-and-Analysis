import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownloadCloud, FiUploadCloud, FiPlus } from 'react-icons/fi';
import { DashboardCard, StatCard, Badge } from '../components/common/Card';
import { PriceChart } from '../components/charts/ChartComponents';
import { FiDollarSign, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';

const Portfolio = () => {
    const [holdings] = useState([
        { symbol: 'AAPL', shares: 10, avgCost: 150.25, currentPrice: 182.45, value: 1824.50, gain: 321.45 },
        { symbol: 'MSFT', shares: 5, avgCost: 320.00, currentPrice: 378.91, value: 1894.55, gain: 294.55 },
        { symbol: 'GOOGL', shares: 3, avgCost: 120.00, currentPrice: 140.23, value: 420.69, gain: 60.69 },
        { symbol: 'TSLA', shares: 2, avgCost: 200.00, currentPrice: 242.84, value: 485.68, gain: 85.68 },
        { symbol: 'BTC', shares: 0.5, avgCost: 40000, currentPrice: 45230.50, value: 22615.25, gain: 2615.25 },
    ]);

    const portfolioValue = holdings.reduce((sum, h) => sum + h.value, 0);
    const totalGain = holdings.reduce((sum, h) => sum + h.gain, 0);
    const gainPercent = ((totalGain / (portfolioValue - totalGain)) * 100).toFixed(2);

    return (
        <div className="pt-24 pb-12 px-4 min-h-screen bg-gradient-primary">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold text-white mb-2">My Portfolio</h1>
                    <p className="text-gray-400">Track your investments and manage your assets</p>
                </motion.div>

                {/* Portfolio Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
                >
                    <StatCard
                        label="Portfolio Value"
                        value={`$${portfolioValue.toFixed(2)}`}
                        unit=""
                        icon={FiDollarSign}
                    />
                    <StatCard
                        label="Total Gain"
                        value={`$${totalGain.toFixed(2)}`}
                        change={parseFloat(gainPercent)}
                        isPositive={totalGain > 0}
                        unit=""
                        icon={FiTrendingUp}
                    />
                    <StatCard
                        label="Holdings"
                        value={holdings.length}
                        unit=" Assets"
                        icon={FiBarChart2}
                    />
                </motion.div>

                {/* Performance Chart */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <PriceChart title="Portfolio Performance (30 Days)" />
                </motion.div>

                {/* Holdings Table */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                >
                    <DashboardCard>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-white text-lg font-bold">Holdings</h3>
                            <button className="px-4 py-2 bg-accent hover:bg-green-600 text-black rounded-lg font-medium transition-all flex items-center gap-2">
                                <FiPlus size={18} />
                                Add Position
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-tertiary/50">
                                        <th className="text-gray-400 font-medium text-left py-3 px-4">Symbol</th>
                                        <th className="text-gray-400 font-medium text-left py-3 px-4">Shares</th>
                                        <th className="text-gray-400 font-medium text-left py-3 px-4">Avg Cost</th>
                                        <th className="text-gray-400 font-medium text-left py-3 px-4">Current Price</th>
                                        <th className="text-gray-400 font-medium text-left py-3 px-4">Value</th>
                                        <th className="text-gray-400 font-medium text-right py-3 px-4">Gain/Loss</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {holdings.map((holding, idx) => (
                                        <motion.tr
                                            key={holding.symbol}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="border-b border-tertiary/30 hover:bg-tertiary/20 transition-colors cursor-pointer"
                                        >
                                            <td className="py-3 px-4 font-bold text-white">{holding.symbol}</td>
                                            <td className="py-3 px-4 text-gray-300">{holding.shares}</td>
                                            <td className="py-3 px-4 text-gray-300">${holding.avgCost.toFixed(2)}</td>
                                            <td className="py-3 px-4 text-accent font-semibold">${holding.currentPrice.toFixed(2)}</td>
                                            <td className="py-3 px-4 text-white font-semibold">${holding.value.toFixed(2)}</td>
                                            <td className={`py-3 px-4 text-right font-bold ${holding.gain > 0 ? 'text-accent' : 'text-danger'}`}>
                                                {holding.gain > 0 ? '+' : ''} ${holding.gain.toFixed(2)}
                                                <span className="text-xs ml-2">
                                                    {holding.gain > 0 ? '+' : ''}{((holding.gain / (holding.value - holding.gain)) * 100).toFixed(2)}%
                                                </span>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr className="border-t border-tertiary/50 bg-tertiary/10">
                                        <td colSpan="4" className="py-3 px-4 font-bold text-white">
                                            TOTAL
                                        </td>
                                        <td className="py-3 px-4 font-bold text-white">${portfolioValue.toFixed(2)}</td>
                                        <td className={`py-3 px-4 text-right font-bold ${totalGain > 0 ? 'text-accent' : 'text-danger'}`}>
                                            {totalGain > 0 ? '+' : ''} ${totalGain.toFixed(2)}
                                            <span className="text-xs ml-2">
                                                {totalGain > 0 ? '+' : ''}{gainPercent}%
                                            </span>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </DashboardCard>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <DashboardCard>
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-white font-bold mb-1">Export Portfolio</h4>
                                <p className="text-gray-400 text-sm">Download your portfolio data as CSV</p>
                            </div>
                            <button className="p-3 bg-accent/20 hover:bg-accent/30 text-accent rounded-lg transition-all">
                                <FiDownloadCloud size={24} />
                            </button>
                        </div>
                    </DashboardCard>
                    <DashboardCard>
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-white font-bold mb-1">Import Positions</h4>
                                <p className="text-gray-400 text-sm">Import transactions from CSV file</p>
                            </div>
                            <button className="p-3 bg-accent/20 hover:bg-accent/30 text-accent rounded-lg transition-all">
                                <FiUploadCloud size={24} />
                            </button>
                        </div>
                    </DashboardCard>
                </motion.div>

                {/* Top Holdings */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8"
                >
                    <h2 className="text-2xl font-bold text-white mb-4">Allocation by Asset</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {holdings.map((holding, idx) => (
                            <motion.div
                                key={holding.symbol}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gradient-glass backdrop-blur-md border border-tertiary/50 rounded-lg p-4 hover:border-accent/50 transition-all text-center"
                            >
                                <p className="text-white font-bold text-xl mb-2">{holding.symbol}</p>
                                <p className="text-accent font-semibold mb-2">${holding.value.toFixed(0)}</p>
                                <p className="text-gray-400 text-sm">
                                    {((holding.value / portfolioValue) * 100).toFixed(1)}%
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;
