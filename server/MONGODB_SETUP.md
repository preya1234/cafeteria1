# 🔧 MongoDB Atlas Connection Setup Guide

## Current Error
The script is failing with: `bad auth : authentication failed`

This means the MongoDB Atlas credentials in the connection string are incorrect or your IP is not whitelisted.

## Step-by-Step Fix

### Option 1: Create a `.env` file (Recommended)

1. **Create a `.env` file** in the `server` directory:

```env
MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.2cwcywf.mongodb.net/Cafeteria?retryWrites=true&w=majority&appName=Cluster0
```

2. **Get your connection string from MongoDB Atlas:**
   - Go to: https://cloud.mongodb.com
   - Log in to your account
   - Click **"Database"** in the left sidebar
   - Click **"Connect"** button on your cluster
   - Select **"Connect your application"**
   - Copy the connection string
   - Replace `<password>` with your actual database user password
   - Replace `<dbname>` with `Cafeteria` (or your database name)

3. **Important: Password Encoding**
   If your password contains special characters, you need to URL-encode them:
   - `@` → `%40`
   - `#` → `%23`
   - `%` → `%25`
   - `&` → `%26`
   - `?` → `%3F`
   - `/` → `%2F`

   Example: If your password is `pass@word#123`, use `pass%40word%23123`

### Option 2: Fix MongoDB Atlas Settings

1. **Check Database Access:**
   - Go to MongoDB Atlas → **Database Access**
   - Verify the username exists: `preyathakkar2602_db_user`
   - If the user doesn't exist, create a new one:
     - Click **"Add New Database User"**
     - Choose **"Password"** authentication
     - Set a username and password
     - Set user privileges to **"Read and write to any database"**
     - Click **"Add User"**

2. **Check Network Access:**
   - Go to MongoDB Atlas → **Network Access**
   - Click **"Add IP Address"**
   - Either:
     - Add your current IP address (recommended for security)
     - Or add `0.0.0.0/0` to allow access from anywhere (for testing only)

3. **Update Connection String:**
   - After fixing the user/password, get a fresh connection string from Atlas
   - Update it in your `.env` file or in `seedProducts.js`

### Option 3: Use the Current Connection String

If you want to use the hardcoded connection string in `seedProducts.js`:
1. Verify the username: `preyathakkar2602_db_user`
2. Verify the password: `admin123`
3. Make sure this user exists in MongoDB Atlas
4. Make sure your IP is whitelisted

## Testing the Connection

After setting up the `.env` file, run:
```bash
node seedProducts.js
```

If it still fails, check:
- ✅ Username and password are correct
- ✅ IP address is whitelisted in Network Access
- ✅ Database user has proper permissions
- ✅ Connection string format is correct (no extra spaces)

## Example .env File

```env
MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/Cafeteria?retryWrites=true&w=majority&appName=Cluster0
```

**Note:** Replace with your actual credentials!

