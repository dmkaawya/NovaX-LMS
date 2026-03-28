'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Database, Bell, CreditCard } from 'lucide-react';
import { useState } from 'react';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    platformName: 'NovaX Edu',
    currency: 'USD',
    timezone: 'UTC-5',
    maintenanceMode: false,
  });

  const handleChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Platform Settings</h1>
        <p className="text-muted-foreground mt-2">Configure your learning platform.</p>
      </div>

      {/* Basic Settings */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          Basic Settings
        </h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Platform Name</label>
            <input
              type="text"
              value={settings.platformName}
              onChange={(e) => handleChange('platformName', e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Currency</label>
            <select
              value={settings.currency}
              onChange={(e) => handleChange('currency', e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Timezone</label>
            <select
              value={settings.timezone}
              onChange={(e) => handleChange('timezone', e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
            >
              <option>UTC-5</option>
              <option>UTC-6</option>
              <option>UTC+0</option>
            </select>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium">Maintenance Mode</p>
              <p className="text-sm text-muted-foreground">Take the platform offline for maintenance</p>
            </div>
            <input
              type="checkbox"
              checked={settings.maintenanceMode}
              onChange={(e) => handleChange('maintenanceMode', e.target.checked)}
              className="h-5 w-5 cursor-pointer"
            />
          </div>
          <Button className="w-full">Save Settings</Button>
        </div>
      </Card>

      {/* Payment Settings */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-primary" />
          Payment Gateway
        </h3>
        <p className="text-sm text-muted-foreground mb-4">Configure payment processing for your platform.</p>
        <div className="space-y-3">
          <Button variant="outline" className="w-full">Stripe Configuration</Button>
          <Button variant="outline" className="w-full">PayPal Configuration</Button>
          <Button variant="outline" className="w-full">Bank Transfer Settings</Button>
        </div>
      </Card>

      {/* Database & Backups */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          Database & Backups
        </h3>
        <p className="text-sm text-muted-foreground mb-4">Manage your data and backups.</p>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-border">
            <p>Last Backup</p>
            <p className="text-sm text-muted-foreground">2024-12-15 2:30 AM</p>
          </div>
          <Button variant="outline" className="w-full">Create Backup Now</Button>
          <Button variant="outline" className="w-full">Download Latest Backup</Button>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Notification Settings
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <p>Email alerts for new registrations</p>
            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </div>
          <div className="flex items-center justify-between py-2">
            <p>Email alerts for new orders</p>
            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </div>
          <div className="flex items-center justify-between py-2">
            <p>Email alerts for support tickets</p>
            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </div>
        </div>
      </Card>
    </div>
  );
}
