#!/bin/bash

# Quick Deployment Commands - Screen Time Journey
# Use these for fast deployments without interactive prompts

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

case "$1" in
    "marketing")
        echo -e "${BLUE}🌐 Deploying Marketing Site Only${NC}"
        git add . && git commit -m "Update marketing site $(date +%Y%m%d-%H%M)" || true
        git push headless-repo HEAD:main
        echo -e "${GREEN}✅ Marketing site deployed to screentimejourney.com${NC}"
        ;;
    "dashboard")
        echo -e "${BLUE}📱 Deploying Dashboard Only${NC}"
        git add . && git commit -m "Update dashboard $(date +%Y%m%d-%H%M)" || true
        git push origin HEAD:main
        echo -e "${GREEN}✅ Dashboard deployed to app.sreentimejourney.com${NC}"
        ;;
    "both")
        echo -e "${BLUE}🚀 Deploying Both Sites${NC}"
        git add . && git commit -m "Deploy both sites $(date +%Y%m%d-%H%M)" || true
        echo "Deploying dashboard to app.sreentimejourney.com..."
        git push origin HEAD:main
        echo "Deploying marketing site to screentimejourney.com..."
        git push headless-repo HEAD:main
        echo -e "${GREEN}✅ Both sites deployed!${NC}"
        echo -e "${BLUE}🌐 Live URLs:${NC}"
        echo "  Dashboard: https://app.sreentimejourney.com"
        echo "  Marketing: https://screentimejourney.com"
        ;;
    "status")
        echo -e "${BLUE}📊 Deployment Status${NC}"
        echo "Vercel Projects:"
        vercel projects ls
        echo ""
        echo "Git Remotes:"
        git remote -v
        ;;
    *)
        echo -e "${YELLOW}Quick Deployment Commands${NC}"
        echo "========================"
        echo ""
        echo "Usage: ./quick-deploy-commands.sh [option]"
        echo ""
        echo "Options:"
        echo "  marketing  - Deploy marketing site only → screentimejourney.com"
        echo "  dashboard  - Deploy dashboard only → app.sreentimejourney.com"  
        echo "  both       - Deploy both sites"
        echo "  status     - Check deployment status"
        echo ""
        echo "Examples:"
        echo "  ./quick-deploy-commands.sh marketing"
        echo "  ./quick-deploy-commands.sh both"
        ;;
esac