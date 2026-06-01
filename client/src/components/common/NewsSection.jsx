import React from 'react';
import { DashboardCard } from './Card';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const NewsCard = ({ news, index }) => {
    return (
        <motion.a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="block group"
        >
            <div className="bg-gradient-glass backdrop-blur-md border border-tertiary/50 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300">
                {/* Image */}
                <div className="relative h-40 overflow-hidden bg-tertiary">
                    <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                        <span className="inline-block px-2 py-1 bg-accent/80 text-black text-xs font-bold rounded">
                            {news.category?.toUpperCase() || 'NEWS'}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h4 className="text-white font-bold text-sm mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {news.title}
                    </h4>
                    <p className="text-gray-400 text-xs mb-3 line-clamp-2">{news.description}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-xs">{news.source}</span>
                            {news.relatedSymbols?.length > 0 && (
                                <div className="flex gap-1">
                                    {news.relatedSymbols.slice(0, 2).map((symbol) => (
                                        <span key={symbol} className="text-accent text-xs font-bold">
                                            {symbol}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <FiExternalLink className="text-gray-400 group-hover:text-accent transition-colors" size={16} />
                    </div>
                    <p className="text-gray-500 text-xs mt-2">
                        {new Date(news.publishedAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </motion.a>
    );
};

export const NewsSection = ({ news = [], title = 'Recent News' }) => {
    const newsData = news.length > 0 ? news : [
        {
            id: 1,
            title: 'Apple Reports Strong Q2 Earnings',
            description: 'Apple exceeded market expectations with record revenue in Q2 2024.',
            source: 'Financial Times',
            url: '#',
            imageUrl: 'https://via.placeholder.com/300x200?text=Apple+News',
            publishedAt: new Date().toISOString(),
            category: 'stocks',
            relatedSymbols: ['AAPL'],
        },
        {
            id: 2,
            title: 'Bitcoin Surges Past $45,000 Mark',
            description: 'Bitcoin reaches new highs as institutional adoption increases.',
            source: 'CoinDesk',
            url: '#',
            imageUrl: 'https://via.placeholder.com/300x200?text=Bitcoin+News',
            publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            category: 'crypto',
            relatedSymbols: ['BTC'],
        },
        {
            id: 3,
            title: 'Fed Holds Interest Rates Steady',
            description: 'Federal Reserve maintains current interest rate at 5.25%-5.50% range.',
            source: 'Reuters',
            url: '#',
            imageUrl: 'https://via.placeholder.com/300x200?text=Fed+News',
            publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
            category: 'market',
            relatedSymbols: [],
        },
    ];

    return (
        <DashboardCard>
            <h3 className="text-white text-lg font-bold mb-4">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {newsData.map((item, idx) => (
                    <NewsCard key={item.id} news={item} index={idx} />
                ))}
            </div>
        </DashboardCard>
    );
};

export default NewsSection;
