'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Video,
  BookOpen,
  BarChart3,
  ShoppingCart,
  CheckCircle,
  MessageSquare,
  Calendar,
  User,
  RotateCw,
  History,
  Settings,
  Bell,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const STUDENT_TABS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'live-classes', label: 'Live Classes', icon: Video },
  { id: 'recordings', label: 'Recordings', icon: BookOpen },
  { id: 'notes', label: 'Notes', icon: BarChart3 },
  { id: 'quizzes', label: 'Quizzes', icon: CheckCircle },
  { id: 'store', label: 'Store', icon: ShoppingCart },
  { id: 'orders', label: 'Track Orders', icon: RotateCw },
  { id: 'support', label: 'Support', icon: MessageSquare },
  { id: 'timetable', label: 'Timetable', icon: Calendar },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'activity', label: 'Log Activity', icon: History },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'settings', label: 'Settings', icon: Settings },
];

interface NavigationSidebarProps {
  onClose?: () => void;
}

export function NavigationSidebar({ onClose }: NavigationSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col border-r border-border">
      {/* Logo */}
      <div className="border-b border-border px-6 py-4">
        <h1 className="text-2xl font-bold text-primary">NovaX Edu</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-6">
        <div className="space-y-2">
          {STUDENT_TABS.map((tab) => {
            const Icon = tab.icon;
            const href = `/dashboard/${tab.id}`;
            const isActive = pathname === href;

            return (
              <Link
                key={tab.id}
                href={href}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="border-t border-border p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
}
