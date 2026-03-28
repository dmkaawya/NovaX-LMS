'use client';

import { Card } from '@/components/ui/card';
import { DollarSign, TrendingUp, CreditCard, Wallet } from 'lucide-react';

export default function FinancePage() {
  const metrics = [
    { label: 'Total Revenue', value: '$45,678.00', change: '+12.5%', icon: DollarSign },
    { label: 'Pending Payments', value: '$8,234.00', change: '+3.2%', icon: CreditCard },
    { label: 'This Month', value: '$12,450.00', change: '+8.1%', icon: TrendingUp },
    { label: 'Account Balance', value: '$37,444.00', change: '+12.5%', icon: Wallet },
  ];

  const transactions = [
    {
      id: 1,
      description: 'Course Subscription - John Doe',
      amount: 129.99,
      date: '2024-12-15',
      status: 'completed',
      type: 'income',
    },
    {
      id: 2,
      description: 'Refund - Sarah Smith',
      amount: -49.99,
      date: '2024-12-14',
      status: 'completed',
      type: 'expense',
    },
    {
      id: 3,
      description: 'Store Purchase - Mike Johnson',
      amount: 89.99,
      date: '2024-12-13',
      status: 'pending',
      type: 'income',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Finance & Revenue</h1>
        <p className="text-muted-foreground mt-2">Track your financial performance.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold mt-2">{metric.value}</p>
                  <p className="text-xs text-green-600 mt-1">{metric.change}</p>
                </div>
                <Icon className="h-10 w-10 text-primary/50" />
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Transactions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-border hover:bg-muted/50">
                  <td className="px-6 py-4 text-sm">{transaction.description}</td>
                  <td className={`px-6 py-4 font-semibold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : ''}{transaction.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{transaction.date}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      transaction.status === 'completed'
                        ? 'bg-green-500/10 text-green-600'
                        : 'bg-yellow-500/10 text-yellow-600'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
