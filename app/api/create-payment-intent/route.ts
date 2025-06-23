import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { MockStripe } from '@/lib/stripe-mock';

// Only initialize Stripe if we have a secret key or are in demo mode
const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';
const hasStripeKey = !!process.env.STRIPE_SECRET_KEY;

let stripe: any;

if (isDemoMode) {
  stripe = new MockStripe();
} else if (hasStripeKey) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-04-30.basil',
  });
} else {
  // Stripe will be null if no key is provided and not in demo mode
  stripe = null;
}

export async function POST(req: Request) {
  try {
    // Check if Stripe is properly initialized
    if (!stripe) {
      return NextResponse.json(
        { error: 'Payment processing is not configured. Please set up Stripe API keys or enable demo mode.' },
        { status: 503 }
      );
    }

    const { amount } = await req.json();

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        purpose: 'donation',
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error('Error creating payment intent:', err);
    return NextResponse.json(
      { error: 'Error creating payment intent' },
      { status: 500 }
    );
  }
} 