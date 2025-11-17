#!/bin/bash

# Development Environment Startup Script
docker compose --profile dev up -d
echo "🚀 Development environment is up and running!"
echo "You can access the application at http://localhost:5173"