# 🚀 Deployment Status - Screen Time Journey

## ✅ Current Setup (COMPLETED)

**Projects Correctly Mapped:**
- ✅ **Marketing Site** (Next.js) → `screentimejourney.com`
- ✅ **Dashboard** (React CRA) → `app.sreentimejourney.com`

**Local Directory Links:**
- ✅ `marketing-site/` → linked to `screentimejourney.com`
- ✅ `vercel-dashboard/` → linked to `app.sreentimejourney.com`

**Cleanup Completed:**
- ✅ Removed 3 accidental Vercel projects (`marketing-site`, `vercel-dashboard`, `screen-time-journey-workspace`)
- ✅ Only existing projects remain

## ⚠️ Current Issues

### 1. Git Author Permission Issue
**Problem:** Vercel shows `merijnkok@Merijns-MacBook-Air.local` needs team access
**Status:** ⏳ Needs resolution

**Solutions to try:**
```bash
# Option 1: Update git config globally
git config --global user.email "your-vercel-email@domain.com"
git config --global user.name "merijnkok959595"

# Option 2: Use force flag
vercel --prod --force

# Option 3: Deploy via GitHub (recommended)
git push origin amplify-deploy    # → app.sreentimejourney.com
git push headless-repo amplify-deploy  # → screentimejourney.com
```

### 2. Dashboard Dependency Issue
**Problem:** AJV/schema-utils version conflicts
**Status:** ✅ Fixed in package.json
**Solution:** Updated to newer AJV versions

## 📋 Next Steps

### Immediate Actions:
1. **Resolve git author issue** (see solutions above)
2. **Deploy marketing site** to `screentimejourney.com`
3. **Deploy dashboard** to `app.sreentimejourney.com`

### Recommended Approach:
**Use GitHub Auto-Deploy** (avoids CLI issues):

```bash
# Set up proper git remotes if needed
git remote -v

# Push to both repos to trigger auto-deploy
git add .
git commit -m "Deploy latest updates"
git push origin amplify-deploy         # Dashboard
git push headless-repo amplify-deploy  # Marketing site
```

## 🔍 Repository Mappings

**GitHub Repos:**
- `screentimejourney.com.git` → Dashboard → `app.sreentimejourney.com`
- `screentimejourney-nextjs-headless.git` → Marketing → `screentimejourney.com`

**Current Git Remotes:**
- `origin` → https://github.com/merijnkok959595/screentimejourney.com.git
- `headless-repo` → https://github.com/merijnkok959595/screentimejourney-nextjs-headless.git

## 🎯 Production URLs (When Deployed)

- **Marketing Site**: https://screentimejourney.com
- **Dashboard**: https://app.sreentimejourney.com

## 📱 Quick Commands

**Check Status:**
```bash
vercel projects ls          # List all projects
vercel ls                  # Current project deployments
```

**Deploy Commands:**
```bash
# Marketing Site
cd marketing-site && vercel --prod

# Dashboard  
cd vercel-dashboard && vercel --prod
```

**Monitor Deployments:**
```bash
vercel logs screentimejourney.com     # Marketing site logs
vercel logs app.sreentimejourney.com  # Dashboard logs
```

---

**Last Updated:** December 17, 2025  
**Status:** Ready for deployment (pending git author fix) 🚀