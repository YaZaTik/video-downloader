# 🚀 Server Deployment Guide

Because this application uses **`yt-dlp`** and **Node.js streaming**, it requires an environment where Python and `yt-dlp` can execute alongside Next.js.

Below are the **3 best ways** to deploy it to a live production server.

---

## 🎯 Recommended Options Overview

| Method | Best For | Difficulty | Cost |
|:-------|:---------|:-----------|:-----|
| **1. Railway / Render / Fly.io** | Easiest zero-maintenance cloud deploy (Git Push to deploy) | ⭐ Very Easy | Free tier / $5/mo |
| **2. Docker Compose on VPS** | Full control on any Linux server (DigitalOcean, Hetzner, AWS, Linode) | ⭐⭐ Easy | $4–$6/mo |
| **3. Ubuntu VPS (PM2 + Nginx)** | Traditional Linux setup with custom domain & free SSL | ⭐⭐⭐ Medium | $4–$6/mo |

---

## Option 1: Deploy with Railway / Render (Easiest, 5 Minutes)

These cloud platforms automatically detect the included [`Dockerfile`](./Dockerfile) and build both Node.js and `yt-dlp` in one container.

### Deploying to Railway:
1. Push your project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/video-downloader.git
   git push -u origin main
   ```
2. Go to [railway.app](https://railway.app) and sign in with GitHub.
3. Click **New Project** → **Deploy from GitHub repo**.
4. Select your `video-downloader` repository.
5. Railway will automatically detect the `Dockerfile`, build it, and provide you with a live HTTPS URL (e.g., `https://video-downloader-production.up.railway.app`).
6. In Railway **Variables**, add:
   - `NEXT_PUBLIC_APP_URL` = `https://your-custom-domain.com` (or your railway URL).

---

## Option 2: Deploy with Docker on any VPS (DigitalOcean / Hetzner / AWS)

If you have a Linux VPS (Ubuntu 22.04 / 24.04):

### Step 1: Install Docker on your VPS
```bash
sudo apt update && sudo apt install -y docker.io docker-compose-plugin
sudo systemctl enable --now docker
```

### Step 2: Copy your project files to the VPS
You can clone via git or upload via SCP:
```bash
git clone https://github.com/your-username/video-downloader.git
cd video-downloader
```

### Step 3: Launch with Docker Compose
```bash
# Run in background
sudo docker compose up -d --build
```

Your app is now running on port `3000`! Check status:
```bash
sudo docker compose ps
sudo docker compose logs -f
```

---

## Option 3: Deploy on an Ubuntu VPS with PM2, Nginx & SSL

If you prefer running directly without Docker:

### Step 1: Install Node.js 22, Python, yt-dlp, and ffmpeg
```bash
# 1. Update system
sudo apt update && sudo apt upgrade -y

# 2. Install Node.js 22 LTS
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs python3 python3-pip ffmpeg git

# 3. Install latest yt-dlp globally
sudo pip3 install --upgrade yt-dlp

# 4. Install PM2 process manager
sudo npm install -g pm2
```

### Step 2: Clone and build the application
```bash
cd /var/www
sudo git clone https://github.com/your-username/video-downloader.git
cd video-downloader

# Install dependencies and build
npm install
npm run build
```

### Step 3: Start with PM2
```bash
# Start Next.js using PM2
pm2 start npm --name "video-downloader" -- start

# Configure PM2 to start automatically on server reboot
pm2 startup
pm2 save
```

### Step 4: Configure Nginx as Reverse Proxy with Free SSL
Install Nginx and Certbot:
```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

Create an Nginx configuration file:
```bash
sudo nano /etc/nginx/sites-available/videodownloader
```

Paste the following (replace `yourdomain.com` with your real domain):
```nginx
server {
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;

        # Increase timeout for long video stream downloads
        proxy_read_timeout 300s;
        proxy_connect_timeout 300s;
        proxy_send_timeout 300s;
    }
}
```

Enable the site and reload Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/videodownloader /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Obtain a free Let's Encrypt SSL certificate:
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Certbot will configure HTTPS automatically with auto-renewal!

---

## ⚙️ Updating the Domain for SEO
Once your server is live, set your domain in `.env.local` or your environment variables:
```env
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```
Rebuild (`npm run build`) so `sitemap.xml`, `robots.txt`, and OpenGraph tags generate with your live domain name.
