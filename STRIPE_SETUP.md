# Stripe Setup Guide for Dar Al-Islam

## Prerequisites
1. Create a Stripe account at https://stripe.com
2. Complete business verification with your mosque's information

## Required Configuration

### 1. Get Your API Keys
1. Log into Stripe Dashboard
2. Navigate to **Developers → API keys**
3. Copy your keys:
   - **Publishable key**: starts with `pk_test_` (for testing) or `pk_live_` (for production)
   - **Secret key**: starts with `sk_test_` (for testing) or `sk_live_` (for production)

### 2. Update Environment Variables
Replace the placeholder values in `.env.local`:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
```

### 3. Configure Stripe Dashboard

#### Payment Methods
1. Go to **Settings → Payment methods**
2. The code uses automatic payment methods, so Stripe will enable appropriate methods by default
3. Review and adjust enabled payment methods as needed

#### Business Settings
1. Go to **Settings → Business settings**
2. Configure:
   - Business name: Dar Al-Islam
   - Business address
   - Support email/phone
   - Statement descriptor (what appears on bank statements)

#### Tax Settings (if applicable)
1. Go to **Settings → Tax**
2. Configure tax settings if your mosque needs to collect sales tax on donations

## Current Implementation

### Donation Flow
1. User visits `/donations` page
2. Selects preset amount ($10, $25, $50, $100, $250, $500) or enters custom amount
3. Clicks "Donate Now"
4. Payment intent is created via `/api/create-payment-intent`
5. User is redirected to Stripe's payment page
6. After payment, returns to `/donations/success` with status

### Test Cards
Use these test card numbers in development:
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **Authentication Required**: 4000 0025 0000 3155

## Recommended Enhancements

### 1. Webhook Integration
Add webhooks to handle payment events server-side:
- Payment success confirmations
- Failed payment notifications
- Dispute handling

### 2. Email Receipts
Configure automatic email receipts in Stripe Dashboard:
- **Settings → Emails → Email customers for successful payments**

### 3. Donation Records
Consider implementing:
- Database to store donation records
- Donor information collection (optional)
- Tax-deductible receipt generation

### 4. Recurring Donations
Add support for monthly/yearly recurring donations using Stripe Subscriptions

### 5. Custom Donation Forms
Instead of redirecting to Stripe, consider using Stripe Elements for embedded payment forms

## Security Considerations
- Never expose your secret key in client-side code
- Use environment variables for all sensitive configuration
- Enable HTTPS in production
- Consider implementing rate limiting on the payment intent endpoint

## Going Live Checklist
- [ ] Switch from test keys to live keys
- [ ] Update `NEXT_PUBLIC_SITE_URL` in `.env.local` to production URL
- [ ] Test the full donation flow
- [ ] Configure production webhook endpoints (if implemented)
- [ ] Set up monitoring and alerts
- [ ] Enable Stripe Radar for fraud protection