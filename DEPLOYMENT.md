# Deployment Guide - NovaX Edu LMS

## Deployment Options

### 1. Deploy to Vercel (Recommended)

Vercel is the optimal platform for Next.js applications and provides seamless integration with the Vercel AI Gateway and other services.

#### Steps:

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: NovaX Edu LMS"
   git remote add origin https://github.com/YOUR_USERNAME/novaX-lms.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository from the list

3. **Configure Environment Variables**:
   - In Vercel Dashboard, go to Settings → Environment Variables
   - Add the following variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
     SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
     ```

4. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your application
   - Your site will be live at `https://your-project.vercel.app`

### 2. Manual Deployment to Other Platforms

#### Docker Deployment:

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build
   EXPOSE 3000
   ENV NODE_ENV=production
   CMD ["npm", "start"]
   ```

2. **Build and Run**:
   ```bash
   docker build -t novaX-lms .
   docker run -p 3000:3000 \
     -e NEXT_PUBLIC_SUPABASE_URL=your_url \
     -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key \
     novaX-lms
   ```

#### Traditional Server (Ubuntu/Debian):

1. **SSH into your server**:
   ```bash
   ssh user@your-server-ip
   ```

2. **Install dependencies**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo apt-get install -y git
   ```

3. **Clone and setup**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/novaX-lms.git
   cd novaX-lms
   npm install
   ```

4. **Create .env file**:
   ```bash
   cat > .env.local << EOF
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   EOF
   ```

5. **Build and run with PM2**:
   ```bash
   npm install -g pm2
   npm run build
   pm2 start npm --name "novaX-lms" -- start
   pm2 save
   pm2 startup
   ```

6. **Setup Nginx reverse proxy**:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Pre-Deployment Checklist

- [ ] All environment variables are configured
- [ ] Database schema is created (run SQL scripts)
- [ ] RLS policies are enabled in Supabase
- [ ] Payment gateway credentials are added
- [ ] Email service is configured (if using email notifications)
- [ ] CORS settings are configured for your domain
- [ ] SSL/TLS certificate is installed (for HTTPS)
- [ ] Backup and recovery plan is in place
- [ ] Monitoring and logging are configured

## Post-Deployment

### Health Checks
1. **Test Authentication**:
   - Login with test credentials
   - Verify session management

2. **Test Core Features**:
   - Create a test student account
   - Navigate through dashboard
   - Test payment flow (use test card: 4111 1111 1111 1111)

3. **Test Admin Panel**:
   - Login with admin account
   - Test staff management
   - Test student approval workflow

### Performance Monitoring
- Enable Vercel Analytics
- Setup error tracking with Sentry
- Monitor API response times
- Setup alerts for critical errors

### Backup Strategy
- Daily automated backups to cloud storage
- Weekly manual verification of backups
- Test restore process monthly

## Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
npm run clean
npm install
npm run build
```

### Database Connection Issues
- Verify Supabase credentials in .env.local
- Check Supabase project is active
- Verify IP whitelist settings

### Memory Issues
- Increase Node memory: `NODE_OPTIONS=--max-old-space-size=4096`
- Optimize database queries
- Implement caching strategies

## Scaling Your Application

As your user base grows:

1. **Database**: Upgrade Supabase plan
2. **Storage**: Use Supabase Storage or AWS S3
3. **CDN**: Enable Vercel Edge Network
4. **Caching**: Implement Redis for session storage
5. **Load Testing**: Use Apache JMeter or k6
6. **Monitoring**: Setup DataDog or New Relic

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Supabase Docs: https://supabase.com/docs
- GitHub Issues: https://github.com/YOUR_USERNAME/novaX-lms/issues
