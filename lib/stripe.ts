import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
export const getStripe = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  return stripePromise;
};

export type DonationAmount = {
  id: string;
  amount: number;
  label: string;
};

export const donationAmounts: DonationAmount[] = [
  { id: 'amount-10', amount: 10, label: '$10' },
  { id: 'amount-25', amount: 25, label: '$25' },
  { id: 'amount-50', amount: 50, label: '$50' },
  { id: 'amount-100', amount: 100, label: '$100' },
  { id: 'amount-250', amount: 250, label: '$250' },
  { id: 'amount-500', amount: 500, label: '$500' },
]; 