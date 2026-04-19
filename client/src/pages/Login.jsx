import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import { DashboardCard } from '../components/common/Card';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Simulate login - replace with actual Firebase auth
            if (!email || !password) {
                throw new Error('Please enter email and password');
            }

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Store token (placeholder)
            localStorage.setItem('authToken', 'dummy-token-' + Date.now());

            // Redirect to dashboard
            navigate('/dashboard');
        } catch (err) {
            setError(err.message || 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        console.log('Google login not yet implemented');
        // TODO: Implement Firebase Google login
    };

    return (
        <div className="min-h-screen bg-gradient-primary flex items-center justify-center px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
                {/* Left Side - Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center"
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Welcome Back
                    </h1>
                    <p className="text-xl text-gray-400 mb-8">
                        Monitor your investments and manage your portfolio with real-time market data
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-accent text-xl font-bold">1</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Real-Time Updates</h3>
                                <p className="text-gray-400">Get instant market data and price updates</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-accent text-xl font-bold">2</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Portfolio Management</h3>
                                <p className="text-gray-400">Track and analyze your investments</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-accent text-xl font-bold">3</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Smart Alerts</h3>
                                <p className="text-gray-400">Get notified about price movements</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-tertiary">
                        <p className="text-gray-400 text-sm">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-accent hover:underline font-bold">
                                Sign up now
                            </Link>
                        </p>
                    </div>
                </motion.div>

                {/* Right Side - Login Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <DashboardCard className="lg:sticky lg:top-24">
                        <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
                        <p className="text-gray-400 mb-8">Enter your credentials to access your account</p>

                        {error && (
                            <div className="bg-danger/10 border border-danger rounded-lg p-4 mb-6">
                                <p className="text-danger text-sm">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Field */}
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                                <div className="relative">
                                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full pl-12 pr-4 py-3 bg-secondary border border-tertiary rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-gray-300 text-sm font-medium">Password</label>
                                    <Link to="#" className="text-accent text-sm hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-12 py-3 bg-secondary border border-tertiary rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-accent transition-colors"
                                    >
                                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me */}
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 bg-secondary border border-tertiary rounded cursor-pointer accent-accent"
                                />
                                <span className="text-gray-300 text-sm">Remember me</span>
                            </label>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 bg-accent hover:bg-green-600 disabled:bg-gray-600 text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        Sign In
                                        <FiArrowRight size={20} />
                                    </>
                                )}
                            </motion.button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-tertiary/50"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-secondary text-gray-400">Or continue with</span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <button
                            onClick={handleGoogleLogin}
                            type="button"
                            className="w-full py-3 border border-tertiary rounded-lg text-white hover:bg-tertiary/20 transition-colors flex items-center justify-center gap-2 font-medium"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Google
                        </button>
                    </DashboardCard>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
