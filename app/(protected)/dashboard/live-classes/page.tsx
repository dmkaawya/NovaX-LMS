'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Clock, Users } from 'lucide-react';

export default function LiveClassesPage() {
  const liveClasses = [
    {
      id: 1,
      title: 'Advanced Physics - Quantum Mechanics',
      instructor: 'Dr. Smith',
      startTime: '2:30 PM',
      duration: '1.5 hours',
      students: 45,
      status: 'live',
    },
    {
      id: 2,
      title: 'Chemistry Lab - Organic Reactions',
      instructor: 'Prof. Johnson',
      startTime: '4:00 PM',
      duration: '2 hours',
      students: 32,
      status: 'upcoming',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Live Classes</h1>
        <p className="text-muted-foreground mt-2">Join live classes and learn in real-time with instructors and classmates.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {liveClasses.map((cls) => (
          <Card key={cls.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">{cls.title}</h3>
              </div>
              <span
                className={`px-2 py-1 text-xs font-medium rounded ${
                  cls.status === 'live'
                    ? 'bg-destructive/20 text-destructive'
                    : 'bg-blue-500/20 text-blue-600'
                }`}
              >
                {cls.status === 'live' ? 'LIVE NOW' : 'UPCOMING'}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-sm text-muted-foreground">Instructor: {cls.instructor}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {cls.startTime}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {cls.students} students
                </div>
              </div>
            </div>

            <Button className="w-full">
              {cls.status === 'live' ? 'Join Now' : 'Set Reminder'}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
