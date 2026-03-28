import { NextRequest, NextResponse } from 'next/server';

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  phone: string;
  registrationNumber?: string;
}

export interface RegisterResponse {
  success: boolean;
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    status: string;
  };
  error?: string;
}

// Mock user storage
const mockUsers: any[] = [];

export async function POST(request: NextRequest): Promise<NextResponse<RegisterResponse>> {
  try {
    const body: RegisterRequest = await request.json();

    // Validate required fields
    if (!body.email || !body.password || !body.name || !body.phone) {
      return NextResponse.json(
        {
          success: false,
          error: 'All fields are required',
        },
        { status: 400 }
      );
    }

    // Check if email already exists
    if (mockUsers.some(u => u.email === body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email already registered',
        },
        { status: 400 }
      );
    }

    // Create new user
    const newUser = {
      id: `user_${Date.now()}`,
      email: body.email,
      password: body.password, // In production, hash with bcrypt
      name: body.name,
      phone: body.phone,
      registrationNumber: body.registrationNumber || `REG-${Date.now()}`,
      role: 'student',
      status: 'pending', // Requires admin approval
      createdAt: new Date().toISOString(),
    };

    mockUsers.push(newUser);

    // In production, save to Supabase
    // await supabase.from('users').insert(newUser);

    return NextResponse.json(
      {
        success: true,
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
          status: newUser.status,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}

// GET mock users (for testing)
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ users: mockUsers });
}
