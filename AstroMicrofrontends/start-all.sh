#!/bin/bash

# Start all microfrontends and host app
# This script starts all three applications in separate terminal sessions

echo "🚀 Starting Astro Microfrontends..."
echo ""
echo "This will start three applications:"
echo "  - HostApp (Port 4000)"
echo "  - SearchMFE (Port 4001)"
echo "  - DoctorMFE (Port 4002)"
echo ""

# Check if node_modules exist in each directory
check_dependencies() {
    local dir=$1
    if [ ! -d "$dir/node_modules" ]; then
        echo "📦 Installing dependencies for $dir..."
        cd "$dir" && npm install && cd ..
    fi
}

# Install dependencies if needed
check_dependencies "HostApp"
check_dependencies "SearchMFE"
check_dependencies "DoctorMFE"

echo ""
echo "✅ All dependencies installed!"
echo ""
echo "Starting applications..."
echo ""

# Function to start an app in the background
start_app() {
    local dir=$1
    local name=$2
    local port=$3
    
    cd "$dir"
    echo "🔵 Starting $name on port $port..."
    npm run dev > "../logs/$name.log" 2>&1 &
    echo $! > "../logs/$name.pid"
    cd ..
}

# Create logs directory
mkdir -p logs

# Start all applications
start_app "HostApp" "HostApp" "4000"
start_app "SearchMFE" "SearchMFE" "4001"
start_app "DoctorMFE" "DoctorMFE" "4002"

echo ""
echo "⏳ Waiting for applications to start..."
sleep 5

echo ""
echo "✅ All applications should be running!"
echo ""
echo "🌐 URLs:"
echo "  HostApp:    http://localhost:4000"
echo "  SearchMFE:  http://localhost:4001/search"
echo "  DoctorMFE:  http://localhost:4002/doctor"
echo ""
echo "📋 To stop all applications, run: ./stop-all.sh"
echo "📋 Logs are available in the ./logs directory"
echo ""

