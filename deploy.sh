#!/bin/bash

# 🚀 Screen Time Journey - Auto Deployment System
# Deploys both marketing site and dashboard with git-based auto-deploy

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${PURPLE}🚀 Screen Time Journey - Auto Deployment${NC}"
echo "=========================================="

# Function to check git status
check_git_status() {
    if ! git diff --quiet || ! git diff --cached --quiet; then
        echo -e "${YELLOW}⚠️  You have uncommitted changes.${NC}"
        git status --short
        echo ""
        read -p "Do you want to commit these changes? (y/n): " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            commit_changes
        else
            echo -e "${RED}❌ Deployment cancelled. Please commit or stash your changes.${NC}"
            exit 1
        fi
    else
        echo -e "${GREEN}✅ Working directory clean${NC}"
    fi
}

# Function to commit changes
commit_changes() {
    echo -e "${BLUE}📝 Committing changes...${NC}"
    git add .
    
    # Default commit message or ask for custom
    DEFAULT_MSG="Deploy: Update marketing site and dashboard $(date +%Y%m%d-%H%M)"
    read -p "Commit message (press Enter for default): " CUSTOM_MSG
    COMMIT_MSG=${CUSTOM_MSG:-$DEFAULT_MSG}
    
    git commit -m "$COMMIT_MSG"
    echo -e "${GREEN}✅ Changes committed${NC}"
}

# Function to deploy both sites
deploy_both() {
    echo ""
    echo -e "${BLUE}🚀 Starting deployments...${NC}"
    echo ""
    
    # Deploy Dashboard (React) to app.sreentimejourney.com
    echo -e "${YELLOW}📱 Deploying Dashboard → app.sreentimejourney.com${NC}"
    echo "Pushing to: origin (screentimejourney.com repo)"
    if git push origin HEAD:main; then
        echo -e "${GREEN}✅ Dashboard deployment triggered successfully!${NC}"
        DASHBOARD_SUCCESS=true
    else
        echo -e "${RED}❌ Dashboard deployment failed${NC}"
        DASHBOARD_SUCCESS=false
    fi
    
    echo ""
    
    # Deploy Marketing Site (Next.js) to screentimejourney.com  
    echo -e "${YELLOW}🌐 Deploying Marketing Site → screentimejourney.com${NC}"
    echo "Pushing to: headless-repo (screentimejourney-nextjs-headless repo)"
    if git push headless-repo HEAD:main; then
        echo -e "${GREEN}✅ Marketing site deployment triggered successfully!${NC}"
        MARKETING_SUCCESS=true
    else
        echo -e "${RED}❌ Marketing site deployment failed${NC}"
        MARKETING_SUCCESS=false
    fi
}

# Function to show deployment URLs
show_deployment_info() {
    echo ""
    echo -e "${PURPLE}🎉 DEPLOYMENT SUMMARY${NC}"
    echo "===================="
    
    if [ "$DASHBOARD_SUCCESS" = true ]; then
        echo -e "✅ Dashboard: ${GREEN}DEPLOYED${NC} → https://app.sreentimejourney.com"
    else
        echo -e "❌ Dashboard: ${RED}FAILED${NC}"
    fi
    
    if [ "$MARKETING_SUCCESS" = true ]; then
        echo -e "✅ Marketing Site: ${GREEN}DEPLOYED${NC} → https://screentimejourney.com"
    else
        echo -e "❌ Marketing Site: ${RED}FAILED${NC}"
    fi
    
    echo ""
    echo -e "${BLUE}📊 Monitor deployments:${NC}"
    echo "• Vercel Dashboard: https://vercel.com/merijnkok959595s-projects"
    echo "• Check logs: vercel logs screentimejourney.com"
    echo "• Check logs: vercel logs app.sreentimejourney.com"
    
    if [ "$DASHBOARD_SUCCESS" = true ] || [ "$MARKETING_SUCCESS" = true ]; then
        echo ""
        echo -e "${GREEN}🎯 Deployments will be live in 1-2 minutes!${NC}"
    fi
}

# Main execution
echo -e "${BLUE}📋 Deployment Plan:${NC}"
echo "1. Check for uncommitted changes"
echo "2. Deploy Dashboard (React) → app.sreentimejourney.com"
echo "3. Deploy Marketing Site (Next.js) → screentimejourney.com"
echo ""

# Check if we should proceed
read -p "Proceed with deployment? (y/n): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Deployment cancelled.${NC}"
    exit 0
fi

# Execute deployment steps
check_git_status
deploy_both
show_deployment_info

echo ""
echo -e "${GREEN}🎉 Deployment process complete!${NC}"