import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTrendingUp, FiPieChart, FiBell, FiShield } from 'react-icons/fi';

const Home = () => {
    const features = [
        {
            icon: FiTrendingUp,
            title: 'Real-Time Market Data',
            description: 'Get live updates on stocks, crypto, and market indices with instant notifications.',
        },
        {
            icon: FiPieChart,
            title: 'Portfolio Management',
            description: 'Track your investments and analyze your portfolio performance in real-time.',
        },
        {
            icon: FiBell,
            title: 'Smart Alerts',
            description: 'Set custom price alerts and get notified when your assets hit target prices.',
        },
        {
            icon: FiShield,
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security with Firebase authentication and encrypted data.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="min-h-screen bg-gradient-primary flex items-center justify-center px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Real-Time Market
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-400">
                                {' '}Intelligence
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Monitor stocks, cryptocurrencies, and market trends with advanced analytics.
                            Get real-time data, manage your portfolio, and make informed investment decisions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="/dashboard"
                            className="px-8 py-3 bg-accent hover:bg-green-600 text-white rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Start Trading
                            <FiArrowRight />
                        </Link>
                        <Link
                            to="/watchlist"
                            className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent/10 rounded-lg font-bold transition-all duration-300"
                        >
                            Explore Markets
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="grid grid-cols-3 gap-4 mt-16 max-w-md mx-auto"
                    >
                        <div className="bg-secondary/50 backdrop-blur-md border border-tertiary/50 rounded-lg p-4">
                            <p className="text-accent font-bold text-2xl">500+</p>
                            <p className="text-gray-400 text-sm">Assets</p>
                        </div>
                        <div className="bg-secondary/50 backdrop-blur-md border border-tertiary/50 rounded-lg p-4">
                            <p className="text-accent font-bold text-2xl">Live</p>
                            <p className="text-gray-400 text-sm">Updates</p>
                        </div>
                        <div className="bg-secondary/50 backdrop-blur-md border border-tertiary/50 rounded-lg p-4">
                            <p className="text-accent font-bold text-2xl">24/7</p>
                            <p className="text-gray-400 text-sm">Available</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-secondary">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
                        <p className="text-gray-400 text-lg">Everything you need to make smarter trading decisions</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="bg-gradient-glass backdrop-blur-md border border-tertiary/50 rounded-xl p-6 hover:border-accent/50 transition-all duration-300"
                                >
                                    <Icon className="text-accent mb-4" size={32} />
                                    <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Join thousands of traders using Market Dashboard to monitor their investments
                        </p>
                        <Link
                            to="/login"
                            className="inline-block px-8 py-4 bg-accent hover:bg-green-600 text-white rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Get Started Now
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
