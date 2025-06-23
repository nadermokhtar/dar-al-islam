# Deployment Instructions for Vercel

## Prerequisites
- Vercel account
- GitHub repository connected to Vercel

## Environment Variables Setup

### For Demo Mode (Default)
The app is configured to run in demo mode by default. No additional configuration needed.

### For Production Mode with Real Stripe
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

```
NEXT_PUBLIC_DEMO_MODE=false
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
STRIPE_SECRET_KEY=sk_live_your_key_here
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy with Stripe demo mode"
   git push origin main
   ```

2. **Vercel will automatically deploy**
   - The build should now succeed with demo mode enabled
   - No Stripe API keys required for demo deployment

## Switching Between Demo and Production

### To Enable Demo Mode:
- Set `NEXT_PUBLIC_DEMO_MODE=true` in Vercel environment variables
- Redeploy

### To Enable Production Mode:
1. Set `NEXT_PUBLIC_DEMO_MODE=false`
2. Add your real Stripe keys
3. Redeploy

## Features in Demo Mode
- Mock payment processing
- No real transactions
- Yellow demo banner on donation page
- Test instructions shown to users

## Troubleshooting
- If build fails with Stripe error, ensure `NEXT_PUBLIC_DEMO_MODE=true` is set
- For production, ensure both Stripe keys are properly configured