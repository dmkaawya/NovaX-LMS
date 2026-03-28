'use client';

import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function TimetablePage() {
  const schedule = [
    { day: 'Monday', classes: [
      { time: '9:00 AM', subject: 'Physics', instructor: 'Dr. Smith', room: 'Room 101' },
      { time: '11:00 AM', subject: 'Mathematics', instructor: 'Prof. Jones', room: 'Room 202' },
    ]},
    { day: 'Tuesday', classes: [
      { time: '10:00 AM', subject: 'Chemistry', instructor: 'Prof. Johnson', room: 'Lab 1' },
      { time: '2:00 PM', subject: 'English', instructor: 'Ms. Williams', room: 'Room 305' },
    ]},
    { day: 'Wednesday', classes: [
      { time: '9:00 AM', subject: 'Physics Lab', instructor: 'Dr. Smith', room: 'Lab 2' },
      { time: '1:00 PM', subject: 'History', instructor: 'Mr. Brown', room: 'Room 103' },
    ]},
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Timetable</h1>
        <p className="text-muted-foreground mt-2">View your class schedule for the week.</p>
      </div>

      <div className="grid gap-4">
        {schedule.map((daySchedule) => (
          <Card key={daySchedule.day} className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {daySchedule.day}
            </h3>
            <div className="space-y-3">
              {daySchedule.classes.map((cls, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <div>
                    <p className="font-semibold">{cls.subject}</p>
                    <p className="text-sm text-muted-foreground">{cls.instructor}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cls.room}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{cls.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
