import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DashboardCard } from '../common/Card';

const mockChartData = [
    { time: '09:00', value: 4000 },
    { time: '10:00', value: 3000 },
    { time: '11:00', value: 2000 },
    { time: '12:00', value: 2780 },
    { time: '13:00', value: 1890 },
    { time: '14:00', value: 2390 },
    { time: '15:00', value: 3490 },
    { time: '16:00', value: 4200 },
];

export const PriceChart = ({ data = mockChartData, title = 'Price Trend', height = 300 }) => {
    return (
        <DashboardCard>
            <h3 className="text-white text-lg font-bold mb-4">{title}</h3>
            <ResponsiveContainer width="100%" height={height}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="time" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1e293b',
                            border: '1px solid #334155',
                            borderRadius: '8px',
                            color: '#e2e8f0',
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#10b981"
                        dot={{ fill: '#10b981', r: 4 }}
                        activeDot={{ r: 6 }}
                        isAnimationActive={true}
                    />
                </LineChart>
            </ResponsiveContainer>
        </DashboardCard>
    );
};

export const DistributionChart = ({ data = mockChartData, title = 'Distribution', height = 300 }) => {
    return (
        <DashboardCard>
            <h3 className="text-white text-lg font-bold mb-4">{title}</h3>
            <ResponsiveContainer width="100%" height={height}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="time" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1e293b',
                            border: '1px solid #334155',
                            borderRadius: '8px',
                            color: '#e2e8f0',
                        }}
                    />
                    <Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </DashboardCard>
    );
};

export default { PriceChart, DistributionChart };
