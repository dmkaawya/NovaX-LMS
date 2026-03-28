'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User, Mail, Phone, Calendar } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground mt-2">Manage your profile information.</p>
      </div>

      {/* Profile Card */}
      <Card className="p-8">
        <div className="flex flex-col items-center gap-6">
          <Avatar className="h-32 w-32">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-muted-foreground mt-1">Student</p>
          </div>
          <Button variant="outline">Change Avatar</Button>
        </div>
      </Card>

      {/* Profile Information */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 text-primary mt-1" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-semibold mt-1">john.doe@example.com</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Phone className="h-5 w-5 text-primary mt-1" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-semibold mt-1">+1 (555) 123-4567</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <User className="h-5 w-5 text-primary mt-1" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Registration Number</p>
              <p className="font-semibold mt-1">REG-2024-001234</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Calendar className="h-5 w-5 text-primary mt-1" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Joined</p>
              <p className="font-semibold mt-1">January 15, 2024</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Edit Profile */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Phone</label>
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
            />
          </div>
          <Button className="w-full">Save Changes</Button>
        </div>
      </Card>
    </div>
  );
}
