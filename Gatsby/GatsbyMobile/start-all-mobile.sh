#!/bin/bash

echo "📱 Starting all mobile microfrontends..."
echo ""

# Check if node_modules exist
if [ ! -d "../GatsbyMobileSearchMFE/node_modules" ]; then
  echo "📦 Installing dependencies for GatsbyMobileSearchMFE..."
  cd ../GatsbyMobileSearchMFE && npm install && cd ../GatsbyMobile
fi

if [ ! -d "../GatsbyMobileDoctorMFE/node_modules" ]; then
  echo "📦 Installing dependencies for GatsbyMobileDoctorMFE..."
  cd ../GatsbyMobileDoctorMFE && npm install && cd ../GatsbyMobile
fi

if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies for GatsbyMobile..."
  npm install
fi

echo ""
echo "✅ All dependencies installed!"
echo ""
echo "🌐 Starting Metro servers..."
echo "   - SearchMFE: http://localhost:8091"
echo "   - DoctorMFE: http://localhost:8092"
echo "   - GatsbyMobile: http://localhost:8093"
echo ""

# Function to start a service in a new terminal
start_service() {
  local service_name=$1
  local service_dir=$2
  local port=$3

  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    osascript -e "tell application \"Terminal\" to do script \"cd $(pwd)/$service_dir && echo '🚀 Starting $service_name on port $port...' && npm start\""
  elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    gnome-terminal -- bash -c "cd $(pwd)/$service_dir && echo '🚀 Starting $service_name on port $port...' && npm start; exec bash"
  else
    echo "⚠️  Unsupported OS. Please start services manually:"
    echo "   cd $service_dir && npm start"
  fi
}

# Start MFE services first
start_service "SearchMFE" "../GatsbyMobileSearchMFE" "8091"
sleep 3
start_service "DoctorMFE" "../GatsbyMobileDoctorMFE" "8092"
sleep 3
start_service "GatsbyMobile" "." "8093"

echo ""
echo "✅ All mobile services started!"
echo ""
echo "📱 To run on device:"
echo "   - iOS: Press 'i' in the Expo terminal"
echo "   - Android: Press 'a' in the Expo terminal"
echo "   - Physical device: Scan QR code with Expo Go app"
echo ""

