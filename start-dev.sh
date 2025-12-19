#!/bin/bash

# Development Environment Startup Script
cd api && \
  echo "Starting Express server..." && \
  npm run start:dev &
cd client && \
  echo "Starting Vite development server..." && \
  npx vite serve &
echo "🚀 Development environment is up and running!"
echo "You can access the application at http://localhost:3000"