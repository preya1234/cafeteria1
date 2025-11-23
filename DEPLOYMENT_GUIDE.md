# 🚀 Deployment Guide - Cafeteria1 Project

This guide will help you deploy your Cafeteria1 project to the internet so you can share it with a public link.

## 📋 Prerequisites

1. **GitHub Account** - Free account at [github.com](https://github.com)
2. **MongoDB Atlas Account** - Free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
3. **Vercel Account** - Free account at [vercel.com](https://vercel.com) (for frontend)
4. **Render Account** - Free account at [render.com](https://render.com) (for backend)

---

## 🗄️ Step 1: Set Up MongoDB Atlas (Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up
2. Create a new **FREE** cluster (M0 Sandbox)
3. Create a database user:
   - Go to **Database Access** → **Add New Database User**
   - Username: `cafeteria_user` (or any name)
   - Password: Create a strong password (save it!)
   - Database User Privileges: **Read and write to any database**
4. Whitelist your IP:
   - Go to **Network Access** → **Add IP Address**
   - Click **Allow Access from Anywhere** (0.0.0.0/0) for easy deployment
5. Get your connection string:
   - Go to **Database** → **Connect** → **Connect your application**
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/`)
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `Cafeteria` or your preferred database name
   - **Save this connection string** - you'll need it later!

---

## 🔧 Step 2: Push Code to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   cd E:\Cafeteria1
   git init
   ```

2. **Create a `.gitignore` file** (if it doesn't exist):
   ```bash
   # Create .gitignore
   echo node_modules/ > .gitignore
   echo .env >> .gitignore
   echo .env.local >> .gitignore
   echo dist/ >> .gitignore
   echo uploads/ >> .gitignore
   ```

3. **Create a GitHub repository**:
   - Go to [github.com](https://github.com)
   - Click **New Repository**
   - Name it: `cafeteria1` (or any name)
   - Make it **Public** (for free hosting)
   - **Don't** initialize with README

4. **Push your code**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cafeteria1.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

---

## 🖥️ Step 3: Deploy Backend to Render

1. **Sign up at Render**:
   - Go to [render.com](https://render.com)
   - Sign up with GitHub (easiest option)

2. **Create a New Web Service**:
   - Click **New +** → **Web Service**
   - Connect your GitHub repository
   - Select your `cafeteria1` repository
   - Choose the **server** folder as the root directory

3. **Configure the service**:
   - **Name**: `cafeteria-backend` (or any name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Plan**: **Free**

4. **Set Environment Variables** (click **Advanced** → **Environment Variables**):
   ```
   PORT=3001
   NODE_ENV=production
   MONGODB_URI=your_mongodb_connection_string_here
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
   FRONTEND_URL=https://your-frontend-url.vercel.app
   CLOUDINARY_CLOUD_NAME=(optional - leave empty if not using)
   CLOUDINARY_API_KEY=(optional)
   CLOUDINARY_API_SECRET=(optional)
   ```
   - Replace `your_mongodb_connection_string_here` with the MongoDB Atlas connection string from Step 1
   - Replace `your-frontend-url.vercel.app` with your Vercel URL (you'll get this in Step 4)
   - Generate a random JWT_SECRET (you can use: `openssl rand -base64 32` or any random string)

5. **Deploy**:
   - Click **Create Web Service**
   - Wait for deployment (5-10 minutes)
   - **Copy your backend URL** (e.g., `https://cafeteria-backend.onrender.com`)

---

## 🎨 Step 4: Deploy Frontend to Vercel

1. **Sign up at Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import your project**:
   - Click **Add New** → **Project**
   - Import your GitHub repository
   - Select your `cafeteria1` repository

3. **Configure the project**:
   - **Framework Preset**: Vite
   - **Root Directory**: `Frontend`
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `dist` (should auto-detect)
   - **Install Command**: `npm install`

4. **Set Environment Variables**:
   - Click **Environment Variables**
   - Add:
     ```
     VITE_API_URL=https://your-backend-url.onrender.com
     ```
   - Replace `your-backend-url.onrender.com` with your Render backend URL from Step 3

5. **Deploy**:
   - Click **Deploy**
   - Wait for deployment (2-3 minutes)
   - **Copy your frontend URL** (e.g., `https://cafeteria1.vercel.app`)

---

## 🔄 Step 5: Update Backend with Frontend URL

1. Go back to **Render** → Your backend service
2. Go to **Environment** tab
3. Update `FRONTEND_URL` to your Vercel frontend URL
4. Click **Save Changes** (this will trigger a redeploy)

---

## ✅ Step 6: Test Your Deployment

1. **Visit your frontend URL** (e.g., `https://cafeteria1.vercel.app`)
2. **Test features**:
   - Sign up a new user
   - Browse products
   - Add items to cart
   - Place an order
   - Test admin login (admin@cafeteria.com / admin123)

---

## 🔐 Important Security Notes

1. **JWT_SECRET**: Use a strong, random string in production
2. **MongoDB Password**: Keep it secure
3. **Environment Variables**: Never commit `.env` files to GitHub
4. **Admin Credentials**: Consider changing the default admin password

---

## 🐛 Troubleshooting

### Backend Issues:
- **Check Render logs**: Go to Render → Your service → **Logs** tab
- **Verify MongoDB connection**: Check if MONGODB_URI is correct
- **Check environment variables**: Make sure all are set correctly

### Frontend Issues:
- **Check Vercel logs**: Go to Vercel → Your project → **Deployments** → Click on deployment → **View Function Logs**
- **Verify API URL**: Check if VITE_API_URL points to your backend
- **CORS errors**: Make sure FRONTEND_URL in backend matches your Vercel URL

### Common Errors:
- **"Cannot connect to database"**: Check MongoDB Atlas IP whitelist
- **"CORS error"**: Update FRONTEND_URL in backend environment variables
- **"404 on API calls"**: Verify VITE_API_URL in frontend environment variables

---

## 📱 Your Live Links

After deployment, you'll have:
- **Frontend**: `https://your-project.vercel.app`
- **Backend API**: `https://your-backend.onrender.com`
- **Database**: MongoDB Atlas (cloud-hosted)

---

## 🎉 Success!

Your Cafeteria1 project is now live on the internet! Share your frontend URL with anyone.

---

## 💡 Alternative Deployment Options

### Backend Alternatives:
- **Railway** (railway.app) - Similar to Render, free tier available
- **Heroku** (heroku.com) - Requires credit card for free tier
- **Fly.io** (fly.io) - Good free tier

### Frontend Alternatives:
- **Netlify** (netlify.com) - Similar to Vercel
- **GitHub Pages** - Free but requires different build setup

---

## 📞 Need Help?

If you encounter issues:
1. Check the logs in Render/Vercel
2. Verify all environment variables are set
3. Make sure MongoDB Atlas is accessible
4. Check that CORS is configured correctly

Good luck with your deployment! 🚀

