# ✅ Deployment Checklist

Use this checklist to ensure you complete all steps for deploying your Cafeteria1 project.

## Pre-Deployment

- [ ] Code is working locally
- [ ] All features tested
- [ ] `.gitignore` file exists (excludes `.env`, `node_modules`, etc.)
- [ ] Code is committed to Git

## Step 1: MongoDB Atlas Setup

- [ ] Created MongoDB Atlas account
- [ ] Created a free cluster (M0 Sandbox)
- [ ] Created database user with password
- [ ] Whitelisted IP address (0.0.0.0/0 for easy access)
- [ ] Copied connection string
- [ ] Tested connection string locally

## Step 2: GitHub Setup

- [ ] Created GitHub account
- [ ] Created new repository
- [ ] Pushed code to GitHub
- [ ] Verified code is on GitHub

## Step 3: Backend Deployment (Render)

- [ ] Created Render account
- [ ] Created new Web Service
- [ ] Connected GitHub repository
- [ ] Set root directory to `server`
- [ ] Set build command: `npm install`
- [ ] Set start command: `node index.js`
- [ ] Added environment variables:
  - [ ] `PORT=3001`
  - [ ] `NODE_ENV=production`
  - [ ] `MONGODB_URI` (from MongoDB Atlas)
  - [ ] `JWT_SECRET` (random strong string)
  - [ ] `FRONTEND_URL` (will update after frontend deploy)
- [ ] Deployed backend
- [ ] Copied backend URL
- [ ] Tested backend health endpoint: `https://your-backend.onrender.com/health`

## Step 4: Frontend Deployment (Vercel)

- [ ] Created Vercel account
- [ ] Imported GitHub repository
- [ ] Set root directory to `Frontend`
- [ ] Verified build settings (auto-detected)
- [ ] Added environment variable:
  - [ ] `VITE_API_URL` (your Render backend URL)
- [ ] Deployed frontend
- [ ] Copied frontend URL

## Step 5: Final Configuration

- [ ] Updated `FRONTEND_URL` in Render backend environment variables
- [ ] Backend redeployed with correct frontend URL
- [ ] Verified CORS is working

## Step 6: Testing

- [ ] Frontend loads correctly
- [ ] Can sign up new user
- [ ] Can sign in
- [ ] Products load from database
- [ ] Can add items to cart
- [ ] Can place order
- [ ] Admin login works (admin@cafeteria.com / admin123)
- [ ] Admin dashboard loads
- [ ] All features work as expected

## Post-Deployment

- [ ] Shared frontend URL with team/users
- [ ] Documented deployment URLs
- [ ] Set up monitoring (optional)
- [ ] Backed up environment variables securely

## 🎉 Deployment Complete!

Your project is now live at:
- **Frontend**: https://your-project.vercel.app
- **Backend**: https://your-backend.onrender.com

---

## Quick Links Reference

- MongoDB Atlas: https://cloud.mongodb.com
- Render: https://render.com
- Vercel: https://vercel.com
- GitHub: https://github.com

---

## Troubleshooting Notes

If something doesn't work:
1. Check Render logs for backend errors
2. Check Vercel logs for frontend errors
3. Verify all environment variables are set
4. Test backend API directly: `https://your-backend.onrender.com/test`
5. Check MongoDB Atlas connection
6. Verify CORS settings

