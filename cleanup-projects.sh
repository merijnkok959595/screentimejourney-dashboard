#!/bin/bash

# Script to delete the accidentally created Vercel projects

echo "🗑️ Cleaning up unwanted Vercel projects..."

# Delete the 3 unwanted projects with yes responses
echo "y" | vercel projects rm marketing-site
echo "y" | vercel projects rm vercel-dashboard  
echo "y" | vercel projects rm screen-time-journey-workspace

echo "✅ Cleanup complete!"
echo "📋 Remaining projects should only be:"
echo "  - screentimejourney.com (for dashboard)"
echo "  - app.sreentimejourney.com (for marketing site)"

# Verify final project list
vercel projects ls