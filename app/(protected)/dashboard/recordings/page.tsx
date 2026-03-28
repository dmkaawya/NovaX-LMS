'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

export default function RecordingsPage() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMonth, setSelectedMonth] = useState('December');

  const recordings = [
    {
      id: 1,
      title: 'Introduction to Physics',
      date: '2024-12-15',
      duration: '1 hour 30 minutes',
      instructor: 'Dr. Smith',
      category: 'Physics',
    },
    {
      id: 2,
      title: 'Chemistry Fundamentals',
      date: '2024-12-14',
      duration: '2 hours',
      instructor: 'Prof. Johnson',
      category: 'Chemistry',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Recordings</h1>
        <p className="text-muted-foreground mt-2">Watch recorded classes at your own pace.</p>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div>
          <label className="text-sm font-medium">Year</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="mt-2 px-3 py-2 border border-border rounded-md bg-background text-sm"
          >
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium">Month</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="mt-2 px-3 py-2 border border-border rounded-md bg-background text-sm"
          >
            <option>January</option>
            <option>February</option>
            <option>December</option>
          </select>
        </div>
      </div>

      {/* Recordings Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {recordings.map((recording) => (
          <Card key={recording.id} className="p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 h-20 bg-muted rounded-lg flex items-center justify-center">
                <Play className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{recording.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{recording.instructor}</p>
                <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {recording.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {recording.duration}
                  </span>
                </div>
              </div>
            </div>
            <Button className="w-full mt-4" variant="outline">
              Watch Recording
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
