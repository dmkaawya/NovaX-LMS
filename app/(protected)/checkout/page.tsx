'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');

  const courseDetails = {
    name: 'Advanced Physics Course',
    price: 129.99,
    description: 'Comprehensive course covering quantum mechanics and modern physics',
    duration: '12 weeks',
    instructor: 'Dr. Smith',
  };

  const handlePayment = async () => {
    setLoading(true);
    setPaymentStatus('processing');

    try {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'user_123',
          courseId: 'course_456',
          amount: courseDetails.price,
          currency: 'USD',
          paymentMethod: paymentMethod,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setPaymentStatus('success');
      } else {
        setPaymentStatus('failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Order Summary */}
          <div className="md:col-span-1">
            <Card className="p-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">{courseDetails.name}</p>
                  <p className="text-2xl font-bold mt-2">${courseDetails.price}</p>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm">Subtotal</p>
                    <p className="text-sm font-medium">${courseDetails.price}</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p className="text-sm">Tax (0%)</p>
                    <p className="text-sm font-medium">$0.00</p>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3">
                    <p className="font-semibold">Total</p>
                    <p className="text-xl font-bold text-primary">${courseDetails.price}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Checkout Form */}
          <div className="md:col-span-2 space-y-6">
            {/* Course Details */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-2">{courseDetails.name}</h2>
              <p className="text-muted-foreground mb-4">{courseDetails.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Duration</p>
                  <p className="font-semibold">{courseDetails.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Instructor</p>
                  <p className="font-semibold">{courseDetails.instructor}</p>
                </div>
              </div>
            </Card>

            {/* Payment Status Messages */}
            {paymentStatus === 'success' && (
              <Card className="p-4 bg-green-50 border-green-200">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900">Payment Successful!</p>
                    <p className="text-sm text-green-800">Your course access has been activated.</p>
                  </div>
                </div>
              </Card>
            )}

            {paymentStatus === 'failed' && (
              <Card className="p-4 bg-red-50 border-red-200">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-semibold text-red-900">Payment Failed</p>
                    <p className="text-sm text-red-800">Please try again or use a different payment method.</p>
                  </div>
                </div>
              </Card>
            )}

            {/* Payment Method Selection */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>
              <div className="space-y-3">
                {[
                  { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                  { id: 'bank_transfer', label: 'Bank Transfer', icon: '🏦' },
                  { id: 'digital_wallet', label: 'Digital Wallet', icon: '📱' },
                ].map((method) => (
                  <label key={method.id} className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted">
                    <input
                      type="radio"
                      name="payment-method"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4"
                    />
                    <span className="text-lg mr-2">{method.icon}</span>
                    <span className="font-medium">{method.label}</span>
                  </label>
                ))}
              </div>
            </Card>

            {/* Card Details */}
            {paymentMethod === 'card' && (
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Card Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Card Number</label>
                    <input
                      type="text"
                      placeholder="4532 1234 5678 9010"
                      className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
                    />
                  </div>
                </div>
              </Card>
            )}

            {/* Payment Button */}
            <Button
              onClick={handlePayment}
              disabled={loading || paymentStatus === 'success'}
              className="w-full h-12 text-lg"
            >
              {loading ? 'Processing...' : paymentStatus === 'success' ? 'Payment Complete' : `Pay $${courseDetails.price}`}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Your payment information is secure and encrypted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
