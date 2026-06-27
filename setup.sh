#!/bin/bash

# PDS Setup Script
echo "🚀 Starting PDS Setup..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..

# Setup environment
echo "⚙️ Setting up environment..."
cp backend/.env.example backend/.env

# Build frontend
echo "🔨 Building frontend..."
cd frontend && npm run build && cd ..

# Build backend
echo "🔨 Building backend..."
cd backend && npm run build && cd ..

echo "✅ PDS Setup Complete!"
echo ""
echo "📝 Next steps:"
echo "1. Edit backend/.env with your PostgreSQL connection"
echo "2. Run: npm run dev"
echo "3. Frontend will be available at http://localhost:3000"
echo "4. Backend will be available at http://localhost:5000"
