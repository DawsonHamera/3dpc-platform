#!/bin/bash

# Database Reset Script - Reinitialize database from init.sql
# This script stops the database, removes the data volume, and restarts 
# which forces MariaDB to run the initialization scripts again

echo "🔄 Resetting database to init.sql state..."

# Stop all containers
echo "⏹️  Stopping containers..."
docker compose down

# Remove the database volume to force reinitialization
echo "🗑️  Removing database volume..."
docker volume rm 3dpc-docker_dbdata 2>/dev/null || echo "   Volume didn't exist or already removed"

# Start only the database to let it initialize
echo "🔧 Starting database for initialization..."
docker compose up -d db

# Wait for database to be ready
echo "⏳ Waiting for database to initialize..."
sleep 10

# Check if database is ready
echo "🏥 Checking database health..."
while ! docker exec 3dpc-docker-db-1 mysqladmin ping -h localhost -u root -prootpass --silent; do
    echo "   Database not ready yet, waiting..."
    sleep 2
done

echo "✅ Database reset complete!"
echo "   - Database volume recreated"
echo "   - init.sql has been executed"
echo "   - Database is ready for connections"

echo ""
echo "🚀 You can now start your application:"
echo "   Development: docker compose --profile dev up -d"
echo "   Production:  docker compose --profile prod up -d"
