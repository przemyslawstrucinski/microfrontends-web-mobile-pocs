#!/bin/bash

# SvelteKit Microfrontends Stop Script
# This script stops all running microfrontend applications

echo "🛑 Stopping SvelteKit Microfrontends..."

# Kill processes on the specific ports
if lsof -i :5000 > /dev/null 2>&1; then
    echo "Stopping Host App (port 5000)..."
    lsof -ti :5000 | xargs kill -9
    echo "✓ Host App stopped"
fi

if lsof -i :5001 > /dev/null 2>&1; then
    echo "Stopping Search MFE (port 5001)..."
    lsof -ti :5001 | xargs kill -9
    echo "✓ Search MFE stopped"
fi

if lsof -i :5002 > /dev/null 2>&1; then
    echo "Stopping Doctor MFE (port 5002)..."
    lsof -ti :5002 | xargs kill -9
    echo "✓ Doctor MFE stopped"
fi

echo ""
echo "✅ All applications stopped successfully!"

