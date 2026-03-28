# NovaX Edu - Learning Management System

A comprehensive, modern Learning Management System (LMS) built with Next.js 16, TypeScript, and Tailwind CSS. Features student dashboards, live classes, payments, admin controls, and multi-role support.

## Features

### Student Features
- **Dashboard**: Home with quick stats and tasks
- **Live Classes**: Join live video classes with instructors
- **Recordings**: Access previous class recordings (filtered by year/month)
- **Notes**: Organize and review study notes
- **Quizzes**: Interactive assessments with scoring
- **Store**: Purchase learning materials and resources
- **Order Tracking**: Monitor purchases and deliveries
- **Support**: Create and track support tickets
- **Timetable**: View class schedule
- **Activity Log**: Track all platform activities
- **Notifications**: Stay updated with announcements
- **Profile**: Manage account information
- **Settings**: Customize preferences and security
- **History**: Review past activities and achievements

### Admin Features
- **Dashboard**: Platform overview with analytics
- **Staff Management**: Manage instructors and staff
- **Student Approval**: Review and approve new registrations
- **Classes Management**: Create and manage courses
- **Store Management**: Product and inventory control
- **Finance Tracking**: Revenue and payment monitoring
- **Security**: Active sessions and audit logs
- **Platform Settings**: Configure system-wide options

### Security Features
- Role-based access control (RBAC)
- One device per session (with admin unlock)
- Login activity tracking
- Secure payment processing
- Payment access control workflow
- RLS (Row Level Security) with Supabase

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Next.js API Routes
- **Database**: Supabase PostgreSQL (ready for integration)
- **Authentication**: Supabase Auth (ready for integration)
- **Payments**: Stripe/PayPal compatible (ready for integration)
- **Theme**: Dark/Light mode support

## Project Structure

```
├── app/
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   └── register/
│   ├── (protected)/         # Protected routes
│   │   ├── dashboard/       # Student dashboard
│   │   │   ├── home/
│   │   │   ├── live-classes/
│   │   │   ├── recordings/
│   │   │   ├── notes/
│   │   │   ├── quizzes/
│   │   │   ├── store/
│   │   │   ├── orders/
│   │   │   ├── support/
│   │   │   ├── timetable/
│   │   │   ├── profile/
│   │   │   ├── settings/
│   │   │   ├── activity/
│   │   │   ├── notifications/
│   │   │   └── history/
│   │   ├── admin/           # Admin dashboard
│   │   │   ├── dashboard/
│   │   │   ├── staff/
│   │   │   ├── students/
│   │   │   ├── classes/
│   │   │   ├── store/
│   │   │   ├── finance/
│   │   │   ├── security/
│   │   │   └── settings/
│   │   └── checkout/        # Payment checkout
│   ├── api/                 # API routes
│   │   ├── payments/
│   │   ├── access/
│   │   └── auth/
│   └── layout.tsx           # Root layout
├── components/
│   ├── dashboard/           # Dashboard components
│   │   ├── navigation-sidebar.tsx
│   │   └── user-menu.tsx
│   ├── admin/               # Admin components
│   │   └── admin-sidebar.tsx
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── avatar.tsx
│   │   └── dropdown-menu.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   ├── auth.ts              # Auth utilities
│   ├── types.ts             # TypeScript types
│   ├── constants.ts         # App constants
│   └── utils.ts             # Utility functions
├── scripts/
│   ├── 01-init-schema.sql   # Database schema
│   └── 02-rls-policies.sql  # RLS policies
├── middleware.ts            # Next.js middleware
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd novaX-lms
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (.env.local):
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing Credentials

**Student Account:**
- Email: `student@example.com`
- Password: `password123`

**Admin Account:**
- Email: `admin@example.com`
- Password: `admin123`

## Integration with Supabase

The project is ready for Supabase integration. To fully enable the backend:

1. Add your Supabase credentials to `.env.local`
2. Execute the SQL scripts in order:
   - `scripts/01-init-schema.sql` - Creates database tables
   - `scripts/02-rls-policies.sql` - Enables RLS security
3. Update API routes to use Supabase instead of mock data

## Payment Integration

The checkout system is designed to work with:
- **Stripe**: For credit/debit card payments
- **PayPal**: For digital wallet payments
- **Bank Transfer**: For direct transfers

Update the `/app/api/payments/route.ts` with your payment processor credentials.

## Database Schema

The system uses the following key tables:
- `users` - Student and staff accounts
- `classes` - Course information
- `enrollments` - Student-class relationships
- `recordings` - Class recordings
- `orders` - Student purchases
- `payments` - Payment transactions
- `support_tickets` - Student support requests
- `admin_sessions` - Admin login sessions

## Features in Development

- Live video streaming with WebRTC
- Real-time chat during classes
- Advanced analytics dashboard
- Mobile app
- Certificate generation
- Advanced search and filtering
- Email notifications
- SMS alerts

## Deployment

Deploy to Vercel with a single click:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables
4. Deploy!

```bash
npm run build
npm start
```

## Security Considerations

- All passwords are hashed with bcrypt in production
- Sensitive data is encrypted at rest
- RLS policies enforce row-level security
- CORS headers are properly configured
- Rate limiting on API endpoints
- Input validation on all forms

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:
- Open an issue on GitHub
- Contact: support@novaX-edu.com
- Documentation: [docs.novaX-edu.com](https://docs.novaX-edu.com)

## Roadmap

- [ ] Live video streaming with WebRTC
- [ ] Real-time chat functionality
- [ ] Mobile application
- [ ] Advanced AI-powered analytics
- [ ] Automated grading system
- [ ] Integration with LTI standards
- [ ] Gamification features
- [ ] Advanced reporting tools
