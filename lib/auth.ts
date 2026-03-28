// Mock authentication utility functions
// These will work with Supabase when integration is added

export interface AuthUser {
  id: string;
  email: string;
  full_name: string;
  role: 'student' | 'staff' | 'owner' | 'manager' | 'store_admin' | 'approval_admin';
  phone?: string;
  profile_picture_url?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  full_name: string;
  phone: string;
  registration_number?: string;
}

// Mock user storage for development
const mockUsers: Map<string, { user: AuthUser; password: string }> = new Map();

export async function hashPassword(password: string): Promise<string> {
  // In production, this would use bcrypt via a server action
  // For now, we'll use a simple hash
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const hash2 = await hashPassword(password);
  return hash === hash2;
}

export async function registerUser(data: RegisterData): Promise<{ user: AuthUser; error?: string }> {
  // Check if user already exists
  const existingUser = Array.from(mockUsers.values()).find(u => u.user.email === data.email);
  if (existingUser) {
    return { user: {} as AuthUser, error: 'Email already registered' };
  }

  const passwordHash = await hashPassword(data.password);
  const newUser: AuthUser = {
    id: `user_${Date.now()}`,
    email: data.email,
    full_name: data.full_name,
    phone: data.phone,
    role: 'student',
  };

  mockUsers.set(newUser.id, { user: newUser, password: passwordHash });
  
  return { user: newUser };
}

export async function loginUser(credentials: LoginCredentials): Promise<{ user: AuthUser | null; error?: string }> {
  const user = Array.from(mockUsers.values()).find(u => u.user.email === credentials.email);
  
  if (!user) {
    return { user: null, error: 'Invalid email or password' };
  }

  const passwordValid = await verifyPassword(credentials.password, user.password);
  if (!passwordValid) {
    return { user: null, error: 'Invalid email or password' };
  }

  return { user: user.user };
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  // This would normally get from Supabase auth session
  if (typeof window === 'undefined') return null;
  
  const sessionStr = localStorage.getItem('auth_session');
  if (!sessionStr) return null;

  try {
    const session = JSON.parse(sessionStr);
    return session.user || null;
  } catch {
    return null;
  }
}

export function setAuthSession(user: AuthUser, token: string): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('auth_session', JSON.stringify({ user, token }));
}

export function clearAuthSession(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('auth_session');
}
