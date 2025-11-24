#!/bin/bash

# Stop all running microfrontends and host app

echo "🛑 Stopping all applications..."

# Function to stop an app
stop_app() {
    local name=$1
    local pid_file="logs/$name.pid"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p $pid > /dev/null 2>&1; then
            echo "  Stopping $name (PID: $pid)..."
            kill $pid
            rm "$pid_file"
        else
            echo "  $name is not running"
            rm "$pid_file"
        fi
    else
        echo "  No PID file found for $name"
    fi
}

# Stop all applications
stop_app "HostApp"
stop_app "SearchMFE"
stop_app "DoctorMFE"

# Also kill any remaining processes on the ports
echo ""
echo "🧹 Cleaning up any remaining processes on ports 4000-4002..."
lsof -ti:4000 | xargs kill -9 2>/dev/null
lsof -ti:4001 | xargs kill -9 2>/dev/null
lsof -ti:4002 | xargs kill -9 2>/dev/null

echo ""
echo "✅ All applications stopped!"

