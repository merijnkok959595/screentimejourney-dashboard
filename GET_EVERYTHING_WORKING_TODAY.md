# 🎯 **GET EVERYTHING WORKING TODAY - Action Plan**

## 🚀 **STEP 1: Deploy Marketing Site (5 mins)**

### **✅ Your Current Vercel Project:**
- **Project**: `screentimejourney.com` 
- **Connected to**: `merijnkok959595/screentimejourney-marketing` ✅
- **Domain**: `www.screentimejourney.com` ✅

### **⚙️ Configuration Check:**
**Go to Vercel** → `screentimejourney.com` project → **Settings**:

#### **General Settings:**
```
Framework Preset: Next.js ✅
Build Command: npm run build ✅
Install Command: npm install ✅
Root Directory: (leave empty) ✅
```

#### **Environment Variables** (ADD THESE):
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_51Rd76OCVD9tkw4fn6mxYN1ZIv
STRIPE_SECRET_KEY = sk_live_...
NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_EUR = price_1Sf7ivCVD9tkw4fnpfiMI5BF
```

#### **Then Redeploy:**
**Deployments** → **"Redeploy"** → Should work perfectly!

---

## 📊 **STEP 2: Deploy Dashboard (10 mins)**

### **Create New Vercel Project:**

1. **Vercel Dashboard** → **"Add New..." → "Project"**
2. **Import Git Repository** → `merijnkok959595/screentimejourney-dashboard`
3. **Configure:**
   ```
   Project Name: screentimejourney-dashboard
   Framework Preset: Create React App
   Build Command: npm run build
   Install Command: npm install
   Root Directory: (leave empty)
   ```

4. **Environment Variables:**
   ```bash
   REACT_APP_STRIPE_PUBLISHABLE_KEY = pk_live_51Rd76OCVD9tkw4fn6mxYN1ZIv
   # Skip Cognito vars for now - will add after setup
   ```

5. **Deploy** → Should deploy successfully

6. **Add Custom Domain:**
   - **Settings** → **Domains** → Add: `app.screentimejourney.com`

---

## 🔐 **STEP 3: Set Up AWS Cognito (15 mins)**

### **Create Cognito User Pool:**

```bash
# 1. Go to AWS Console → Cognito
# 2. Create User Pool:
#    - Pool name: screentimejourney-users
#    - Sign-in options: Email
#    - Password policy: Default
#    - Hosted UI: Enabled (optional)
#    - Domain: screentimejourney-auth (or similar)

# 3. Create App Client:
#    - Client name: screentimejourney-dashboard-client
#    - Client type: Public client
#    - Authentication flows: ALLOW_USER_PASSWORD_AUTH, ALLOW_REFRESH_TOKEN_AUTH
```

### **Get Cognito Credentials:**
After creation, you'll get:
```bash
REACT_APP_AWS_REGION = eu-north-1
REACT_APP_USER_POOL_ID = eu-north-1_XXXXXXXX (from User Pool page)
REACT_APP_USER_POOL_CLIENT_ID = abcdef123456... (from App Client page)
```

### **Add to Both Vercel Projects:**
**Marketing site** + **Dashboard** environment variables.

---

## ⚡ **STEP 4: Deploy Stripe Webhook to Lambda (10 mins)**

### **Update Your Lambda Function:**

```bash
# 1. Update mk_shopify_web_app to handle /api/stripe/webhook route
# 2. Add environment variables:
STRIPE_SECRET_KEY = sk_live_...
STRIPE_WEBHOOK_SECRET = whsec_... (get from Stripe after creating webhook)

# 3. Add route in Lambda handler:
if event.get('path') == '/api/stripe/webhook':
    return handle_stripe_webhook(event, context)
```

### **Configure Stripe Webhook:**
**Stripe Dashboard** → **Webhooks** → **Add endpoint**:
```
URL: https://ph578uz078.execute-api.eu-north-1.amazonaws.com/prod/api/stripe/webhook
Events: checkout.session.completed, customer.subscription.updated, customer.subscription.deleted
```

---

## 🧪 **STEP 5: Test Complete Flow (5 mins)**

### **Marketing Site Test:**
1. **Visit**: `www.screentimejourney.com`
2. **Check**: Currency selector (no flags) ✅
3. **Check**: Footer currency selector ✅
4. **Test**: Click "Start now" → Stripe checkout opens ✅

### **Payment Flow Test:**
1. **Complete test payment** (use Stripe test mode)
2. **Should redirect** to `/payment-success`
3. **Should show** account creation
4. **Should redirect** to dashboard with credentials

### **Dashboard Test:**
1. **Visit**: `app.screentimejourney.com`
2. **Check**: Login/Dashboard buttons work
3. **Test**: Authentication flow (if Cognito configured)

---

## 🎯 **WHAT I NEED FROM YOU:**

### **1. Marketing Site Status:**
- **Did the redeploy work?** Visit `www.screentimejourney.com` and check
- **Are you seeing the new features?** (currency selector, etc.)

### **2. Dashboard Deployment:**
- **Can you create the new Vercel project** for dashboard?
- **Start with just Stripe env variables** (skip Cognito for now)

### **3. Cognito Decision:**
- **Do you want to set up Cognito today?** (15 min setup)
- **Or deploy dashboard without it first?** (test other features)

---

## 🎉 **Timeline:**
- **Marketing**: 5 mins ✅
- **Dashboard**: 10 mins 
- **Cognito**: 15 mins (optional)
- **Webhook**: 10 mins
- **Testing**: 5 mins
- **Total**: ~45 mins to complete integration

**What's the current status of your marketing site redeploy - is it working now?** 🔍
