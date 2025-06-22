'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { donationAmounts, getStripe } from '@/lib/stripe';
import { useToast } from '@/lib/toast-context';
import Image from 'next/image';

export default function DonationsPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const { success, error } = useToast();

  const handleDonation = async () => {
    try {
      setIsLoading(true);
      const amount = selectedAmount || parseFloat(customAmount);
      
      if (!amount || amount <= 0) {
        error('Invalid Amount', 'Please select or enter a valid donation amount');
        return;
      }

      // Create a payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await response.json();

      // Load Stripe
      const stripe = await getStripe();
      if (!stripe) throw new Error('Stripe failed to initialize');

      // Confirm the payment
      const { error: stripeError } = await stripe.confirmPayment({
        elements: undefined,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/donations/success`,
        },
      });

      if (stripeError) {
        throw stripeError;
      }
    } catch (err) {
      console.error('Error:', err);
      error('Payment Failed', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="hero min-h-[50vh] relative flex items-center justify-center mb-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/fakeMosqueImage.webp"
              alt="Mosque Background"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Support Our Mission
            </h1>
            <p className="text-xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
              Your donation helps us continue serving the Muslim community in Boston
            </p>
          </div>
        </section>

        {/* Donation Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
          
          {/* Preset Amounts */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {donationAmounts.map(({ id, amount, label }) => (
              <button
                key={id}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
                className={`p-4 rounded-lg border-2 text-center transition-colors ${
                  selectedAmount === amount
                    ? 'border-brand-green bg-brand-green/10 text-brand-green'
                    : 'border-gray-200 hover:border-brand-green/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-6">
            <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
              Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                id="custom-amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                placeholder="Enter amount"
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                min="1"
                step="0.01"
              />
            </div>
          </div>

          {/* Donate Button */}
          <Button
            onClick={handleDonation}
            loading={isLoading}
            disabled={!selectedAmount && !customAmount}
            className="w-full"
          >
            {isLoading ? 'Processing...' : 'Donate Now'}
          </Button>

          {/* Security Notice */}
          <p className="text-sm text-gray-500 mt-4 text-center">
            Your donation is secure and encrypted. We use Stripe to process all payments.
          </p>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-brand-green/10 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Why Donate?</h3>
          <ul className="space-y-2">
            <li>• Support our weekly Jummah prayers</li>
            <li>• Help maintain our facilities</li>
            <li>• Enable community programs and services</li>
            <li>• Contribute to the growth of our community</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 