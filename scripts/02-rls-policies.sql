-- NovaX Edu LMS - Row Level Security (RLS) Policies
-- Run this script in Supabase SQL editor

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE login_activity ENABLE ROW LEVEL SECURITY;
ALTER TABLE live_classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE recordings ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE store_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE access_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE timetable ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- HELPER FUNCTIONS
CREATE OR REPLACE FUNCTION get_user_role() RETURNS TEXT AS $$
  SELECT COALESCE(
    (SELECT role FROM staff_roles WHERE user_id = auth.uid() LIMIT 1),
    'student'
  )
$$ LANGUAGE SQL STABLE;

CREATE OR REPLACE FUNCTION is_admin() RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM staff_roles WHERE user_id = auth.uid()
  )
$$ LANGUAGE SQL STABLE;

-- PROFILES POLICIES
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (is_admin());

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "System can insert profiles" ON profiles
  FOR INSERT WITH CHECK (true);

-- STAFF_ROLES POLICIES
CREATE POLICY "Users can view their own staff role" ON staff_roles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all staff roles" ON staff_roles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM staff_roles sr 
      WHERE sr.user_id = auth.uid() 
      AND sr.role IN ('owner', 'manager')
    )
  );

CREATE POLICY "Owner can manage staff roles" ON staff_roles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM staff_roles sr 
      WHERE sr.user_id = auth.uid() 
      AND sr.role = 'owner'
    )
  );

CREATE POLICY "System can insert staff roles" ON staff_roles
  FOR INSERT WITH CHECK (true);

-- DEVICES POLICIES
CREATE POLICY "Users can view their own devices" ON devices
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all devices" ON devices
  FOR SELECT USING (is_admin());

CREATE POLICY "Users can insert their devices" ON devices
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their devices" ON devices
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Owner can manage all devices" ON devices
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM staff_roles sr 
      WHERE sr.user_id = auth.uid() 
      AND sr.role = 'owner'
    )
  );

-- LOGIN_ACTIVITY POLICIES
CREATE POLICY "Users can view their own login activity" ON login_activity
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all login activity" ON login_activity
  FOR SELECT USING (is_admin());

CREATE POLICY "System can insert login activity" ON login_activity
  FOR INSERT WITH CHECK (true);

-- LIVE_CLASSES POLICIES
CREATE POLICY "Teachers can view their own classes" ON live_classes
  FOR SELECT USING (
    auth.uid() = teacher_id OR 
    (SELECT paid_or_free FROM live_classes WHERE id = live_classes.id) = 'free'
  );

CREATE POLICY "All authenticated users can view free classes" ON live_classes
  FOR SELECT USING (paid_or_free = 'free' AND auth.uid() IS NOT NULL);

CREATE POLICY "Teachers can manage their own classes" ON live_classes
  FOR ALL USING (auth.uid() = teacher_id);

CREATE POLICY "Admins can manage all classes" ON live_classes
  FOR ALL USING (is_admin());

-- RECORDINGS POLICIES
CREATE POLICY "All users can view free recordings" ON recordings
  FOR SELECT USING (
    paid_or_free = 'free' AND auth.uid() IS NOT NULL
  );

CREATE POLICY "Users with access can view paid recordings" ON recordings
  FOR SELECT USING (
    paid_or_free = 'paid' AND
    (
      auth.uid() IS NOT NULL AND
      (
        EXISTS (
          SELECT 1 FROM access_requests 
          WHERE recording_id = recordings.id 
          AND user_id = auth.uid() 
          AND status = 'approved'
        ) OR
        EXISTS (
          SELECT 1 FROM payments 
          WHERE user_id = auth.uid() 
          AND status = 'completed' 
          AND type = 'class_fees'
        )
      )
    )
  );

CREATE POLICY "Admins can manage recordings" ON recordings
  FOR ALL USING (is_admin());

CREATE POLICY "System can insert recordings" ON recordings
  FOR INSERT WITH CHECK (true);

-- NOTES POLICIES
CREATE POLICY "All users can view free notes" ON notes
  FOR SELECT USING (
    paid_or_free = 'free' AND auth.uid() IS NOT NULL
  );

CREATE POLICY "Users with access can view paid notes" ON notes
  FOR SELECT USING (
    paid_or_free = 'paid' AND auth.uid() IS NOT NULL AND
    EXISTS (
      SELECT 1 FROM payments 
      WHERE user_id = auth.uid() 
      AND status = 'completed'
    )
  );

CREATE POLICY "Admins can manage notes" ON notes
  FOR ALL USING (is_admin());

-- QUIZZES POLICIES
CREATE POLICY "All users can view free quizzes" ON quizzes
  FOR SELECT USING (
    paid_or_free = 'free' AND auth.uid() IS NOT NULL
  );

CREATE POLICY "Users with access can view paid quizzes" ON quizzes
  FOR SELECT USING (
    paid_or_free = 'paid' AND auth.uid() IS NOT NULL AND
    EXISTS (
      SELECT 1 FROM payments 
      WHERE user_id = auth.uid() 
      AND status = 'completed'
    )
  );

CREATE POLICY "Admins can manage quizzes" ON quizzes
  FOR ALL USING (is_admin());

-- STORE_PRODUCTS POLICIES
CREATE POLICY "All users can view products" ON store_products
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Store admins can manage products" ON store_products
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM staff_roles sr 
      WHERE sr.user_id = auth.uid() 
      AND sr.role IN ('owner', 'store_admin')
    )
  );

-- ORDERS POLICIES
CREATE POLICY "Users can view their own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create orders" ON orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all orders" ON orders
  FOR SELECT USING (is_admin());

CREATE POLICY "Admins can update order status" ON orders
  FOR UPDATE USING (is_admin());

-- PAYMENTS POLICIES
CREATE POLICY "Users can view their own payments" ON payments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "System can insert payments" ON payments
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all payments" ON payments
  FOR SELECT USING (is_admin());

-- ACCESS_REQUESTS POLICIES
CREATE POLICY "Users can view their own requests" ON access_requests
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create access requests" ON access_requests
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Teachers can approve requests for their content" ON access_requests
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM live_classes lc 
      WHERE lc.id = access_requests.class_id 
      AND lc.teacher_id = auth.uid()
    ) OR
    is_admin()
  );

CREATE POLICY "Admins can view all requests" ON access_requests
  FOR SELECT USING (is_admin());

-- TIMETABLE POLICIES
CREATE POLICY "All users can view timetable" ON timetable
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Teachers can manage their timetables" ON timetable
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM live_classes lc 
      WHERE lc.id = timetable.class_id 
      AND lc.teacher_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all timetables" ON timetable
  FOR ALL USING (is_admin());

-- SUPPORT_TICKETS POLICIES
CREATE POLICY "Users can view their own tickets" ON support_tickets
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create tickets" ON support_tickets
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all tickets" ON support_tickets
  FOR SELECT USING (is_admin());

CREATE POLICY "Admins can update tickets" ON support_tickets
  FOR UPDATE USING (is_admin());

-- NOTIFICATIONS POLICIES
CREATE POLICY "Users can view their own notifications" ON notifications
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own notifications" ON notifications
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "System can insert notifications" ON notifications
  FOR INSERT WITH CHECK (true);
