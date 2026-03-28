'use client';

import { Card } from '@/components/ui/card';
import { Activity, LogIn, FileText, ShoppingCart, MessageSquare } from 'lucide-react';

export default function ActivityPage() {
  const activities = [
    { id: 1, type: 'login', message: 'Logged in', timestamp: '2024-12-15 9:30 AM', icon: LogIn },
    { id: 2, type: 'note', message: 'Created note: Physics Basics', timestamp: '2024-12-15 10:15 AM', icon: FileText },
    { id: 3, type: 'purchase', message: 'Purchased: Physics Textbook', timestamp: '2024-12-14 2:45 PM', icon: ShoppingCart },
    { id: 4, type: 'support', message: 'Created support ticket', timestamp: '2024-12-13 11:20 AM', icon: MessageSquare },
    { id: 5, type: 'login', message: 'Logged in', timestamp: '2024-12-13 8:00 AM', icon: LogIn },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Activity Log</h1>
        <p className="text-muted-foreground mt-2">Track your recent actions and login history.</p>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <Card key={activity.id} className="p-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.message}</p>
                  <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
