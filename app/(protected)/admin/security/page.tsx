'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, Trash2, AlertCircle } from 'lucide-react';

export default function SecurityPage() {
  const activeSessions = [
    {
      id: 1,
      device: 'Chrome on macOS',
      ip: '192.168.1.100',
      location: 'New York, USA',
      lastActive: '2024-12-15 2:30 PM',
      current: true,
    },
    {
      id: 2,
      device: 'Safari on iPhone',
      ip: '192.168.1.101',
      location: 'New York, USA',
      lastActive: '2024-12-14 9:15 AM',
      current: false,
    },
  ];

  const auditLogs = [
    {
      id: 1,
      action: 'Staff member added',
      user: 'Admin User',
      timestamp: '2024-12-15 10:30 AM',
      status: 'success',
    },
    {
      id: 2,
      action: 'Student approved',
      user: 'Manager User',
      timestamp: '2024-12-15 9:45 AM',
      status: 'success',
    },
    {
      id: 3,
      action: 'Unauthorized access attempt',
      user: 'Unknown',
      timestamp: '2024-12-14 11:20 PM',
      status: 'failed',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Security & Settings</h1>
        <p className="text-muted-foreground mt-2">Manage security, sessions, and audit logs.</p>
      </div>

      {/* Active Sessions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Lock className="h-5 w-5 text-primary" />
          Active Sessions
        </h3>
        <div className="space-y-3">
          {activeSessions.map((session) => (
            <div key={session.id} className="flex items-start justify-between py-3 border-b border-border last:border-b-0">
              <div>
                <p className="font-medium">{session.device}</p>
                <p className="text-sm text-muted-foreground mt-1">{session.location}</p>
                <p className="text-xs text-muted-foreground">IP: {session.ip}</p>
                <p className="text-xs text-muted-foreground">Last active: {session.lastActive}</p>
              </div>
              {session.current ? (
                <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">
                  Current
                </span>
              ) : (
                <Button variant="ghost" size="sm" className="text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Audit Log */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-primary" />
          Audit Log
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Action</th>
                <th className="px-4 py-2 text-left font-semibold">User</th>
                <th className="px-4 py-2 text-left font-semibold">Timestamp</th>
                <th className="px-4 py-2 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log) => (
                <tr key={log.id} className="border-b border-border hover:bg-muted/50">
                  <td className="px-4 py-2">{log.action}</td>
                  <td className="px-4 py-2 text-muted-foreground">{log.user}</td>
                  <td className="px-4 py-2 text-muted-foreground">{log.timestamp}</td>
                  <td className="px-4 py-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      log.status === 'success'
                        ? 'bg-green-500/10 text-green-600'
                        : 'bg-red-500/10 text-red-600'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Security Options */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Security Options</h3>
        <div className="space-y-3">
          <Button variant="outline" className="w-full">Change Admin Password</Button>
          <Button variant="outline" className="w-full">Enable Two-Factor Authentication</Button>
          <Button variant="outline" className="w-full">Log Out All Other Sessions</Button>
        </div>
      </Card>
    </div>
  );
}
