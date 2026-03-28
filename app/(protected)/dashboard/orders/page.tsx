'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

export default function OrdersPage() {
  const orders = [
    {
      id: 'ORD-001',
      items: 'Physics Textbook, Lab Kit',
      total: 135.98,
      date: '2024-12-10',
      status: 'delivered',
      estimatedDelivery: '2024-12-15',
    },
    {
      id: 'ORD-002',
      items: 'Exam Prep Course Access',
      total: 129.99,
      date: '2024-12-12',
      status: 'processing',
      estimatedDelivery: '2024-12-14',
    },
    {
      id: 'ORD-003',
      items: 'Calculator Pro',
      total: 34.99,
      date: '2024-12-13',
      status: 'shipped',
      estimatedDelivery: '2024-12-16',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Track Orders</h1>
        <p className="text-muted-foreground mt-2">Monitor your purchases and deliveries.</p>
      </div>

      <div className="grid gap-4">
        {orders.map((order) => (
          <Card key={order.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">{order.id}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Ordered on {order.date}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(order.status)}
                <span className="text-sm font-medium capitalize">
                  {order.status}
                </span>
              </div>
            </div>

            <p className="text-sm mb-3">{order.items}</p>

            <div className="grid grid-cols-2 gap-4 mb-4 py-3 border-y border-border">
              <div>
                <p className="text-xs text-muted-foreground">Total Amount</p>
                <p className="font-semibold">${order.total.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Est. Delivery</p>
                <p className="font-semibold">{order.estimatedDelivery}</p>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
