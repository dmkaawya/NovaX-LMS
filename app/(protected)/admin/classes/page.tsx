'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit2, Trash2, Users } from 'lucide-react';

export default function ClassesManagementPage() {
  const classes = [
    {
      id: 1,
      name: 'Advanced Physics',
      instructor: 'Dr. Smith',
      students: 45,
      schedule: 'Mon, Wed, Fri 9:00 AM',
      status: 'active',
    },
    {
      id: 2,
      name: 'Chemistry Fundamentals',
      instructor: 'Prof. Johnson',
      students: 38,
      schedule: 'Tue, Thu 10:00 AM',
      status: 'active',
    },
    {
      id: 3,
      name: 'Mathematics Advanced',
      instructor: 'Prof. Jones',
      students: 32,
      schedule: 'Mon, Wed 2:00 PM',
      status: 'active',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Classes Management</h1>
          <p className="text-muted-foreground mt-2">Manage all classes and schedules.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Class
        </Button>
      </div>

      <div className="grid gap-4">
        {classes.map((cls) => (
          <Card key={cls.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{cls.name}</h3>
                <div className="space-y-1 mt-2 text-sm text-muted-foreground">
                  <p>Instructor: {cls.instructor}</p>
                  <p>Schedule: {cls.schedule}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-semibold">{cls.students}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Students</p>
                </div>
                <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">
                  {cls.status}
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
