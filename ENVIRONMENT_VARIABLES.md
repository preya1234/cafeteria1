# 🔐 Environment Variables Reference

This file contains all the environment variables you need to set for deployment.

## Backend Environment Variables (Render)

Set these in Render → Your Service → Environment:

```env
PORT=3001
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/Cafeteria?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
FRONTEND_URL=https://your-frontend-url.vercel.app
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
STRIPE_SECRET_KEY=
```

### How to get each value:

1. **MONGODB_URI**: 
   - From MongoDB Atlas → Database → Connect → Connect your application
   - Replace `<password>` and `<dbname>` in the connection string

2. **JWT_SECRET**: 
   - Generate a random string: `openssl rand -base64 32`
   - Or use any long random string (minimum 32 characters)

3. **FRONTEND_URL**: 
   - Your Vercel deployment URL (e.g., `https://cafeteria1.vercel.app`)
   - Update this after deploying frontend

4. **EMAIL_USER & EMAIL_PASS**: 
   - Your Gmail address
   - Gmail App Password (not your regular password)
   - Get it from: https://support.google.com/accounts/answer/185833

5. **CLOUDINARY_*** (Optional): 
   - Only needed if using Cloudinary for image hosting
   - Sign up at: https://cloudinary.com

6. **STRIPE_SECRET_KEY** (Optional): 
   - Only needed for real payments
   - Get from: https://dashboard.stripe.com/apikeys

---

## Frontend Environment Variables (Vercel)

Set these in Vercel → Your Project → Settings → Environment Variables:

```env
VITE_API_URL=https://your-backend-url.onrender.com
VITE_APP_NAME=Brew Haven Cafeteria
```

### How to get each value:

1. **VITE_API_URL**: 
   - Your Render backend URL (e.g., `https://cafeteria-backend.onrender.com`)
   - Get this after deploying backend

2. **VITE_APP_NAME**: 
   - Optional: Your app name for display

---

## Local Development (.env files)

For local development, create these files:

### `server/.env`:
```env
PORT=3001
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/Cafeteria
JWT_SECRET=your_local_jwt_secret
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

### `Frontend/.env`:
```env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Brew Haven Cafeteria
```

---

## ⚠️ Important Notes

1. **Never commit `.env` files to GitHub** - they contain secrets!
2. **Use different JWT_SECRET for production** - don't use the same one as development
3. **Update FRONTEND_URL after deploying** - backend needs to know frontend URL for CORS
4. **MongoDB password** - Use a strong password and keep it secure
5. **Gmail App Password** - Not your regular Gmail password, must be an App Password

---

## 🔄 After Deployment

1. Deploy backend first → Get backend URL
2. Deploy frontend → Get frontend URL
3. Update `FRONTEND_URL` in backend environment variables
4. Update `VITE_API_URL` in frontend environment variables (if needed)
5. Redeploy both services

---

## ✅ Verification

After setting environment variables, verify:

- Backend health check: `https://your-backend.onrender.com/health`
- Frontend loads: `https://your-frontend.vercel.app`
- API calls work from frontend
- Database connection works (check Render logs)
- CORS is working (no CORS errors in browser console)

