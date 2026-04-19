import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = ({ isLoggedIn = true, onLogout = () => { } }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/watchlist', label: 'Watchlist' },
        { path: '/portfolio', label: 'Portfolio' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-accent to-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">M</span>
                        </div>
                        <span className="text-white font-bold text-xl hidden sm:inline">Market</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Auth Section */}
                    <div className="flex items-center gap-4">
                        {isLoggedIn ? (
                            <button
                                onClick={onLogout}
                                className="hidden sm:flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-accent transition-colors duration-200"
                            >
                                <FiLogOut size={18} />
                                <span className="text-sm font-medium">Logout</span>
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="px-4 py-2 bg-accent hover:bg-green-600 text-white rounded-lg font-medium transition-colors duration-200"
                            >
                                Login
                            </Link>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-gray-300 hover:text-accent transition-colors"
                        >
                            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-secondary border-t border-tertiary py-4"
                    >
                        <div className="flex flex-col gap-4 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-gray-300 hover:text-accent transition-colors duration-200 font-medium py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            {isLoggedIn ? (
                                <button
                                    onClick={() => {
                                        onLogout();
                                        setIsMenuOpen(false);
                                    }}
                                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-accent transition-colors border-t border-tertiary mt-4"
                                >
                                    <FiLogOut size={18} />
                                    <span className="font-medium">Logout</span>
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="px-4 py-2 bg-accent hover:bg-green-600 text-white rounded-lg font-medium text-center transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
