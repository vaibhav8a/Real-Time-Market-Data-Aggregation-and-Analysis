# Real-Time Market Data Aggregation and Analysis

A full-stack web application for real-time market data monitoring, portfolio management, and investment analysis. Built with React, Node.js, Express, and Firebase.

## 🎯 Features

- **Real-Time Market Data**: Live stock and cryptocurrency price updates via Socket.IO
- **Dashboard**: Comprehensive market overview with key metrics and charts
- **Portfolio Management**: Track investments and analyze portfolio performance
- **Watchlist**: Monitor favorite assets and get custom price alerts
- **Market News**: Real-time financial news aggregation
- **Authentication**: Secure user authentication with Firebase
- **Responsive Design**: Mobile-first UI with Tailwind CSS
- **Beautiful UI**: Glassmorphism design with smooth animations using Framer Motion

## 📋 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Navigation
- **Socket.IO Client** - Real-time communication
- **Firebase SDK** - Authentication and Firestore
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization
- **Axios** - HTTP client
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **Socket.IO** - Real-time communication
- **Firebase Admin SDK** - Server-side Firebase operations
- **Axios** - HTTP client
- **dotenv** - Environment configuration
- **CORS** - Cross-origin requests
- **node-cron** - Job scheduling
- **nodemon** - Development auto-reload

### Database
- **Firebase Firestore** - NoSQL database
- **Firebase Authentication** - User authentication

## 📁 Project Structure

```
market-dashboard/
├── client/                          # Frontend (React + Vite)
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── assets/                  # Images, icons
│   │   ├── components/
│   │   │   ├── charts/              # Chart components (Recharts)
│   │   │   ├── dashboard/           # Dashboard-specific components
│   │   │   ├── navbar/              # Navigation components
│   │   │   ├── watchlist/           # Watchlist components
│   │   │   ├── alerts/              # Alert components
│   │   │   └── common/              # Reusable components
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.jsx             # Landing page
│   │   │   ├── Dashboard.jsx        # Main dashboard
│   │   │   ├── Watchlist.jsx        # Watchlist page
│   │   │   ├── Portfolio.jsx        # Portfolio page
│   │   │   └── Login.jsx            # Authentication page
│   │   ├── services/
│   │   │   ├── api.js               # API client (Axios)
│   │   │   ├── socket.js            # Socket.IO client
│   │   │   └── firebase.js          # Firebase config
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── context/                 # React Context
│   │   ├── utils/                   # Utility functions
│   │   ├── App.jsx                  # Main app component
│   │   ├── main.jsx                 # Entry point
│   │   └── index.css                # Global styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── .env                         # Environment variables
│   └── .gitignore
│
├── server/                          # Backend (Node + Express)
│   ├── config/
│   │   ├── firebase.js              # Firebase Admin SDK
│   │   ├── socket.js                # Socket.IO config
│   │   └── apiKeys.js               # API keys config
│   ├── controllers/                 # Route controllers (future)
│   ├── routes/                      # API routes (future)
│   ├── services/
│   │   ├── stockService.js          # Stock data service
│   │   ├── cryptoService.js         # Crypto data service
│   │   ├── newsService.js           # News service
│   │   └── alertService.js          # Alert service
│   ├── middleware/                  # Express middleware (future)
│   ├── models/                      # Data models (future)
│   ├── jobs/
│   │   └── marketDataJob.js         # Scheduled market data fetching
│   ├── server.js                    # Main server file
│   ├── package.json
│   ├── .env                         # Environment variables
│   └── .gitignore
│
└── .gitignore                       # Root .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Firebase project with Firestore and Authentication enabled

### Installation

#### 1. Clone the repository
```bash
cd /path/to/workspace
```

#### 2. Setup Backend
```bash
cd market-dashboard/server

# Install dependencies
npm install

# Configure environment variables
# Edit .env with your Firebase and API credentials
nano .env

# Start development server
npm run dev
# Or production server
npm start
```

#### 3. Setup Frontend
```bash
cd market-dashboard/client

# Install dependencies
npm install

# Configure environment variables
# Edit .env with your Firebase and API URLs
nano .env

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`
The backend will be available at `http://localhost:5000`

### Environment Configuration

**Backend (.env)**
```
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-client-email
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
ALPHA_VANTAGE_API_KEY=your-api-key
FINNHUB_API_KEY=your-api-key
COINGECKO_API_KEY=your-api-key
NEWS_API_KEY=your-api-key
```

**Frontend (.env)**
```
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-id
VITE_FIREBASE_APP_ID=your-app-id
```

## 📚 API Endpoints

### Stock Endpoints
- `GET /api/stocks/quote/:symbol` - Get stock quote
- `GET /api/stocks/top-gainers` - Top gaining stocks
- `GET /api/stocks/top-losers` - Top losing stocks

### Crypto Endpoints
- `GET /api/crypto/price/:symbol` - Get crypto price
- `GET /api/crypto/prices` - Get all crypto prices
- `GET /api/crypto/top` - Top cryptocurrencies

### News Endpoints
- `GET /api/news/latest` - Latest news
- `GET /api/news/category/:category` - News by category
- `GET /api/news/symbol/:symbol` - News by symbol

### Socket.IO Events
- `subscribe` - Subscribe to asset updates
- `unsubscribe` - Unsubscribe from asset
- `marketUpdate` - Receive market updates

## 🎨 Styling

The project uses a dark theme with glassmorphism design:
- **Primary Color**: #0f172a (Dark blue-black)
- **Secondary Color**: #1e293b (Dark slate)
- **Accent Color**: #10b981 (Green)
- **Text**: Light gray and white

## 🔐 Security

- Firebase Authentication for user management
- Environment variables for sensitive data
- CORS configuration for API security
- Token-based authentication for protected routes

## 📊 Features in Detail

### Dashboard
- Market overview with key indices
- Portfolio performance charts
- Top gainers/losers tables
- Cryptocurrency tracking
- Real-time news feed

### Watchlist
- Add/remove assets from watchlist
- Filter by asset type
- Price alert management
- Suggested assets

### Portfolio
- View all holdings
- Performance tracking
- Gain/loss calculation
- Asset allocation charts
- Export/import functionality

### Authentication
- Email/password login
- Google OAuth (placeholder)
- Protected routes
- Session management

## 🔄 Real-Time Features

- Socket.IO WebSocket for live updates
- Real-time price updates for subscribed assets
- Broadcast market data to all connected clients
- Event-based communication

## 📈 Data Visualization

- Line charts for price trends
- Bar charts for distribution
- Interactive tooltips
- Responsive chart sizing

## 🛣️ Future Enhancements

- [ ] Machine learning sentiment analysis
- [ ] Advanced technical analysis indicators
- [ ] Automated trading signals
- [ ] Portfolio optimization algorithms
- [ ] Social trading features
- [ ] Mobile app (React Native)
- [ ] Advanced alerting system
- [ ] Historical data analytics
- [ ] Tax reporting tools
- [ ] Multi-currency support

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Frontend (change port in vite.config.js)
# Backend (change PORT in .env)
```

### Firebase Connection Error
- Verify Firebase credentials in `.env`
- Check Firebase project is active
- Ensure Firestore database is created

### Socket.IO Connection Issues
- Check backend is running on correct port
- Verify CORS_ORIGIN matches frontend URL
- Check browser console for errors

## 📝 Notes

- This is a placeholder implementation with mock data
- API integration with real services is pending
- Machine learning features are not yet implemented
- Actual trading functionality is not included

## 📄 License

MIT License - feel free to use this project as a template

## 👨‍💻 Development

### Code Standards
- ES6+ JavaScript
- React best practices
- Component-based architecture
- Responsive design patterns
- Clean code principles

### Commit Messages
- Use descriptive commit messages
- Follow conventional commits format
- Reference issues when applicable

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For issues, questions, or suggestions, please create an issue in the repository.

---

**Happy Trading! 📈**
