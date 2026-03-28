export const STUDENT_TABS = [
  { id: 'home', label: 'Home', path: '/student' },
  { id: 'live-classes', label: 'Live Classes', path: '/student/live-classes' },
  { id: 'recordings', label: 'Recordings', path: '/student/recordings' },
  { id: 'notes', label: 'Notes', path: '/student/notes' },
  { id: 'quizzes', label: 'Quizzes', path: '/student/quizzes' },
  { id: 'store', label: 'Store', path: '/student/store' },
  { id: 'track-orders', label: 'Track Orders', path: '/student/track-orders' },
  { id: 'support', label: 'Support', path: '/student/support' },
  { id: 'timetable', label: 'Timetable', path: '/student/timetable' },
  { id: 'profile', label: 'Profile', path: '/student/profile' },
  { id: 'log-activity', label: 'Log Activity', path: '/student/log-activity' },
  { id: 'settings', label: 'Settings', path: '/student/settings' },
  { id: 'history', label: 'History', path: '/student/history' },
  { id: 'notifications', label: 'Notifications', path: '/student/notifications' },
];

export const ADMIN_TABS = [
  { id: 'dashboard', label: 'Dashboard', path: '/admin' },
  { id: 'staff', label: 'Staff Management', path: '/admin/staff' },
  { id: 'students', label: 'Students', path: '/admin/students' },
  { id: 'classes', label: 'Classes', path: '/admin/classes' },
  { id: 'finance', label: 'Finance', path: '/admin/finance' },
  { id: 'security', label: 'Security', path: '/admin/security' },
];

export const RECORDING_CATEGORIES = [
  { value: 'theory', label: 'Theory' },
  { value: 'revisions', label: 'Revisions' },
  { value: 'paper', label: 'Paper' },
  { value: 'extra', label: 'Extra' },
];

export const PRODUCT_CATEGORIES = [
  { value: 'paper', label: 'Papers' },
  { value: 'books', label: 'Books' },
  { value: 'tutorials', label: 'Tutorials' },
];

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const GENDERS = ['Male', 'Female', 'Other'];

export const STAFF_ROLES = [
  'owner',
  'manager',
  'store_admin',
  'approval_admin',
  'teacher',
];

export const USER_STATUSES = [
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending Approval' },
  { value: 'block', label: 'Blocked' },
];

export const ORDER_STATUSES = [
  { value: 'pending', label: 'Pending' },
  { value: 'approved', label: 'Approved' },
  { value: 'delivered', label: 'Delivered' },
];

export const DEVICE_LIMIT_PER_USER = 1;

export const DEFAULT_TAB_ACCESS = {
  dashboard: true,
  students: false,
  classes: false,
  recordings: false,
  notes: false,
  store: false,
  support: false,
  timetable: false,
  finance: false,
  security: false,
};
