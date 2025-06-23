# Stripe Mock Demo Instructions

## Overview
The donation system is now configured to run in demo mode, allowing you to test the payment flow without real Stripe API keys.

## Setup
1. The demo mode is already enabled in `.env.local`:
   ```
   NEXT_PUBLIC_DEMO_MODE=true
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Navigate to http://localhost:3000/donations

## How to Test

### Successful Payment Flow:
1. Select a preset amount or enter a custom amount
2. Click "Donate Now"
3. The mock will simulate a successful payment ~90% of the time
4. You'll be redirected to the success page

### Failed Payment Flow:
1. The mock randomly fails ~10% of the time to simulate declined cards
2. You'll see an error toast with "Your card was declined (this is a demo error)"

## Features in Demo Mode

- **Demo Banner**: A yellow banner indicates you're in demo mode
- **Mock Payment Processing**: No real Stripe API calls are made
- **Simulated Delays**: Network delays are simulated for realism
- **Random Failures**: ~10% of payments fail to test error handling
- **Success Redirect**: Successful payments redirect to /donations/success

## Switching to Production

To use real Stripe:
1. Set `NEXT_PUBLIC_DEMO_MODE=false` in `.env.local`
2. Add your real Stripe keys:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
   STRIPE_SECRET_KEY=sk_live_xxxxx
   ```
3. Restart the development server

## Technical Details

- Mock Stripe service: `/lib/stripe-mock.ts`
- API endpoint switches between real/mock based on `NEXT_PUBLIC_DEMO_MODE`
- Client-side Stripe loading also uses mock when in demo mode