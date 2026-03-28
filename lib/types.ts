export type UserRole = 'owner' | 'manager' | 'store_admin' | 'approval_admin' | 'teacher' | 'student';
export type ProfileStatus = 'active' | 'pending' | 'block';
export type RecordingCategory = 'theory' | 'revisions' | 'paper' | 'extra';
export type OrderStatus = 'pending' | 'approved' | 'delivered';
export type PaymentStatus = 'pending' | 'completed';
export type AccessRequestStatus = 'pending' | 'approved';
export type TicketStatus = 'open' | 'resolved';
export type NotificationType = 'access_granted' | 'new_recording' | 'shipment' | 'teacher_notice';

export interface Profile {
  id: string;
  user_id: string;
  full_name: string;
  nic_id: string;
  birthday: string;
  gender: string;
  age: number;
  district: string;
  address: string;
  whatsapp_number: string;
  telegram_number: string;
  grade: string;
  batch: string;
  status: ProfileStatus;
  created_at: string;
  updated_at: string;
}

export interface StaffRole {
  id: string;
  user_id: string;
  role: UserRole;
  job_role: string;
  education: string;
  university: string;
  status: ProfileStatus;
  salary?: number;
  device_limit: number;
  tab_access: Record<string, boolean>;
  created_at: string;
  updated_at: string;
}

export interface Device {
  id: string;
  user_id: string;
  device_info: string;
  browser: string;
  ip_address: string;
  mac_address: string;
  last_login: string;
  locked_status: boolean;
  created_at: string;
}

export interface LoginActivity {
  id: string;
  user_id: string;
  device_id: string;
  login_time: string;
  logout_time?: string;
  browser: string;
  ip_address: string;
  mac_address: string;
  created_at: string;
}

export interface LiveClass {
  id: string;
  title: string;
  teacher_id: string;
  start_time: string;
  end_time: string;
  duration: number;
  video_link: string;
  captions_url?: string;
  paid_or_free: 'paid' | 'free';
  created_at: string;
  updated_at: string;
}

export interface Recording {
  id: string;
  class_id?: string;
  title: string;
  description: string;
  video_url: string;
  duration: number;
  category: RecordingCategory;
  month: number;
  year: number;
  paid_or_free: 'paid' | 'free';
  file_type: 'youtube' | 'uploaded';
  created_at: string;
  updated_at: string;
}

export interface Note {
  id: string;
  title: string;
  description: string;
  file_link: string;
  file_size: number;
  month: number;
  paid_or_free: 'paid' | 'free';
  created_at: string;
  updated_at: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  paid_or_free: 'paid' | 'free';
  created_at: string;
  updated_at: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct_answer: number;
}

export interface StoreProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'paper' | 'books' | 'tutorials';
  image_url: string;
  stock: number;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  price: number;
  status: OrderStatus;
  delivery_date?: string;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  user_id: string;
  amount: number;
  type: 'class_fees' | 'product_purchase';
  status: PaymentStatus;
  reference_id: string;
  created_at: string;
  updated_at: string;
}

export interface AccessRequest {
  id: string;
  user_id: string;
  class_id?: string;
  recording_id?: string;
  status: AccessRequestStatus;
  requested_at: string;
  approved_at?: string;
}

export interface Timetable {
  id: string;
  class_id: string;
  day_of_week: number;
  time: string;
  notes: string;
  created_at: string;
  updated_at: string;
}

export interface SupportTicket {
  id: string;
  user_id: string;
  subject: string;
  description: string;
  status: TicketStatus;
  created_at: string;
  resolved_at?: string;
}

export interface Notification {
  id: string;
  user_id: string;
  type: NotificationType;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface AuthUser {
  id: string;
  email: string;
  phone?: string;
  created_at: string;
  updated_at: string;
  role?: UserRole;
  app_metadata?: {
    role?: UserRole;
  };
}
