'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Eye } from 'lucide-react';
import { useState } from 'react';

export default function StudentApprovalPage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      registrationNumber: 'REG-2024-001',
      appliedDate: '2024-12-10',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      registrationNumber: 'REG-2024-002',
      appliedDate: '2024-12-11',
      status: 'pending',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      registrationNumber: 'REG-2024-003',
      appliedDate: '2024-12-09',
      status: 'approved',
    },
  ]);

  const approve = (id: number) => {
    setStudents(students.map(s => s.id === id ? { ...s, status: 'approved' } : s));
  };

  const reject = (id: number) => {
    setStudents(students.map(s => s.id === id ? { ...s, status: 'rejected' } : s));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Student Approval</h1>
        <p className="text-muted-foreground mt-2">Review and approve new student registrations.</p>
      </div>

      <div className="space-y-3">
        {students.map((student) => (
          <Card key={student.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{student.name}</h3>
                <div className="space-y-1 mt-2 text-sm text-muted-foreground">
                  <p>Email: {student.email}</p>
                  <p>Registration: {student.registrationNumber}</p>
                  <p>Applied: {student.appliedDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  student.status === 'pending'
                    ? 'bg-yellow-500/10 text-yellow-600'
                    : student.status === 'approved'
                    ? 'bg-green-500/10 text-green-600'
                    : 'bg-red-500/10 text-red-600'
                }`}>
                  {student.status}
                </span>
              </div>
            </div>

            {student.status === 'pending' && (
              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => approve(student.id)}
                  className="flex-1"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => reject(student.id)}
                  className="flex-1"
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Reject
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
