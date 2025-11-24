#!/bin/bash

# SvelteKit Microfrontends Startup Script
# This script installs dependencies and starts all three microfrontend applications

echo "🚀 Starting SvelteKit Microfrontends..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check if a port is in use
check_port() {
    lsof -i :"$1" > /dev/null 2>&1
    return $?
}

# Check if ports are already in use
if check_port 5001; then
    echo "⚠️  Port 5001 is already in use. Please stop the process using this port."
    exit 1
fi

if check_port 5002; then
    echo "⚠️  Port 5002 is already in use. Please stop the process using this port."
    exit 1
fi

if check_port 5000; then
    echo "⚠️  Port 5000 is already in use. Please stop the process using this port."
    exit 1
fi

# Install dependencies and start Search MFE
echo -e "${BLUE}📦 Installing dependencies for Search MFE...${NC}"
cd SvelteKitSearch
npm install
echo -e "${GREEN}✓ Search MFE dependencies installed${NC}"
echo -e "${BLUE}🚀 Starting Search MFE on port 5001...${NC}"
npm run dev > ../search.log 2>&1 &
SEARCH_PID=$!
cd ..

# Wait a bit for the first app to start
sleep 3

# Install dependencies and start Doctor MFE
echo -e "${BLUE}📦 Installing dependencies for Doctor MFE...${NC}"
cd SvelteKitDoctor
npm install
echo -e "${GREEN}✓ Doctor MFE dependencies installed${NC}"
echo -e "${BLUE}🚀 Starting Doctor MFE on port 5002...${NC}"
npm run dev > ../doctor.log 2>&1 &
DOCTOR_PID=$!
cd ..

# Wait a bit for the second app to start
sleep 3

# Install dependencies and start Host App
echo -e "${BLUE}📦 Installing dependencies for Host App...${NC}"
cd SvelteKitHost
npm install
echo -e "${GREEN}✓ Host App dependencies installed${NC}"
echo -e "${BLUE}🚀 Starting Host App on port 5000...${NC}"
npm run dev > ../host.log 2>&1 &
HOST_PID=$!
cd ..

echo ""
echo -e "${GREEN}✅ All applications started successfully!${NC}"
echo ""
echo "📍 Access the applications at:"
echo "   🏠 Host App:   http://localhost:5000"
echo "   🔍 Search MFE: http://localhost:5001"
echo "   👨‍⚕️ Doctor MFE: http://localhost:5002"
echo ""
echo "📋 Process IDs:"
echo "   Search MFE: $SEARCH_PID"
echo "   Doctor MFE: $DOCTOR_PID"
echo "   Host App:   $HOST_PID"
echo ""
echo "📝 Logs are available in:"
echo "   search.log, doctor.log, host.log"
echo ""
echo "To stop all services, run: ./stop-all.sh"
echo "Or press Ctrl+C and run: kill $SEARCH_PID $DOCTOR_PID $HOST_PID"
echo ""

# Wait for user interrupt
wait

