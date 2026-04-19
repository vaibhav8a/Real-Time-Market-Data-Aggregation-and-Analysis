# Quick Start Guide

## 🎯 5-Minute Setup

### Step 1: Prerequisites
- Node.js 16+ installed
- Firebase project created
- API keys (optional for basic features)

### Step 2: Install Dependencies

#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd client
npm install
```

### Step 3: Configure Environment Variables

#### Backend (server/.env)
```
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-client-email
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

#### Frontend (client/.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_API_KEY=your-api-key
# ... other Firebase config
```

### Step 4: Run the Application

#### Terminal 1 - Backend
```bash
cd server
npm run dev
```
Backend runs on: http://localhost:5000

#### Terminal 2 - Frontend
```bash
cd client
npm run dev
```
Frontend runs on: http://localhost:5173

### Step 5: Access the Application

Open your browser to: **http://localhost:5173**

## 🔑 Firebase Setup

### Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable Firestore Database
4. Enable Authentication (Email/Password and Google)
5. Copy credentials

### Backend Configuration
1. Download service account key from Firebase Console
2. Extract credentials into `.env`

### Frontend Configuration
1. Copy Firebase config from project settings
2. Add to `client/.env`

## 📱 Testing the Application

### Create Test Account
- Email: test@example.com
- Password: Test123456

### Access Pages
- Home: http://localhost:5173/
- Dashboard: http://localhost:5173/dashboard
- Watchlist: http://localhost:5173/watchlist
- Portfolio: http://localhost:5173/portfolio
- Login: http://localhost:5173/login

## 🎨 Customize Theme

Edit `client/tailwind.config.js`:
```js
theme: {
  colors: {
    accent: '#your-color',
    primary: '#your-color',
    // ...
  }
}
```

## 📊 Mock Data

The application includes mock data for:
- Stock prices
- Crypto prices
- News articles
- Portfolio holdings

## 🔗 API Endpoints

### Health Check
```
GET /api/health
```

### Stocks
```
GET /api/stocks/quote/:symbol
GET /api/stocks/top-gainers
GET /api/stocks/top-losers
```

### Crypto
```
GET /api/crypto/price/:symbol
GET /api/crypto/prices
GET /api/crypto/top
```

### News
```
GET /api/news/latest
GET /api/news/category/:category
GET /api/news/symbol/:symbol
```

## 🐛 Common Issues

### Port Already in Use
```bash
# Find process using port
lsof -i :5000
lsof -i :5173

# Kill process
kill -9 <PID>
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Firebase Connection Error
- Verify `.env` credentials
- Check Firebase project is active
- Ensure Firestore is enabled

## 📚 Documentation

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Express.js](https://expressjs.com)
- [Firebase](https://firebase.google.com/docs)
- [Socket.IO](https://socket.io)

## 🚀 Next Steps

1. ✅ Setup local environment
2. ⬜ Add real API integrations
3. ⬜ Implement authentication
4. ⬜ Add real market data
5. ⬜ Deploy to production

## 💡 Tips

- Use Chrome DevTools for debugging
- Check browser console for errors
- Monitor backend terminal for logs
- Use Socket.IO DevTools for WebSocket debugging

## 📞 Need Help?

Check the main README.md for more detailed information.

---

**Ready to trade? Let's go! 📈**
