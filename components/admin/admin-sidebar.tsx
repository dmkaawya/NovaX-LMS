'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  BarChart3,
  ShoppingCart,
  DollarSign,
  Settings,
  LogOut,
  CheckSquare,
  Shield,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ADMIN_TABS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'staff', label: 'Staff Management', icon: Users },
  { id: 'students', label: 'Student Approval', icon: CheckSquare },
  { id: 'classes', label: 'Classes', icon: BookOpen },
  { id: 'store', label: 'Store Management', icon: ShoppingCart },
  { id: 'finance', label: 'Finance', icon: DollarSign },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'settings', label: 'Settings', icon: Settings },
];

interface AdminSidebarProps {
  onClose?: () => void;
}

export function AdminSidebar({ onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col border-r border-border">
      {/* Logo */}
      <div className="border-b border-border px-6 py-4">
        <h1 className="text-2xl font-bold text-primary">NovaX Admin</h1>
        <p className="text-xs text-muted-foreground mt-1">Control Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-6">
        <div className="space-y-2">
          {ADMIN_TABS.map((tab) => {
            const Icon = tab.icon;
            const href = `/admin/${tab.id}`;
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
