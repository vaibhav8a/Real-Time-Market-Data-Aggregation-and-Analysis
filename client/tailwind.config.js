/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0f172a',
                secondary: '#1e293b',
                tertiary: '#334155',
                accent: '#10b981',
                danger: '#ef4444',
                warning: '#f59e0b',
                success: '#10b981',
            },
            backdropBlur: {
                xs: '2px',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                'gradient-glass': 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)',
            },
        },
    },
    plugins: [],
}
