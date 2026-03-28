'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Book, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back, John!</h1>
        <p className="text-muted-foreground mt-2">Here&apos;s what&apos;s happening with your learning journey today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Classes</p>
              <p className="text-3xl font-bold mt-2">5</p>
            </div>
            <Book className="h-10 w-10 text-primary/50" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Upcoming Events</p>
              <p className="text-3xl font-bold mt-2">3</p>
            </div>
            <Calendar className="h-10 w-10 text-primary/50" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Study Progress</p>
              <p className="text-3xl font-bold mt-2">68%</p>
            </div>
            <TrendingUp className="h-10 w-10 text-primary/50" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Classmates</p>
              <p className="text-3xl font-bold mt-2">42</p>
            </div>
            <Users className="h-10 w-10 text-primary/50" />
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Classes</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div>
                <p className="font-medium">Advanced Physics</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
              <Button variant="outline" size="sm">
                Watch
              </Button>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div>
                <p className="font-medium">Chemistry Fundamentals</p>
                <p className="text-sm text-muted-foreground">1 day ago</p>
              </div>
              <Button variant="outline" size="sm">
                Watch
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Your Tasks</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 py-2 border-b border-border">
              <input type="checkbox" className="h-4 w-4" />
              <div className="flex-1">
                <p className="font-medium">Complete Physics Quiz</p>
                <p className="text-sm text-muted-foreground">Due tomorrow</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" className="h-4 w-4" />
              <div className="flex-1">
                <p className="font-medium">Submit Chemistry Assignment</p>
                <p className="text-sm text-muted-foreground">Due in 3 days</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
