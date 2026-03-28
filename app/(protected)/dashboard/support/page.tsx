'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Plus, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function SupportPage() {
  const [tickets] = useState([
    {
      id: 'TKT-001',
      subject: 'Unable to access recordings',
      status: 'resolved',
      date: '2024-12-10',
      priority: 'high',
    },
    {
      id: 'TKT-002',
      subject: 'Question about payment plan',
      status: 'open',
      date: '2024-12-12',
      priority: 'medium',
    },
    {
      id: 'TKT-003',
      subject: 'Technical issue with live class',
      status: 'in-progress',
      date: '2024-12-13',
      priority: 'high',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-500/10 text-green-600';
      case 'open':
        return 'bg-blue-500/10 text-blue-600';
      case 'in-progress':
        return 'bg-yellow-500/10 text-yellow-600';
      default:
        return 'bg-gray-500/10 text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Support</h1>
          <p className="text-muted-foreground mt-2">Get help and track your support tickets.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Ticket
        </Button>
      </div>

      <div className="grid gap-4">
        {tickets.map((ticket) => (
          <Card key={ticket.id} className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold">{ticket.subject}</h3>
                <p className="text-sm text-muted-foreground mt-1">Ticket ID: {ticket.id}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                {ticket.status}
              </div>
            </div>

            <div className="flex gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {ticket.date}
              </div>
              <div>Priority: {ticket.priority}</div>
            </div>

            <Button variant="outline" className="w-full">
              View Ticket
            </Button>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <Card className="p-6 mt-8">
        <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          <details className="group">
            <summary className="flex cursor-pointer items-center gap-2 font-medium py-2">
              <span className="text-primary">+</span>
              How do I access recorded classes?
            </summary>
            <p className="ml-6 text-sm text-muted-foreground mt-2">
              Go to the Recordings section and filter by year and month to find the class you want to watch.
            </p>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer items-center gap-2 font-medium py-2">
              <span className="text-primary">+</span>
              What payment methods do you accept?
            </summary>
            <p className="ml-6 text-sm text-muted-foreground mt-2">
              We accept credit cards, debit cards, and digital payment methods.
            </p>
          </details>
        </div>
      </Card>
    </div>
  );
}
