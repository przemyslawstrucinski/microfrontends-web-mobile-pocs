#!/bin/bash

echo "🛑 Stopping all Gatsby services..."

# Kill processes on ports 9000-9002
for port in 9000 9001 9002; do
  pid=$(lsof -ti:$port)
  if [ ! -z "$pid" ]; then
    echo "   Killing process on port $port (PID: $pid)"
    kill -9 $pid
  fi
done

echo "✅ All services stopped!"

