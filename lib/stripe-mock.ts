// Mock Stripe implementation for demo purposes
export class MockStripe {
  paymentIntents = {
    create: async (params: any) => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock payment intent response
      return {
        id: `pi_mock_${Date.now()}`,
        object: 'payment_intent',
        amount: params.amount,
        currency: params.currency,
        status: 'requires_payment_method',
        client_secret: `pi_mock_${Date.now()}_secret_mock`,
        created: Math.floor(Date.now() / 1000),
        metadata: params.metadata || {},
      };
    }
  };
}

// Mock loadStripe for client-side
export const loadStripeMock = () => {
  return Promise.resolve({
    confirmPayment: async ({ clientSecret, confirmParams }: any) => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful payment 90% of the time
      const isSuccess = Math.random() > 0.1;
      
      if (isSuccess) {
        // Redirect to success page
        window.location.href = confirmParams.return_url;
        return { error: null };
      } else {
        // Return mock error
        return {
          error: {
            type: 'card_error',
            message: 'Your card was declined (this is a demo error).',
            code: 'card_declined'
          }
        };
      }
    }
  });
};