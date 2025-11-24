# 🔧 Frontend-Backend Connection Fix

## ✅ Changes Made

### 1. Updated Frontend API URLs
- **37 files updated** - All frontend components now use Render backend URL as fallback
- Changed fallback from `'http://localhost:3001'` to `'https://cafeteria1-vodr.onrender.com'`
- Components will now automatically use Render URL in production if `VITE_API_URL` environment variable is not set

### 2. Updated Backend CORS Settings
- Added support for **Netlify** deployments (`.netlify.app` domains)
- Added support for **Vercel** deployments (`.vercel.app` domains)
- Backend now accepts requests from any Netlify or Vercel deployment automatically

### 3. Configuration Files
- `Frontend/src/config/api.js` - Updated to use Render URL as default
- Created `.env.production` file for production builds

---

## 📋 Next Steps for Deployment

### For Netlify Deployment:

1. **Set Environment Variable in Netlify:**
   - Go to Netlify Dashboard → Your Site → Site Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://cafeteria1-vodr.onrender.com`
   - Save and redeploy

2. **Update Render Backend CORS:**
   - Go to Render Dashboard → Your Backend Service → Environment
   - Set `FRONTEND_URL` = `https://your-site.netlify.app` (your Netlify URL)
   - Save (this will trigger a redeploy)

### For Vercel Deployment:

1. **Set Environment Variable in Vercel:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://cafeteria1-vodr.onrender.com`
   - Save and redeploy

2. **Update Render Backend CORS:**
   - Go to Render Dashboard → Your Backend Service → Environment
   - Set `FRONTEND_URL` = `https://your-project.vercel.app` (your Vercel URL)
   - Save (this will trigger a redeploy)

---

## 🧪 Testing

1. **Test Backend Directly:**
   ```
   https://cafeteria1-vodr.onrender.com/health
   https://cafeteria1-vodr.onrender.com/products
   ```

2. **Check Browser Console:**
   - Open your frontend site
   - Open Developer Tools (F12)
   - Check Network tab - API calls should go to `cafeteria1-vodr.onrender.com`
   - No CORS errors should appear

---

## ✅ Verification Checklist

- [ ] Frontend environment variable `VITE_API_URL` is set in deployment platform
- [ ] Backend `FRONTEND_URL` environment variable is set to your frontend URL
- [ ] Backend health check works: `https://cafeteria1-vodr.onrender.com/health`
- [ ] Frontend can load products from backend
- [ ] No CORS errors in browser console
- [ ] Sign in/sign up works
- [ ] Cart functionality works
- [ ] Orders can be placed

---

## 🐛 Troubleshooting

### If you still see "could not connect to server":

1. **Check environment variable:**
   - Verify `VITE_API_URL` is set in Netlify/Vercel
   - Redeploy after setting the variable

2. **Check backend logs:**
   - Go to Render → Your Service → Logs
   - Look for connection errors

3. **Test backend directly:**
   - Visit `https://cafeteria1-vodr.onrender.com/health` in browser
   - Should return JSON response

4. **Clear browser cache:**
   - Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
   - Or use incognito/private window

---

## 📝 Files Changed

- `server/index.js` - Updated CORS to allow Netlify/Vercel domains
- `Frontend/src/config/api.js` - Updated default API URL
- All `Frontend/src/**/*.jsx` files - Updated API URL fallbacks (37 files)

---

**Status:** ✅ Ready for deployment!

