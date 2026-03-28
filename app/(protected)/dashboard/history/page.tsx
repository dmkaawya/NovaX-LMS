'use client';

import { Card } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

export default function HistoryPage() {
  const history = [
    {
      id: 1,
      type: 'class_completed',
      title: 'Completed: Advanced Physics',
      description: 'Successfully completed the live class',
      date: '2024-12-15',
      time: '10:30 AM',
      duration: '1 hour 30 minutes',
    },
    {
      id: 2,
      type: 'quiz_submitted',
      title: 'Physics Quiz Submitted',
      description: 'Score: 85/100',
      date: '2024-12-14',
      time: '2:45 PM',
      duration: 'N/A',
    },
    {
      id: 3,
      type: 'note_created',
      title: 'Note Created',
      description: 'Physics - Newton&apos;s Laws',
      date: '2024-12-13',
      time: '3:15 PM',
      duration: 'N/A',
    },
    {
      id: 4,
      type: 'purchase_made',
      title: 'Purchase Made',
      description: 'Physics Textbook - $45.99',
      date: '2024-12-12',
      time: '11:20 AM',
      duration: 'N/A',
    },
    {
      id: 5,
      type: 'class_joined',
      title: 'Joined Class',
      description: 'Chemistry Fundamentals',
      date: '2024-12-11',
      time: '9:00 AM',
      duration: '2 hours',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'class_completed':
        return 'bg-green-500/10 text-green-600';
      case 'quiz_submitted':
        return 'bg-blue-500/10 text-blue-600';
      case 'note_created':
        return 'bg-purple-500/10 text-purple-600';
      case 'purchase_made':
        return 'bg-yellow-500/10 text-yellow-600';
      case 'class_joined':
        return 'bg-pink-500/10 text-pink-600';
      default:
        return 'bg-gray-500/10 text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Learning History</h1>
        <p className="text-muted-foreground mt-2">Review your past activities and achievements.</p>
      </div>

      <div className="space-y-3">
        {history.map((item) => (
          <Card key={item.id} className="p-6">
            <div className="flex items-start gap-4">
              <div className={`px-3 py-1 rounded text-sm font-medium ${getTypeColor(item.type)}`}>
                {item.type.replace(/_/g, ' ')}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.time}
                  </div>
                  {item.duration !== 'N/A' && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Duration: {item.duration}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
