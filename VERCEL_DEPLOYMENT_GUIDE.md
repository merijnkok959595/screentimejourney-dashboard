# 🚀 Vercel Deployment Guide - Screen Time Journey

## Current Setup Status ✅

**Projects are correctly mapped:**
- **Marketing Site** (Next.js) → `screentimejourney.com`
- **Dashboard** (React CRA) → `app.sreentimejourney.com`

**Local directories:**
- `marketing-site/` → linked to `screentimejourney.com`
- `vercel-dashboard/` → linked to `app.sreentimejourney.com`

## 🔧 Git Integration Setup

### 1. Fix Git Author Permission Issue

The error shows: "Git author must have access to the team"

**Solution:**
```bash
# Update git config with your Vercel account email
git config --global user.email "your-vercel-account-email@example.com"
git config --global user.name "Your Name"

# Or set locally for this repo only
git config user.email "your-vercel-account-email@example.com"
git config user.name "Your Name"
```

### 2. Connect Projects to GitHub (Auto-Deploy)

**For screentimejourney.com (Marketing Site):**
```bash
vercel project add github merijnkok959595/screentimejourney-nextjs-headless --project=screentimejourney.com
```

**For app.sreentimejourney.com (Dashboard):**
```bash
vercel project add github merijnkok959595/screentimejourney.com --project=app.sreentimejourney.com
```

## 🎯 Deployment Methods

### Method 1: Direct Vercel Deploy (Manual)

```bash
# Deploy Marketing Site
cd marketing-site
vercel --prod

# Deploy Dashboard  
cd ../vercel-dashboard
vercel --prod
```

### Method 2: Git-Based Deploy (Recommended)

**Step 1: Push to correct branches**
```bash
# From workspace root
git add .
git commit -m "Deploy latest updates to both sites"

# Push to marketing site repo (triggers screentimejourney.com)
git push headless-repo amplify-deploy

# Push to dashboard repo (triggers app.sreentimejourney.com)  
git push origin amplify-deploy
```

## 📋 Repository Mappings

**Current Git Remotes:**
```bash
origin → https://github.com/merijnkok959595/screentimejourney.com.git
headless-repo → https://github.com/merijnkok959595/screentimejourney-nextjs-headless.git
```

**Deployment Flow:**
```
marketing-site/ code → headless-repo → screentimejourney.com (Vercel)
vercel-dashboard/ code → origin → app.sreentimejourney.com (Vercel)
```

## 🛠️ Quick Deploy Commands

**Deploy Both Sites:**
```bash
# From workspace root
./quick-deploy.sh
```

**Deploy Individual Sites:**
```bash
# Marketing Site Only
cd marketing-site && vercel --prod

# Dashboard Only  
cd vercel-dashboard && vercel --prod
```

## 📊 Environment Variables

**Marketing Site (`screentimejourney.com`):**
- Add via: `vercel env add`
- Or Vercel Dashboard → screentimejourney.com → Settings → Environment Variables

**Dashboard (`app.sreentimejourney.com`):**
- Add via: `vercel env add` 
- Or Vercel Dashboard → app.sreentimejourney.com → Settings → Environment Variables

## 🔍 Monitoring & Logs

```bash
# View deployment logs
vercel logs screentimejourney.com
vercel logs app.sreentimejourney.com

# Check project status
vercel ls

# View specific project deployments
cd marketing-site && vercel ls
cd vercel-dashboard && vercel ls
```

## 🎉 Production URLs

- **Marketing Site**: https://screentimejourney.com
- **Dashboard**: https://app.sreentimejourney.com

## 🚨 Troubleshooting

### Issue: "Git author must have access"
**Solution**: Update git config with your Vercel account email (see step 1 above)

### Issue: "Project not found"
**Solution**: Re-link projects:
```bash
cd marketing-site && vercel link --project=screentimejourney.com --yes
cd vercel-dashboard && vercel link --project=app.sreentimejourney.com --yes
```

### Issue: Environment variables not working
**Solution**: Set via Vercel CLI:
```bash
cd marketing-site && vercel env add
cd vercel-dashboard && vercel env add
```

## ✅ Next Steps

1. ✅ Projects correctly linked
2. ⏳ Fix git author permissions
3. ⏳ Connect GitHub auto-deploy
4. ⏳ Deploy latest code
5. ⏳ Verify both sites are live

---

**Last Updated**: December 17, 2025
**Status**: Ready for deployment 🚀