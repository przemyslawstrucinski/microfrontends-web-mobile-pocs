#!/bin/bash

echo "🚀 Starting all Gatsby microfrontends..."
echo ""

# Check if node_modules exist
if [ ! -d "GatsbySearch/node_modules" ]; then
  echo "📦 Installing dependencies for GatsbySearch..."
  cd GatsbySearch && npm install && cd ..
fi

if [ ! -d "GatsbyDoctor/node_modules" ]; then
  echo "📦 Installing dependencies for GatsbyDoctor..."
  cd GatsbyDoctor && npm install && cd ..
fi

if [ ! -d "GatsbyHostApp/node_modules" ]; then
  echo "📦 Installing dependencies for GatsbyHostApp..."
  cd GatsbyHostApp && npm install && cd ..
fi

echo ""
echo "✅ All dependencies installed!"
echo ""
echo "🌐 Starting development servers..."
echo "   - GatsbySearch MFE: http://localhost:9001"
echo "   - GatsbyDoctor MFE: http://localhost:9002"
echo "   - GatsbyHostApp: http://localhost:9000"
echo ""
echo "⚠️  Note: Start GatsbySearch first, then GatsbyDoctor, then GatsbyHostApp"
echo ""
echo "Opening terminals..."

# Function to start a service in a new terminal
start_service() {
  local service_name=$1
  local service_dir=$2
  local port=$3

  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    osascript -e "tell application \"Terminal\" to do script \"cd $(pwd)/$service_dir && echo '🚀 Starting $service_name on port $port...' && npm run develop\""
  elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    gnome-terminal -- bash -c "cd $(pwd)/$service_dir && echo '🚀 Starting $service_name on port $port...' && npm run develop; exec bash"
  else
    echo "⚠️  Unsupported OS. Please start services manually:"
    echo "   cd $service_dir && npm run develop"
  fi
}

# Start services
start_service "GatsbySearch" "GatsbySearch" "9001"
sleep 2
start_service "GatsbyDoctor" "GatsbyDoctor" "9002"
sleep 2
start_service "GatsbyHostApp" "GatsbyHostApp" "9000"

echo ""
echo "✅ All services started!"
echo ""
echo "📱 Access the application:"
echo "   Main App: http://localhost:9000"
echo "   Search: http://localhost:9001/search"
echo "   Doctors: http://localhost:9002"
echo ""

