# Sri Trinethra Global Projects - Local to Production Deployment Guide

## Prerequisites
Before starting, ensure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.9 or higher) - [Download](https://www.python.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) OR use MongoDB Atlas (cloud)
- **Git** - [Download](https://git-scm.com/)
- **Yarn** - Install via: `npm install -g yarn`

---

## Part 1: Local Setup

### Step 1: Extract and Navigate to Project
```bash
# Extract the downloaded zip file
unzip sri-trinethra-project.zip
cd sri-trinethra-project
```

### Step 2: Set Up Frontend
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Create .env file
cat > .env << EOF
REACT_APP_BACKEND_URL=http://localhost:8001
EOF

# Start frontend development server
yarn start
```
Frontend will run on: **http://localhost:3000**

### Step 3: Set Up Backend
Open a new terminal:

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cat > .env << EOF
MONGO_URL=mongodb://localhost:27017
DB_NAME=sri_trinethra_db
EOF

# Start backend server
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```
Backend will run on: **http://localhost:8001**

### Step 4: Start MongoDB
```bash
# On Windows (if installed locally):
net start MongoDB

# On Mac:
brew services start mongodb-community

# On Linux:
sudo systemctl start mongod

# OR use MongoDB Atlas (cloud) - Update MONGO_URL in backend/.env
```

### Step 5: Test Locally
- Open browser: **http://localhost:3000**
- Verify all sections load correctly
- Check browser console for errors

---

## Part 2: Production Deployment Options

## Option 1: Deploy to Vercel (Frontend) + Railway (Backend) ⭐ RECOMMENDED

### A. Frontend to Vercel (Free & Easy)

**Step 1: Prepare Frontend for Production**
```bash
cd frontend

# Update .env for production
cat > .env << EOF
REACT_APP_BACKEND_URL=https://your-backend-url.railway.app
EOF

# Build production version
yarn build
```

**Step 2: Deploy to Vercel**

Method 1 - Vercel CLI (Recommended):
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

Method 2 - Vercel Dashboard:
1. Go to [vercel.com](https://vercel.com/)
2. Sign up / Login with GitHub
3. Click "Add New Project"
4. Import your frontend folder
5. Configure:
   - Framework Preset: Create React App
   - Root Directory: `frontend`
   - Build Command: `yarn build`
   - Output Directory: `build`
   - Environment Variables: Add `REACT_APP_BACKEND_URL`
6. Click "Deploy"

**Get your frontend URL**: `https://your-app.vercel.app`

### B. Backend to Railway

**Step 1: Prepare Backend**
```bash
cd backend

# Create railway.json
cat > railway.json << EOF
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "uvicorn server:app --host 0.0.0.0 --port \$PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
EOF

# Create Procfile
echo "web: uvicorn server:app --host 0.0.0.0 --port \$PORT" > Procfile
```

**Step 2: Deploy to Railway**
1. Go to [railway.app](https://railway.app/)
2. Sign up / Login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository (or upload manually)
5. Add MongoDB service:
   - Click "New" → "Database" → "Add MongoDB"
6. Configure environment variables:
   - `MONGO_URL`: (copy from Railway MongoDB service)
   - `DB_NAME`: `sri_trinethra_db`
7. Deploy

**Get your backend URL**: `https://your-backend.railway.app`

**Step 3: Update Frontend with Backend URL**
- Go back to Vercel
- Update `REACT_APP_BACKEND_URL` environment variable
- Redeploy

---

## Option 2: Deploy to Netlify (Frontend) + Render (Backend)

### A. Frontend to Netlify

**Step 1: Build Frontend**
```bash
cd frontend
yarn build
```

**Step 2: Deploy to Netlify**

Method 1 - Netlify CLI:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd frontend
netlify deploy --prod --dir=build
```

Method 2 - Drag & Drop:
1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up / Login
3. Drag & drop your `frontend/build` folder
4. Configure environment variables in Site Settings

### B. Backend to Render

1. Go to [render.com](https://render.com/)
2. Sign up / Login
3. Click "New" → "Web Service"
4. Connect your repository
5. Configure:
   - Name: sri-trinethra-backend
   - Environment: Python
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
   - Add MongoDB database or use MongoDB Atlas
6. Add environment variables
7. Deploy

---

## Option 3: Deploy to VPS (DigitalOcean, AWS, Linode)

### Requirements:
- VPS with Ubuntu 20.04 or higher
- SSH access
- Domain name (optional)

### Step 1: Connect to VPS
```bash
ssh root@your-server-ip
```

### Step 2: Install Prerequisites
```bash
# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Install Python
apt install -y python3 python3-pip python3-venv

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list
apt update
apt install -y mongodb-org
systemctl start mongod
systemctl enable mongod

# Install Nginx
apt install -y nginx

# Install Yarn
npm install -g yarn
```

### Step 3: Upload Project Files
```bash
# On your local machine:
scp -r sri-trinethra-project root@your-server-ip:/var/www/
```

### Step 4: Set Up Backend
```bash
cd /var/www/sri-trinethra-project/backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env
cat > .env << EOF
MONGO_URL=mongodb://localhost:27017
DB_NAME=sri_trinethra_db
EOF

# Install PM2 for process management
npm install -g pm2

# Start backend with PM2
pm2 start "uvicorn server:app --host 0.0.0.0 --port 8001" --name sri-trinethra-backend
pm2 save
pm2 startup
```

### Step 5: Set Up Frontend
```bash
cd /var/www/sri-trinethra-project/frontend

# Update .env
cat > .env << EOF
REACT_APP_BACKEND_URL=https://yourdomain.com/api
EOF

# Install dependencies and build
yarn install
yarn build
```

### Step 6: Configure Nginx
```bash
# Create Nginx configuration
cat > /etc/nginx/sites-available/sri-trinethra << EOF
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Frontend
    location / {
        root /var/www/sri-trinethra-project/frontend/build;
        try_files \$uri \$uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable site
ln -s /etc/nginx/sites-available/sri-trinethra /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# Test and restart Nginx
nginx -t
systemctl restart nginx
```

### Step 7: Set Up SSL (Free with Let's Encrypt)
```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal is set up automatically
```

---

## Option 4: Deploy Everything to Heroku

### Step 1: Install Heroku CLI
```bash
# Download from: https://devcenter.heroku.com/articles/heroku-cli
# Or on Mac:
brew tap heroku/brew && brew install heroku
```

### Step 2: Login to Heroku
```bash
heroku login
```

### Step 3: Create Heroku Apps
```bash
# Create backend app
heroku create sri-trinethra-backend

# Create frontend app
heroku create sri-trinethra-frontend
```

### Step 4: Add MongoDB
```bash
# Add MongoDB Atlas addon (or use external MongoDB Atlas)
heroku addons:create mongodb:sandbox -a sri-trinethra-backend
```

### Step 5: Deploy Backend
```bash
cd backend

# Initialize git
git init
heroku git:remote -a sri-trinethra-backend

# Create Procfile
echo "web: uvicorn server:app --host 0.0.0.0 --port \$PORT" > Procfile

# Commit and push
git add .
git commit -m "Initial deployment"
git push heroku main
```

### Step 6: Deploy Frontend
```bash
cd frontend

# Add buildpack
heroku buildpacks:add heroku/nodejs -a sri-trinethra-frontend

# Update package.json scripts
# Add to scripts section:
"start": "serve -s build -l $PORT"

# Install serve
yarn add serve

# Set environment variable
heroku config:set REACT_APP_BACKEND_URL=https://sri-trinethra-backend.herokuapp.com -a sri-trinethra-frontend

# Deploy
git init
heroku git:remote -a sri-trinethra-frontend
git add .
git commit -m "Initial deployment"
git push heroku main
```

---

## Part 3: Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records at your domain provider:
   - Type: A Record
   - Name: @
   - Value: (Vercel will provide IP)

### For VPS/Nginx:
1. Update Nginx config with your domain
2. Update DNS at domain provider:
   - Type: A Record
   - Name: @
   - Value: Your server IP

---

## Part 4: Environment Variables Summary

### Frontend (.env)
```
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017
# OR for MongoDB Atlas:
# MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=sri_trinethra_db
```

---

## Part 5: Troubleshooting

### Issue: Frontend can't connect to backend
**Solution:**
- Check CORS is enabled in backend
- Verify `REACT_APP_BACKEND_URL` is correct
- Ensure backend is running and accessible

### Issue: MongoDB connection error
**Solution:**
- Verify MongoDB is running: `systemctl status mongod`
- Check `MONGO_URL` in backend/.env
- For MongoDB Atlas, ensure IP is whitelisted

### Issue: Build fails
**Solution:**
- Delete `node_modules` and `yarn.lock`
- Run `yarn install` again
- Check Node.js version compatibility

### Issue: Port already in use
**Solution:**
```bash
# Find process using port
lsof -i :3000  # or :8001
# Kill process
kill -9 <PID>
```

---

## Part 6: Recommended Production Setup

**Best Practice Stack:**
1. **Frontend**: Vercel (Free, fast, CDN, easy)
2. **Backend**: Railway (Easy, free tier, database included)
3. **Database**: MongoDB Atlas (Free tier, managed)
4. **Domain**: Any domain provider (GoDaddy, Namecheap)

**Estimated Costs:**
- Frontend (Vercel): FREE
- Backend (Railway): FREE (with $5 credit)
- Database (MongoDB Atlas): FREE (512MB)
- Domain: $10-15/year
- **Total**: ~$15/year

---

## Part 7: Post-Deployment Checklist

- [ ] Frontend is accessible via production URL
- [ ] Backend API is responding correctly
- [ ] MongoDB connection is working
- [ ] All sections load without errors
- [ ] Navigation and interactions work
- [ ] Mobile responsive design works
- [ ] SSL certificate is active (HTTPS)
- [ ] Custom domain is configured (if applicable)
- [ ] Environment variables are set correctly
- [ ] CORS is configured properly

---

## Need Help?

If you encounter issues:
1. Check the error logs in your deployment platform
2. Verify all environment variables are set
3. Test API endpoints directly using Postman or curl
4. Check browser console for frontend errors

For platform-specific issues, refer to their documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app/)
- [Render Docs](https://render.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

---

**Congratulations! Your Sri Trinethra Global Projects website is now in production! 🎉**
