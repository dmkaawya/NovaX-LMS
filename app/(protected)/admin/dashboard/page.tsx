'use client';

import { Card } from '@/components/ui/card';
import { BarChart3, Users, BookOpen, DollarSign } from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Total Students', value: '1,234', icon: Users, color: 'text-blue-500' },
    { label: 'Active Classes', value: '45', icon: BookOpen, color: 'text-green-500' },
    { label: 'Total Revenue', value: '$45,678', icon: DollarSign, color: 'text-yellow-500' },
    { label: 'Pending Approvals', value: '23', icon: BarChart3, color: 'text-red-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Overview of your learning platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <Icon className={`h-10 w-10 ${stat.color}/50`} />
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activities */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Registrations</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div>
                <p className="font-medium">John Smith</p>
                <p className="text-sm text-muted-foreground">john@example.com</p>
              </div>
              <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded">
                Pending
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">sarah@example.com</p>
              </div>
              <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded">
                Pending
              </span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue Breakdown</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <p className="font-medium">Course Subscriptions</p>
              <p className="font-semibold">$28,900</p>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <p className="font-medium">Store Sales</p>
              <p className="font-semibold">$12,400</p>
            </div>
            <div className="flex items-center justify-between py-2">
              <p className="font-medium">Exam Fees</p>
              <p className="font-semibold">$4,378</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
