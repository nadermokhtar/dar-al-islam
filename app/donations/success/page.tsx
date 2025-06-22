'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DonationSuccess() {
  const [status, setStatus] = useState<'processing' | 'succeeded' | 'failed'>('processing');
  const searchParams = useSearchParams();

  useEffect(() => {
    const payment_intent = searchParams.get('payment_intent');
    const payment_intent_client_secret = searchParams.get('payment_intent_client_secret');
    const redirect_status = searchParams.get('redirect_status');

    if (redirect_status === 'succeeded') {
      setStatus('succeeded');
    } else if (redirect_status === 'failed') {
      setStatus('failed');
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {status === 'processing' && (
          <>
            <h1 className="text-3xl font-bold mb-4">Processing Your Donation</h1>
            <p className="text-gray-600 mb-8">
              Please wait while we confirm your donation...
            </p>
          </>
        )}

        {status === 'succeeded' && (
          <>
            <h1 className="text-3xl font-bold mb-4 text-brand-green">Thank You!</h1>
            <p className="text-gray-600 mb-8">
              Your donation has been successfully processed. We appreciate your support!
            </p>
            <div className="space-y-4">
              <Button asChild>
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </>
        )}

        {status === 'failed' && (
          <>
            <h1 className="text-3xl font-bold mb-4 text-red-600">Donation Failed</h1>
            <p className="text-gray-600 mb-8">
              We encountered an issue processing your donation. Please try again.
            </p>
            <div className="space-y-4">
              <Button asChild>
                <Link href="/donations">Try Again</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 