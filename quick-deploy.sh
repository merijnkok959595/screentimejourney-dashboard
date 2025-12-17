#!/bin/bash

# Quick Deploy Script for Screen Time Journey
# Deploys both marketing site and dashboard to correct Vercel projects

echo "🚀 Deploying Screen Time Journey - Both Sites"
echo "=============================================="

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Function to check vercel auth
check_vercel_auth() {
    if ! vercel whoami >/dev/null 2>&1; then
        echo -e "${RED}❌ Not logged into Vercel. Run: vercel login${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Logged into Vercel as: $(vercel whoami)${NC}"
}

# Function to deploy marketing site
deploy_marketing() {
    echo ""
    echo -e "${BLUE}📱 Deploying Marketing Site → screentimejourney.com${NC}"
    echo "---------------------------------------------------"
    cd marketing-site
    echo "📁 $(pwd)"
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        echo "📦 Installing dependencies..."
        npm install
    fi
    
    # Deploy to production
    echo "🚀 Deploying..."
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Marketing site deployed successfully!${NC}"
    else
        echo -e "${RED}❌ Marketing site deployment failed${NC}"
        return 1
    fi
}

# Function to deploy dashboard
deploy_dashboard() {
    echo ""
    echo -e "${BLUE}🏠 Deploying Dashboard → app.sreentimejourney.com${NC}"
    echo "---------------------------------------------------"
    cd ../vercel-dashboard
    echo "📁 $(pwd)"
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        echo "📦 Installing dependencies..."
        npm install
    fi
    
    # Deploy to production
    echo "🚀 Deploying..."
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Dashboard deployed successfully!${NC}"
    else
        echo -e "${RED}❌ Dashboard deployment failed${NC}"
        return 1
    fi
}

# Main execution
echo -e "${YELLOW}🔍 Checking Vercel authentication...${NC}"
check_vercel_auth

echo ""
echo -e "${YELLOW}📋 Deployment Plan:${NC}"
echo "1. Marketing Site (Next.js) → screentimejourney.com"
echo "2. Dashboard (React) → app.sreentimejourney.com"
echo ""

# Deploy marketing site
deploy_marketing
marketing_result=$?

# Deploy dashboard
deploy_dashboard  
dashboard_result=$?

# Summary
echo ""
echo "🎉 DEPLOYMENT SUMMARY"
echo "===================="

if [ $marketing_result -eq 0 ]; then
    echo -e "✅ Marketing Site: ${GREEN}SUCCESS${NC} → https://screentimejourney.com"
else
    echo -e "❌ Marketing Site: ${RED}FAILED${NC}"
fi

if [ $dashboard_result -eq 0 ]; then
    echo -e "✅ Dashboard: ${GREEN}SUCCESS${NC} → https://app.sreentimejourney.com"
else
    echo -e "❌ Dashboard: ${RED}FAILED${NC}"
fi

echo ""
echo -e "${BLUE}💡 Useful commands:${NC}"
echo "vercel logs screentimejourney.com    # Marketing site logs"
echo "vercel logs app.sreentimejourney.com # Dashboard logs"
echo "vercel ls                            # List all deployments"