#!/bin/bash

echo "🧹 Killing all services..."
echo ""

# Kill by port - MULTIPLE PASSES (Native ports)
echo "Pass 1: Cleaning Native ports (8081-8082, 9001-9002)..."
for port in 8081 8082 9001 9002; do
    lsof -ti :$port 2>/dev/null | xargs kill -9 2>/dev/null
done

# Kill by port (Web ports)
echo "Pass 2: Cleaning Web ports (3000-3003, 4000-4001)..."
for port in 3000 3001 3002 3003 4000 4001; do
    lsof -ti :$port 2>/dev/null | xargs kill -9 2>/dev/null
done

# Kill all node processes with specific patterns
echo "Pass 3: Killing all Metro/Expo processes..."
pkill -9 -f "react-native start" 2>/dev/null
pkill -9 -f "metro" 2>/dev/null
pkill -9 -f "expo start" 2>/dev/null
pkill -9 -f "@expo/cli" 2>/dev/null

echo "Pass 4: Killing Webpack/Nest processes..."
pkill -9 -f "webpack" 2>/dev/null
pkill -9 -f "nest start" 2>/dev/null

# Wait for processes to die
sleep 3

# SECOND PASS - catch stragglers
echo "Pass 5: Final cleanup..."
for port in 8081 8082 9001 9002 3000 3001 3002 3003 4000 4001; do
    lsof -ti :$port 2>/dev/null | xargs kill -9 2>/dev/null
done

sleep 2

echo ""
echo "✅ All services killed!"
echo ""
echo "Verify nothing is running:"
if lsof -i :3000,:3001,:3002,:3003,:4000,:4001,:8081,:8082,:9001,:9002 2>/dev/null | grep LISTEN; then
    echo "⚠️  WARNING: Some ports are still in use!"
    echo "You may need to manually kill these processes or restart your terminal."
else
    echo "✅ All ports are free!"
fi

