#!/bin/bash

echo "🧹 Cleaning ports..."
lsof -ti :3000,:3001,:3002,:3003,:4000,:4001 2>/dev/null | xargs kill -9 2>/dev/null || true
sleep 2

echo "🚀 Starting all services..."
echo ""

# Start APIs
echo "Starting APIs..."
cd ../ToDo/api && npm start > /tmp/todo-api.log 2>&1 &
cd ../Weather/api && npm start > /tmp/weather-api.log 2>&1 &
sleep 3

# Start microfrontends
echo "Starting microfrontends..."
cd ../ToDo/app && npm run start:web > /tmp/todo-web.log 2>&1 &
cd ../Weather/app && npm run start:web > /tmp/weather-web.log 2>&1 &
cd ../Weather/app/ssr && npm run dev > /tmp/weather-ssr.log 2>&1 &
sleep 5

# Start SuperApp
echo "Starting SuperApp..."
cd "$(dirname "$0")"
npm start

echo ""
echo "✅ All services started!"

