# Market Dashboard - Project Index

## 📂 File Structure & Navigation

### Root Level
```
market-dashboard/
├── 📄 README.md                    - Main project documentation
├── 📄 QUICKSTART.md                - 5-minute setup guide
├── 📄 PROJECT_OVERVIEW.md          - Detailed project information
├── 📄 package.json                 - Root package manager
├── 📄 .gitignore                   - Git ignore rules
└── 🔧 setup.sh                    - Automated setup script
```

---

## 🖥️ Frontend (client/)

### Configuration Files
```
client/
├── vite.config.js                  - Vite build configuration
├── tailwind.config.js              - Tailwind CSS theme
├── postcss.config.js               - PostCSS plugins
├── package.json                    - Frontend dependencies
├── .env                            - Environment variables
├── index.html                      - HTML entry point
└── .gitignore                      - Git rules
```

### Source Files
```
client/src/
├── App.jsx                         - Main app component with routing
├── main.jsx                        - React DOM render entry
├── index.css                       - Global styles & animations
│
├── 🎨 components/
│   ├── navbar/
│   │   └── Navbar.jsx             - Navigation bar with mobile menu
│   │
│   ├── common/
│   │   ├── Card.jsx               - Reusable card & stat components
│   │   ├── AssetComponents.jsx     - Market overview & asset tables
│   │   └── NewsSection.jsx         - News grid display
│   │
│   ├── charts/
│   │   └── ChartComponents.jsx     - Recharts components
│   │
│   ├── dashboard/                  - Dashboard-specific components
│   ├── watchlist/                  - Watchlist-specific components
│   ├── alerts/                     - Alert-specific components
│   └── [ready for expansion]
│
├── 📄 pages/
│   ├── Home.jsx                    - Landing page with hero section
│   ├── Dashboard.jsx               - Main market dashboard
│   ├── Watchlist.jsx               - Asset watchlist manager
│   ├── Portfolio.jsx               - Portfolio management
│   └── Login.jsx                   - Authentication page
│
├── 🔌 services/
│   ├── api.js                      - Axios API client with interceptors
│   ├── socket.js                   - Socket.IO client setup
│   └── firebase.js                 - Firebase configuration
│
├── 🎯 hooks/                       - Custom React hooks (ready)
├── 📦 context/                     - Context API (ready)
└── 🛠️ utils/                      - Utility functions (ready)
```

---

## 🔧 Backend (server/)

### Configuration Files
```
server/
├── server.js                       - Main Express server & routes
├── package.json                    - Backend dependencies
├── .env                            - Environment variables
└── .gitignore                      - Git rules
```

### Configuration Modules
```
server/config/
├── firebase.js                     - Firebase Admin SDK initialization
├── socket.js                       - Socket.IO connection handler
└── apiKeys.js                      - External API keys configuration
```

### Business Logic
```
server/services/
├── stockService.js                 - Stock data operations (mock)
├── cryptoService.js                - Crypto data operations (mock)
├── newsService.js                  - News data operations (mock)
└── alertService.js                 - Price alert management (Firestore)
```

### Jobs & Scheduled Tasks
```
server/jobs/
└── marketDataJob.js                - Market data fetching job
```

### Ready for Expansion
```
server/
├── controllers/                    - Route controllers
├── routes/                         - API route definitions
├── middleware/                     - Express middleware
└── models/                         - Data models
```

---

## 🎨 Key Components Explained

### Frontend Components

#### Navbar (client/src/components/navbar/Navbar.jsx)
- Responsive navigation with mobile menu
- Logo and brand
- Navigation links
- Login/Logout functionality
- Mobile hamburger menu

#### Card Components (client/src/components/common/Card.jsx)
- **DashboardCard**: Main reusable card wrapper
- **StatCard**: Statistics display with trending indicators
- **Loader**: Loading spinner animation
- **ErrorMessage & SuccessMessage**: Toast-like notifications
- **Badge**: Status badges with variants

#### Asset Components (client/src/components/common/AssetComponents.jsx)
- **MarketOverview**: 4-column grid of key market indices
- **AssetTable**: Interactive table with stocks/crypto data
- Responsive sorting and filtering

#### Chart Components (client/src/components/charts/ChartComponents.jsx)
- **PriceChart**: Line chart for price trends (Recharts)
- **DistributionChart**: Bar chart for data distribution

#### News Section (client/src/components/common/NewsSection.jsx)
- Grid layout of news cards
- Hover effects and external links
- Category and symbol badges
- Responsive column layout

### Backend Components

#### Stock Service (server/services/stockService.js)
- `getStockPrice()` - Get individual stock price
- `getStockQuote()` - Get full stock quote
- `getTopGainers()` - Get top performing stocks
- `getTopLosers()` - Get worst performing stocks

#### Crypto Service (server/services/cryptoService.js)
- `getCryptoPrice()` - Get crypto price by symbol
- `getCryptoPrices()` - Get multiple crypto prices
- `getTopCryptos()` - Get top cryptocurrencies

#### News Service (server/services/newsService.js)
- `getLatestNews()` - Get latest news articles
- `getNewsByCategory()` - Filter news by category
- `getNewsBySymbol()` - Get news for specific symbol

#### Alert Service (server/services/alertService.js)
- `createAlert()` - Create new price alert
- `getUserAlerts()` - Get user's active alerts
- `updateAlert()` - Update alert parameters
- `deleteAlert()` - Remove alert
- `triggerAlert()` - Mark alert as triggered

---

## 📊 Page Components Explained

### Home.jsx
- Hero section with CTA
- Features showcase (4 features)
- Statistics cards
- Call-to-action section
- Fully responsive

### Dashboard.jsx
- Market overview grid (4 cards)
- Key metrics (Portfolio value, 24h change, watchlist items, market status)
- Performance chart (7-day)
- Asset allocation chart
- Top gainers table
- Top losers table
- Crypto prices table
- Recent news section

### Watchlist.jsx
- Filter controls (All, Stocks, Crypto)
- Watchlist items table with actions
- Suggested assets grid
- Add/remove functionality
- Alert button for each asset

### Portfolio.jsx
- Portfolio statistics (value, gain, holdings count)
- Performance chart (30-day)
- Holdings table with detailed info
- Export/Import action cards
- Asset allocation breakdown

### Login.jsx
- Email/password form
- Show/hide password toggle
- Forgot password link
- Google OAuth button (placeholder)
- Sign up link
- Remember me checkbox
- Left-side information display

---

## 🔌 API Endpoints

### Stock Endpoints
```
GET /api/stocks/quote/:symbol      - Get stock quote
GET /api/stocks/top-gainers        - Top gaining stocks
GET /api/stocks/top-losers         - Top losing stocks
```

### Crypto Endpoints
```
GET /api/crypto/price/:symbol      - Get crypto price
GET /api/crypto/prices             - All crypto prices
GET /api/crypto/top?limit=10       - Top cryptocurrencies
```

### News Endpoints
```
GET /api/news/latest?limit=10      - Latest news
GET /api/news/category/:category   - News by category
GET /api/news/symbol/:symbol       - News by symbol
```

### Health Check
```
GET /api/health                    - Server status
```

---

## 🔌 Socket.IO Events

### Server to Client
- `marketUpdate` - Broadcast market data updates
- `asset-{symbol}` - Asset-specific updates

### Client to Server
- `subscribe` - Subscribe to asset updates
- `unsubscribe` - Unsubscribe from asset

---

## 🎨 Design System

### Color Scheme
- **Primary Background**: #0f172a
- **Secondary Background**: #1e293b
- **Tertiary (Borders)**: #334155
- **Accent (Green)**: #10b981
- **Danger (Red)**: #ef4444
- **Warning (Yellow)**: #f59e0b
- **Success (Green)**: #10b981

### Typography
- **Font Family**: Inter, system-ui, -apple-system, sans-serif
- **Display Sizes**: 3rem - 3.75rem
- **Heading Sizes**: 1.5rem - 2.25rem
- **Body Text**: 0.875rem - 1rem

### Spacing
- Built with Tailwind CSS default scale
- Responsive design with mobile-first approach

### Effects
- Glassmorphism cards with blur and transparency
- Smooth animations with Framer Motion
- Hover transitions on interactive elements

---

## 🚀 Setup & Installation

### Quick Start
```bash
./setup.sh
```

### Manual Setup

#### Backend
```bash
cd server
npm install
# Configure .env
npm run dev
```

#### Frontend
```bash
cd client
npm install
# Configure .env
npm run dev
```

---

## 📦 Dependencies

### Frontend (Key)
- react@18.2.0
- react-router-dom@6.14.2
- tailwindcss@3.3.3
- framer-motion@10.16.4
- recharts@2.10.3
- socket.io-client@4.5.4
- firebase@10.1.0
- axios@1.4.0

### Backend (Key)
- express@4.18.2
- socket.io@4.5.4
- firebase-admin@12.0.0
- dotenv@16.3.1
- cors@2.8.5
- node-cron@3.0.2

---

## 🔐 Security Features

✅ Environment variable configuration
✅ CORS policy enforcement
✅ Firebase authentication ready
✅ Protected routes on frontend
✅ API error handling
✅ Input validation ready

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## 🎯 Development Workflow

1. **Start Backend**: `cd server && npm run dev`
2. **Start Frontend**: `cd client && npm run dev`
3. **Open Browser**: http://localhost:5173
4. **Test Features**: Navigate through pages
5. **Check Console**: Browser dev tools for errors

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Main documentation |
| QUICKSTART.md | Quick setup guide |
| PROJECT_OVERVIEW.md | Detailed project info |
| PROJECT_INDEX.md | This file |

---

## 🔄 Common Tasks

### Add New Page
1. Create `client/src/pages/NewPage.jsx`
2. Add route in `App.jsx`
3. Add navigation link in `Navbar.jsx`

### Add New Component
1. Create in appropriate folder under `components/`
2. Export from component file
3. Import where needed

### Add API Endpoint
1. Create service in `server/services/`
2. Add route in `server/server.js`
3. Call from frontend using `api.js`

### Modify Theme
1. Edit `client/tailwind.config.js`
2. Update colors in custom properties
3. Restart dev server

---

## 🐛 Debugging

### Browser Console Errors
- Check network tab for API calls
- Verify API base URLs in `.env`
- Check Socket.IO connection in console

### Backend Issues
- Check server logs in terminal
- Verify Firebase credentials
- Ensure ports are not in use

### Frontend Styling
- Use React DevTools for component inspection
- Check Tailwind classes applied
- Verify CSS is loaded

---

## 📊 Project Statistics

- **Frontend Files**: 15 JSX/JS files
- **Backend Files**: 7 JS files
- **Configuration Files**: 8 files
- **Documentation Files**: 4 MD files
- **Total Components**: 10+ reusable components
- **API Endpoints**: 11 endpoints
- **Pages**: 5 pages

---

## 🎓 Learning Resources

| Resource | URL |
|----------|-----|
| React | https://react.dev |
| Vite | https://vitejs.dev |
| Tailwind CSS | https://tailwindcss.com |
| Firebase | https://firebase.google.com |
| Socket.IO | https://socket.io |
| Express.js | https://expressjs.com |

---

## 📞 Support

For issues:
1. Check README.md
2. Review QUICKSTART.md
3. Inspect browser console
4. Check backend terminal
5. Review component code comments

---

**Happy Coding! 📈**

Last Updated: April 19, 2026
