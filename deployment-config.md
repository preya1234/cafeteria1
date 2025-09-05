# 🚀 Deployment Configuration

## Environment Variables Setup

### Backend Environment Variables (for Render)
```
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cafeteria
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_xyz789
EMAIL_USER=bh.cafe712@gmail.com
EMAIL_PASS=your_email_app_password_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
FRONTEND_URL=https://your-frontend-url.vercel.app
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Frontend Environment Variables (for Vercel)
```
VITE_API_URL=https://your-backend-url.onrender.com
VITE_APP_NAME=Brew Haven Cafeteria
```

## Deployment Steps Completed:
✅ Git repository setup
✅ Environment configuration prepared
✅ Cloudinary integration added
✅ Image migration script created

## Next Steps:
1. Set up MongoDB Atlas database
2. Create Cloudinary account and upload images
3. Deploy backend to Render
4. Deploy frontend to Vercel
5. Update environment variables with actual URLs
6. Test the deployed application

## Important Notes:
- Replace `your_mongodb_atlas_connection_string_here` with actual MongoDB Atlas connection string
- Replace `your_stripe_secret_key_here` with actual Stripe secret key
- Replace `your_email_app_password_here` with your Gmail app password
- Replace Cloudinary credentials with your actual Cloudinary account details
- Update URLs after deployment

## Image Migration:
Run the migration script after setting up Cloudinary:
```bash
cd server
node migrateImagesToCloudinary.js
```
