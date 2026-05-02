# FlickX Africa - Deployment Guide

## Overview

This guide covers the deployment process for the FlickX Africa frontend application. The application is built with React, Vite, and uses Docker for containerization.

## Prerequisites

- Node.js 18+ and npm 9+
- Docker and Docker Compose
- SSL certificates (for production)
- Environment variables configured

## Environment Variables

Create a `.env` file based on `.env.example`:

VITE_API_BASE_URL=https://api.flickxafrica.com
VITE_API_TIMEOUT=10000

VITE_NODE_ENV=production

VITE_GA_TRACKING_ID=GA_MEASUREMENT_ID
VITE_HOTJAR_ID=HOTJAR_ID

VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_REPORTING=true

VITE_APP_NAME=FlickX Africa
VITE_APP_VERSION=1.0.0
VITE_APP_DESCRIPTION=Learn, Create, and Grow with African Creative Excellence

VITE_STRIPE_PUBLIC_KEY=pk_live_...
VITE_GOOGLE_CLIENT_ID=google_client_id

VITE_ALLOWED_ORIGINS=https://flickxafrica.com,https://www.flickxafrica.com
```

## Local Development

1. Install dependencies:
npm install

2. Start development server:
npm run dev

3. Run tests:
npm run test

4. Build for production:
npm run build

## Docker Deployment

### Using Docker Compose (Recommended)

1. Create environment file:
cp .env.example .env
# Edit .env with your values

2. Build and run containers:
docker-compose up -d

3. Check logs:
docker-compose logs -f frontend

### Using Docker Directly

1. Build image:
docker build -t flickx-africa .

2. Run container:
docker run -p 3000:3000 \
  -e VITE_API_BASE_URL=https://api.flickxafrica.com \
  -e VITE_GA_TRACKING_ID=your_ga_id \
  flickx-africa

## Production Deployment

### Option 1: Docker Swarm

1. Initialize swarm:
docker swarm init

2. Deploy stack:
docker stack deploy -c docker-compose.yml flickx

### Option 2: Kubernetes

1. Create Kubernetes manifests:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: flickx-frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: flickx-frontend
  template:
    metadata:
      labels:
        app: flickx-frontend
    spec:
      containers:
      - name: frontend
        image: flickx-africa:latest
        ports:
        - containerPort: 3000
        env:
        - name: VITE_API_BASE_URL
          value: "https://api.flickxafrica.com"
```

2. Apply manifests:
kubectl apply -f k8s/

### Option 3: Cloud Platforms

Install Vercel CLI
npm i -g vercel

Deploy
vercel --prod

Install Netlify CLI
npm i -g netlify-cli

Build and deploy
npm run build
netlify deploy --prod --dir=dist

Build application
npm run build

Deploy to S3
aws s3 sync dist/ s3://your-bucket-name --delete

Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

## Nginx Configuration

The application includes a production-ready Nginx configuration with Gzip compression, security headers, rate limiting, static asset caching, API proxying, and health checks.

Key features include automatic HTTPS redirect, SSL termination, CORS headers, error pages, and load balancing support.

## Monitoring and Logging

### Application Monitoring

1. Google Analytics: Track user behavior and page views
2. Error Reporting: Automatic error tracking and reporting
3. Performance Monitoring: Core Web Vitals and performance metrics

### Server Monitoring

1. Health Checks: `/health` endpoint for uptime monitoring
2. Access Logs: Nginx access logs for traffic analysis
3. Error Logs: Application and server error logs
4. Metrics: CPU, memory, and network usage

## Security Considerations

### Frontend Security

1. Content Security Policy: Restrict resource loading
2. XSS Protection: Built-in XSS protection headers
3. HTTPS Enforcement: Automatic redirect to HTTPS
4. Authentication: JWT-based authentication with refresh tokens

### API Security

1. Rate Limiting: Prevent abuse and DDoS attacks
2. CORS: Proper cross-origin resource sharing
3. Input Validation: Server-side validation of all inputs
4. SQL Injection: Parameterized queries and input sanitization

## Performance Optimization

### Build Optimizations

1. Code Splitting: Automatic code splitting for better caching
2. Tree Shaking: Remove unused code
3. Minification: JavaScript and CSS minification
4. Image Optimization: Automatic image optimization

### Runtime Optimizations

1. Lazy Loading: Components and images loaded on demand
2. Caching: Aggressive caching of static assets
3. CDN: Content delivery network for global distribution
4. Compression: Gzip compression for all text-based assets

## Troubleshooting

### Common Issues

1. Build Fails: Check Node.js version and clear node_modules
2. Container Won't Start: Check environment variables and port conflicts
3. API Errors: Verify backend connectivity and CORS settings
4. Performance Issues: Check bundle size and implement lazy loading

### Debug Commands

```bash
# Check container logs
docker-compose logs frontend

# Test API connectivity
curl -f http://localhost:3000/health

# Check bundle size
npm run build:analyze

# Run tests
npm run test:coverage
```

## Maintenance

### Regular Tasks

1. Update Dependencies: Keep packages up to date
2. Security Patches: Apply security updates promptly
3. Performance Monitoring: Regular performance audits
4. Backup: Regular backups of configuration and data

### Rollback Procedure

1. Docker Rollback:
```bash
docker-compose pull flickx-africa:previous-version
docker-compose up -d
```

2. Manual Rollback: Restore previous build from backup

## Support

For deployment issues:
1. Check logs and error messages
2. Verify environment variables
3. Test API connectivity
4. Review this documentation

For additional support, contact the development team.
