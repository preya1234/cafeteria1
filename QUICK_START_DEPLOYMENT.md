# ⚡ Quick Start - Deploy Your Cafeteria1 Project

## 🎯 Goal
Get your project live on the internet in ~30 minutes!

## 📝 Summary
1. **Database**: MongoDB Atlas (free)
2. **Backend**: Render (free)
3. **Frontend**: Vercel (free)

---

## 🚀 5-Minute Overview

### Step 1: MongoDB Atlas (5 min)
1. Sign up: https://cloud.mongodb.com
2. Create free cluster
3. Create database user
4. Whitelist IP: `0.0.0.0/0`
5. Copy connection string

### Step 2: Push to GitHub (2 min)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/cafeteria1.git
git push -u origin main
```

### Step 3: Deploy Backend (10 min)
1. Sign up: https://render.com
2. New Web Service → Connect GitHub
3. Settings:
   - Root Directory: `server`
   - Build: `npm install`
   - Start: `node index.js`
4. Add environment variables (see ENVIRONMENT_VARIABLES.md)
5. Deploy → Copy URL

### Step 4: Deploy Frontend (5 min)
1. Sign up: https://vercel.com
2. Import GitHub repo
3. Root Directory: `Frontend`
4. Add env var: `VITE_API_URL` = your Render URL
5. Deploy → Copy URL

### Step 5: Update Backend (2 min)
1. Go to Render → Environment
2. Update `FRONTEND_URL` = your Vercel URL
3. Save (auto-redeploys)

---

## ✅ Done!
Your app is live at: `https://your-project.vercel.app`

---

## 📚 Detailed Guides
- **Full Guide**: See `DEPLOYMENT_GUIDE.md`
- **Environment Variables**: See `ENVIRONMENT_VARIABLES.md`
- **Checklist**: See `DEPLOYMENT_CHECKLIST.md`

---

## 🆘 Need Help?
1. Check deployment logs in Render/Vercel
2. Verify all environment variables are set
3. Test backend: `https://your-backend.onrender.com/health`
4. Check MongoDB Atlas connection

---

## 🔗 Quick Links
- MongoDB Atlas: https://cloud.mongodb.com
- Render: https://render.com
- Vercel: https://vercel.com
- GitHub: https://github.com

Good luck! 🚀

