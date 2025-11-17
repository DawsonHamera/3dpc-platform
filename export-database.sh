#!/bin/bash

echo "📤 Database Export Script"
echo "========================"
source ./database/.env

# Check if database container is running
if ! docker compose ps db | grep -q "Up"; then
    echo "❌ Database container is not running!"
    echo "💡 Start it with: docker compose up -d db"
    exit 1
fi

echo ""
echo "🗄️ Exporting database from local container..."

# Export the database
docker compose exec db mysqldump -u $MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DATABASE > database/init.sql

if [ $? -eq 0 ]; then
    echo "✅ Database exported successfully to database/init.sql"
    echo ""
    echo "📏 Export size:"
    ls -lh database/init.sql
    echo ""
    echo "🔍 Preview (first 10 lines):"
    head -10 database/init.sql
    echo ""
    echo "💡 Next steps:"
    echo "1. Commit this file to git"
    echo "2. Deploy to VPS - the database will auto-initialize"
    echo "3. Fresh deployments will automatically import this data"
else
    echo "❌ Database export failed!"
    echo "💡 Make sure the database container is healthy"
fi
