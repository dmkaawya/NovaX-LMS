'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Trash2, Mail, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'class',
      title: 'Upcoming Class',
      message: 'Physics class starts in 1 hour',
      read: false,
      timestamp: '5 minutes ago',
      icon: Bell,
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Received',
      message: 'Your payment of $129.99 has been processed',
      read: false,
      timestamp: '1 hour ago',
      icon: AlertCircle,
    },
    {
      id: 3,
      type: 'support',
      title: 'Support Ticket Response',
      message: 'Your support ticket has been answered',
      read: true,
      timestamp: '1 day ago',
      icon: Mail,
    },
  ]);

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground mt-2">Stay updated with important announcements.</p>
        </div>
        {notifications.length > 0 && (
          <Button variant="outline">Mark All as Read</Button>
        )}
      </div>

      {notifications.length === 0 ? (
        <Card className="p-12 text-center">
          <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No notifications</p>
        </Card>
      ) : (
        <div className="space-y-2">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <Card
                key={notification.id}
                className={`p-4 ${!notification.read ? 'bg-primary/5 border-primary/20' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold">{notification.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {notification.timestamp}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="text-muted-foreground hover:text-destructive flex-shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
