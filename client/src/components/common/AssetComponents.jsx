import React from 'react';
import { DashboardCard } from './Card';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const MarketOverview = ({ data = [] }) => {
    const overviewData = data.length > 0 ? data : [
        { label: 'S&P 500', value: '5,234.45', change: 1.23, positive: true },
        { label: 'NASDAQ', value: '16,452.33', change: 2.15, positive: true },
        { label: 'VIX', value: '14.32', change: -5.12, positive: false },
        { label: 'BTC', value: '$45,230.50', change: 2.84, positive: true },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {overviewData.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <DashboardCard>
                        <p className="text-gray-400 text-sm font-medium mb-2">{item.label}</p>
                        <div className="flex items-end justify-between">
                            <p className="text-white text-2xl font-bold">{item.value}</p>
                            <div className="flex items-center gap-1">
                                {item.positive ? (
                                    <FiTrendingUp className="text-accent" size={18} />
                                ) : (
                                    <FiTrendingDown className="text-danger" size={18} />
                                )}
                                <span className={item.positive ? 'text-accent text-sm' : 'text-danger text-sm'}>
                                    {item.positive ? '+' : ''}{item.change}%
                                </span>
                            </div>
                        </div>
                    </DashboardCard>
                </motion.div>
            ))}
        </div>
    );
};

export const AssetTable = ({
    title = 'Assets',
    data = [],
    columns = ['Symbol', 'Name', 'Price', 'Change', 'Change %'],
    onRowClick = null
}) => {
    const mockData = data.length > 0 ? data : [
        { symbol: 'AAPL', name: 'Apple Inc.', price: '182.45', change: '2.35', changePercent: '1.31' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '140.23', change: '-1.45', changePercent: '-1.02' },
        { symbol: 'MSFT', name: 'Microsoft', price: '378.91', change: '3.12', changePercent: '0.83' },
        { symbol: 'AMZN', name: 'Amazon', price: '175.43', change: '-2.18', changePercent: '-1.23' },
        { symbol: 'TSLA', name: 'Tesla Inc.', price: '242.84', change: '5.23', changePercent: '2.20' },
    ];

    return (
        <DashboardCard>
            <h3 className="text-white text-lg font-bold mb-4">{title}</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-tertiary/50">
                            {columns.map((col) => (
                                <th
                                    key={col}
                                    className="text-gray-400 font-medium text-left py-3 px-4 first:pl-0 last:pr-0"
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {mockData.map((item, idx) => (
                            <motion.tr
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => onRowClick?.(item)}
                                className="border-b border-tertiary/30 hover:bg-tertiary/20 transition-colors cursor-pointer"
                            >
                                <td className="py-3 px-4 first:pl-0 font-bold text-white">{item.symbol}</td>
                                <td className="py-3 px-4 text-gray-300">{item.name}</td>
                                <td className="py-3 px-4 text-white font-semibold">{item.price}</td>
                                <td className={`py-3 px-4 ${parseFloat(item.change) >= 0 ? 'text-accent' : 'text-danger'}`}>
                                    {parseFloat(item.change) >= 0 ? '+' : ''}{item.change}
                                </td>
                                <td className={`py-3 px-4 flex items-center gap-2 last:pr-0 ${parseFloat(item.changePercent) >= 0 ? 'text-accent' : 'text-danger'}`}>
                                    {parseFloat(item.changePercent) >= 0 ? (
                                        <FiTrendingUp size={16} />
                                    ) : (
                                        <FiTrendingDown size={16} />
                                    )}
                                    {parseFloat(item.changePercent) >= 0 ? '+' : ''}{item.changePercent}%
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardCard>
    );
};
