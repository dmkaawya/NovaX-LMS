'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, Edit2, Trash2, Shield } from 'lucide-react';

export default function StaffManagementPage() {
  const staff = [
    { id: 1, name: 'Dr. Smith', email: 'smith@novax.edu', role: 'Instructor', status: 'active' },
    { id: 2, name: 'Prof. Johnson', email: 'johnson@novax.edu', role: 'Instructor', status: 'active' },
    { id: 3, name: 'Ms. Williams', email: 'williams@novax.edu', role: 'Manager', status: 'active' },
    { id: 4, name: 'Mr. Brown', email: 'brown@novax.edu', role: 'Store Admin', status: 'inactive' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Staff Management</h1>
          <p className="text-muted-foreground mt-2">Manage instructors and staff members.</p>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Add Staff
        </Button>
      </div>

      {/* Staff Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-right text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((member) => (
                <tr key={member.id} className="border-b border-border hover:bg-muted/50">
                  <td className="px-6 py-4 font-medium">{member.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{member.email}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      <Shield className="h-3 w-3" />
                      {member.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${
                      member.status === 'active' 
                        ? 'text-green-600' 
                        : 'text-muted-foreground'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
