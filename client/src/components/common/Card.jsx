import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

export const DashboardCard = ({
    children,
    className = '',
    onClick = null,
    hover = true
}) => {
    return (
        <motion.div
            whileHover={hover ? { y: -5, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.1)' } : {}}
            className={`
        bg-gradient-glass backdrop-blur-md border border-tertiary/50 rounded-xl 
        p-6 transition-all duration-300 cursor-pointer
        hover:border-accent/50 ${className}
      `}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

export const StatCard = ({ label, value, change, isPositive = true, unit = '', icon: Icon = null }) => {
    return (
        <DashboardCard>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-gray-400 text-sm font-medium mb-2">{label}</p>
                    <p className="text-white text-2xl font-bold">{value}{unit}</p>
                    {change !== undefined && (
                        <div className="flex items-center gap-1 mt-2">
                            {isPositive ? (
                                <FiTrendingUp className="text-accent" size={16} />
                            ) : (
                                <FiTrendingDown className="text-danger" size={16} />
                            )}
                            <span className={isPositive ? 'text-accent' : 'text-danger'}>
                                {isPositive ? '+' : ''}{change}%
                            </span>
                        </div>
                    )}
                </div>
                {Icon && (
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-accent" />
                    </div>
                )}
            </div>
        </DashboardCard>
    );
};

export const Loader = ({ fullScreen = false }) => {
    const loaderContent = (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative w-12 h-12">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-full border-3 border-tertiary border-t-accent rounded-full"
                />
            </div>
            <p className="text-gray-400 text-sm">Loading market data...</p>
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 bg-primary/80 backdrop-blur-sm flex items-center justify-center z-50">
                {loaderContent}
            </div>
        );
    }

    return loaderContent;
};

export const ErrorMessage = ({ message, onClose = null }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-danger/10 border border-danger rounded-lg p-4 mb-4"
        >
            <div className="flex justify-between items-center">
                <p className="text-danger font-medium text-sm">{message}</p>
                {onClose && (
                    <button onClick={onClose} className="text-danger hover:text-danger/80">
                        ×
                    </button>
                )}
            </div>
        </motion.div>
    );
};

export const SuccessMessage = ({ message, onClose = null }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-success/10 border border-success rounded-lg p-4 mb-4"
        >
            <div className="flex justify-between items-center">
                <p className="text-success font-medium text-sm">{message}</p>
                {onClose && (
                    <button onClick={onClose} className="text-success hover:text-success/80">
                        ×
                    </button>
                )}
            </div>
        </motion.div>
    );
};

export const Badge = ({ label, variant = 'default', size = 'md' }) => {
    const variants = {
        default: 'bg-tertiary text-gray-300',
        success: 'bg-success/20 text-success',
        danger: 'bg-danger/20 text-danger',
        warning: 'bg-warning/20 text-warning',
        accent: 'bg-accent/20 text-accent',
    };

    const sizes = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm',
        lg: 'px-4 py-2 text-base',
    };

    return (
        <span className={`inline-block rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
            {label}
        </span>
    );
};
