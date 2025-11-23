# 🗄️ MongoDB Atlas Setup - Detailed Guide

This guide will walk you through setting up MongoDB Atlas and getting your connection string step by step.

---

## Step 1: Create MongoDB Atlas Account

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click **"Try Free"** or **"Sign Up"**
3. Sign up with:
   - Google account (easiest), OR
   - Email address
4. Verify your email if needed

---

## Step 2: Create a Free Cluster

1. After logging in, you'll see the **"Deploy a cloud database"** screen
2. Choose **"M0 FREE"** (Free Shared Cluster) - This is the free tier
3. Select a **Cloud Provider**:
   - AWS (recommended)
   - Google Cloud
   - Azure
4. Select a **Region**:
   - Choose the region closest to you (e.g., `N. Virginia (us-east-1)` for US)
   - This doesn't matter much for free tier, but closer = slightly faster
5. Click **"Create"** or **"Create Cluster"**
6. **Wait 3-5 minutes** for the cluster to be created (you'll see a progress bar)

---

## Step 3: Create Database User

1. While the cluster is being created, you'll see a popup asking to **"Create Database User"**
   - If you don't see it, go to **"Database Access"** in the left sidebar

2. **Create Database User**:
   - **Username**: Enter a username (e.g., `cafeteria_user` or `admin`)
   - **Password**: Click **"Autogenerate Secure Password"** OR create your own
   - **⚠️ IMPORTANT**: **Copy and save the password** - you won't see it again!
   - **Database User Privileges**: Select **"Read and write to any database"**
   - Click **"Create User"**

3. **Save your credentials**:
   - Username: `_________________`
   - Password: `_________________`
   - (Write these down somewhere safe!)

---

## Step 4: Whitelist IP Address (Network Access)

1. You'll see another popup asking to **"Whitelist IP Address"**
   - If you don't see it, go to **"Network Access"** in the left sidebar

2. **Add IP Address**:
   - For easy deployment, click **"Allow Access from Anywhere"**
   - This adds `0.0.0.0/0` (allows all IPs)
   - **For production**, you should restrict this, but for now this is fine
   - Click **"Confirm"** or **"Add IP Address"**

---

## Step 5: Get Your Connection String

1. **Go to Database**:
   - Click **"Database"** in the left sidebar (or **"Clusters"**)
   - You should see your cluster (named something like "Cluster0")

2. **Connect to your cluster**:
   - Click the **"Connect"** button on your cluster

3. **Choose connection method**:
   - Select **"Connect your application"** (the third option)
   - NOT "Connect using MongoDB Compass" or "Connect using Mongo Shell"

4. **Get the connection string**:
   - You'll see a connection string that looks like:
     ```
     mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
   - **Copy this entire string**

5. **Modify the connection string**:
   - Replace `<username>` with your database username (from Step 3)
   - Replace `<password>` with your database password (from Step 3)
   - Add your database name at the end:
     - Change `?retryWrites=true&w=majority` 
     - To `?retryWrites=true&w=majority` (keep this part)
     - Add `/Cafeteria` before the `?`:
   
   **Final format should be:**
   ```
   mongodb+srv://cafeteria_user:your_password@cluster0.xxxxx.mongodb.net/Cafeteria?retryWrites=true&w=majority
   ```

   **Example:**
   ```
   mongodb+srv://cafeteria_user:MyP@ssw0rd123@cluster0.abc123.mongodb.net/Cafeteria?retryWrites=true&w=majority
   ```

---

## Step 6: Test Your Connection String

### Option A: Test in MongoDB Atlas (Easiest)

1. In MongoDB Atlas, go to **"Database"** → Click **"Connect"** on your cluster
2. Choose **"Connect using MongoDB Compass"**
3. Copy the connection string shown
4. If it connects, your connection string is correct!

### Option B: Test Locally (Advanced)

1. Create a test file `test-connection.js` in your `server` folder:
   ```javascript
   const mongoose = require('mongoose');
   
   const MONGODB_URI = 'mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/Cafeteria?retryWrites=true&w=majority';
   
   mongoose.connect(MONGODB_URI)
     .then(() => console.log('✅ Connected to MongoDB!'))
     .catch(err => console.error('❌ Connection error:', err));
   ```

2. Run it:
   ```bash
   cd server
   node test-connection.js
   ```

3. If you see "✅ Connected to MongoDB!", it works!

---

## Step 7: Save Your Connection String

**Save this connection string** - you'll need it when deploying to Render:

```
mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/Cafeteria?retryWrites=true&w=majority
```

**Where to save it:**
- In a text file on your computer
- In your password manager
- You'll paste it into Render's environment variables later

---

## 🔍 Visual Guide - What You Should See

### In MongoDB Atlas Dashboard:
```
┌─────────────────────────────────────┐
│  MongoDB Atlas                      │
├─────────────────────────────────────┤
│  [Database] [Network Access]        │
│  [Database Access] [Security]      │
│                                     │
│  Clusters                           │
│  ┌───────────────────────────────┐ │
│  │ Cluster0                      │ │
│  │ Status: Running               │ │
│  │ [Connect] [...]               │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Connection String Format:
```
mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority
         └─────┘ └──────┘        └──────────────┘ └──────────┘ └──────────────────────────┘
         Username Password        Cluster URL      Database      Connection Options
```

---

## ⚠️ Common Issues & Solutions

### Issue 1: "Authentication failed"
- **Solution**: Double-check your username and password
- Make sure you replaced `<username>` and `<password>` in the connection string
- Password might have special characters - make sure they're URL-encoded

### Issue 2: "IP not whitelisted"
- **Solution**: Go to Network Access → Add IP Address → Allow from anywhere (0.0.0.0/0)

### Issue 3: "Connection timeout"
- **Solution**: 
  - Check your internet connection
  - Make sure the cluster is fully created (wait a few minutes)
  - Try again

### Issue 4: "Invalid connection string"
- **Solution**: 
  - Make sure there are no spaces in the connection string
  - Check that you added `/Cafeteria` before the `?`
  - Verify the format matches the example above

---

## ✅ Checklist

Before moving to the next step, make sure you have:

- [ ] MongoDB Atlas account created
- [ ] Free cluster (M0) created and running
- [ ] Database user created with username and password saved
- [ ] IP address whitelisted (0.0.0.0/0)
- [ ] Connection string copied and modified
- [ ] Connection string tested (optional but recommended)
- [ ] Connection string saved securely

---

## 🎯 Next Steps

Once you have your MongoDB connection string:

1. **Continue with deployment**: Go back to `DEPLOYMENT_GUIDE.md`
2. **Use the connection string**: You'll paste it into Render's environment variables as `MONGODB_URI`
3. **Test it**: After deploying, check Render logs to verify database connection

---

## 📞 Need More Help?

- MongoDB Atlas Documentation: https://docs.atlas.mongodb.com
- MongoDB Connection String Guide: https://docs.mongodb.com/manual/reference/connection-string/

---

**You're all set!** 🎉 Now you can use this connection string in your deployment.

