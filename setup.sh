#!/bin/bash

# Market Dashboard Setup Script

echo "🚀 Starting Market Dashboard Setup..."
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Setup Backend
echo "📦 Setting up Backend..."
echo "------------------------"
cd server
echo "Installing backend dependencies..."
npm install

if [ -f .env ]; then
    echo "⚠️  .env file already exists. Skipping configuration."
else
    echo "📝 Creating .env file. Please update it with your Firebase and API credentials."
    cp .env .env.backup
fi

cd ..
echo "✅ Backend setup complete"
echo ""

# Setup Frontend
echo "📦 Setting up Frontend..."
echo "------------------------"
cd client
echo "Installing frontend dependencies..."
npm install

if [ -f .env ]; then
    echo "⚠️  .env file already exists. Skipping configuration."
else
    echo "📝 Creating .env file. Please update it with your Firebase credentials."
    cp .env .env.backup
fi

cd ..
echo "✅ Frontend setup complete"
echo ""

echo "======================================"
echo "✨ Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Update server/.env with Firebase credentials"
echo "2. Update client/.env with Firebase credentials"
echo "3. Run backend: cd server && npm run dev"
echo "4. Run frontend: cd client && npm run dev"
echo ""
echo "Frontend URL: http://localhost:5173"
echo "Backend URL: http://localhost:5000"
echo ""
echo "Happy trading! 📈"
