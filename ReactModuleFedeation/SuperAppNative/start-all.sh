#!/bin/bash

echo "🧹 Cleaning ports (aggressive)..."
# Multiple passes to ensure cleanup
for i in {1..3}; do
    lsof -ti :9001 2>/dev/null | xargs kill -9 2>/dev/null
    lsof -ti :9002 2>/dev/null | xargs kill -9 2>/dev/null
    lsof -ti :8081 2>/dev/null | xargs kill -9 2>/dev/null
    sleep 1
done

# Verify ports are free
if lsof -i :9001 -i :9002 2>/dev/null | grep LISTEN > /dev/null; then
    echo "❌ ERROR: Ports 9001 or 9002 are still in use!"
    echo "Run '../kill-all.sh' from project root and try again."
    exit 1
fi

echo "✅ Ports are free!"
echo ""
echo "🚀 Starting Webpack servers for microfrontends (re.pack)..."
echo ""

# Start Webpack servers for microfrontends (native builds)
cd ../ToDo/app && npm run start:native > /tmp/todo-native.log 2>&1 &
TODO_PID=$!
cd ../Weather/app && npm run start:native > /tmp/weather-native.log 2>&1 &
WEATHER_PID=$!

echo "Started Todo Webpack (PID: $TODO_PID) on port 9001"
echo "Started Weather Webpack (PID: $WEATHER_PID) on port 9002"
echo ""
echo "⏳ Waiting for Webpack servers to initialize (10 seconds)..."
sleep 10

echo ""
echo "✅ Webpack servers ready!"
echo ""
echo "🚀 Starting Expo..."
echo ""

# Start re.pack dev server
cd "$(dirname "$0")"
ulimit -n 65536 2>/dev/null || ulimit -n 10240
npm start

