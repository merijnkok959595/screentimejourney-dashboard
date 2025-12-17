# 🚀 **VERCEL DEPLOYMENT - Git Integration Method**

## ✅ **Your Code is Ready & Pushed to Git**

Since the local npm cache has issues, let's use Vercel's **Git Integration** for deployment:

---

## 🔗 **Method 1: Connect GitHub to Vercel (Recommended)**

### **Step 1: Go to Vercel Dashboard**
Visit: [https://vercel.com/dashboard](https://vercel.com/dashboard)

### **Step 2: Import Project from Git**
1. Click **"Add New..." → "Project"**
2. Click **"Import Git Repository"** 
3. Connect your GitHub account if needed
4. Find repository: `merijnkok959595/screentimejourney.com`
5. Select **"Import"**

### **Step 3: Configure Project**
```
Project Name: screentimejourney-marketing
Framework Preset: Next.js
Root Directory: marketing-site/
Branch: amplify-deploy
```

### **Step 4: Add Environment Variables**
In Vercel project settings, add:
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51Rd76OCVD9tkw4fn6mxYN1ZIv...
STRIPE_SECRET_KEY=sk_live_51Rd76OCVD9tkw4fn...
NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_EUR=price_1Sf7ivCVD9tkw4fnpfiMI5BF
```

### **Step 5: Deploy**
Click **"Deploy"** - Vercel will build from your git repository!

---

## 🔗 **Method 2: Use Existing Project (If Already Created)**

If you already have a Vercel project:

### **Step 1: Connect to Git**
1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Go to **Settings → Git**
3. Connect to: `merijnkok959595/screentimejourney.com`
4. Set **Production Branch**: `amplify-deploy`
5. Set **Root Directory**: `marketing-site/`

### **Step 2: Trigger Deployment**
1. Go to **Deployments** tab
2. Click **"Redeploy"** or push new commit to trigger auto-deployment

---

## 📋 **Your Repository Info**

- **Repository**: `merijnkok959595/screentimejourney.com` 
- **Branch**: `amplify-deploy`
- **Marketing Site Folder**: `marketing-site/`
- **Latest Commit**: All fixes applied ✅

---

## 🎯 **Expected Result**

**Your Marketing Site URL will be:**
```
https://screentimejourney-marketing.vercel.app
```

Or similar based on your project name.

---

## ✅ **What's Already Done**

- ✅ **Code pushed to git** with all fixes
- ✅ **Build issues resolved** (Suspense, API routes, etc.)
- ✅ **Dependencies fixed** in package.json
- ✅ **Next.js config optimized** for Vercel

---

## 🚨 **After Deployment**

Once deployed, you'll need to:

### **1. Add Stripe Keys**
Add these to Vercel Environment Variables:
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_EUR=price_1Sf7ivCVD9tkw4fnpfiMI5BF
```

### **2. Test Marketing Site**
1. Visit your Vercel URL
2. Check currency selector (no flags) ✅
3. Check footer currency selector ✅  
4. Click "Start now" → Should open Stripe checkout

### **3. Configure Stripe Webhook**
Add webhook in Stripe Dashboard:
```
URL: https://ph578uz078.execute-api.eu-north-1.amazonaws.com/prod/api/stripe/webhook
Events: checkout.session.completed, customer.subscription.*
```

---

## 🎉 **Both Apps Will Be Live**

| App | Platform | URL | Status |
|-----|----------|-----|--------|
| **Marketing** | Vercel | `screentimejourney-marketing.vercel.app` | 🚀 Deploy via Git |
| **Dashboard** | Amplify | `app.screentimejourney.com` | ✅ Auto-deploys from git |

**Git integration = reliable deployment!** 🚀