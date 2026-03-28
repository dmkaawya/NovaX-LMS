'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { GENDERS } from '@/lib/constants';

export default function RegisterPage() {
  const router = useRouter();
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  // Step 1: Basic info
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Step 2: Personal details
  const [nicId, setNicId] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  // Step 3: Contact
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [telegramNumber, setTelegramNumber] = useState('');

  // Step 4: Education
  const [age, setAge] = useState('');
  const [district, setDistrict] = useState('');
  const [address, setAddress] = useState('');
  const [grade, setGrade] = useState('');
  const [batch, setBatch] = useState('');

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      calculatedAge--;
    }
    return calculatedAge.toString();
  };

  const handleBirthdayChange = (e: string) => {
    setBirthday(e);
    setAge(calculateAge(e));
  };

  const validateStep1 = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return false;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return false;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!nicId || !birthday || !gender) {
      toast.error('Please fill in all fields');
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    if (!whatsappNumber) {
      toast.error('WhatsApp number is required');
      return false;
    }
    return true;
  };

  const validateStep4 = () => {
    if (!district || !address || !grade || !batch) {
      toast.error('Please fill in all fields');
      return false;
    }
    return true;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create auth account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (authError) {
        toast.error(authError.message);
        setIsLoading(false);
        return;
      }

      if (!authData.user) {
        toast.error('Registration failed');
        setIsLoading(false);
        return;
      }

      // Create profile
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          user_id: authData.user.id,
          full_name: fullName,
          nic_id: nicId,
          birthday,
          gender,
          age: parseInt(age),
          district,
          address,
          whatsapp_number: whatsappNumber,
          telegram_number: telegramNumber,
          grade,
          batch,
          status: 'pending',
        });

      if (profileError) {
        toast.error('Failed to create profile');
        setIsLoading(false);
        return;
      }

      toast.success('Registration successful! Please check your email to confirm.');
      router.push('/login');
    } catch (error) {
      toast.error('An error occurred during registration');
      setIsLoading(false);
    }
  };

  const handleNextStep = () => {
    let isValid = false;
    switch (step) {
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      case 3:
        isValid = validateStep3();
        break;
      case 4:
        isValid = validateStep4();
        break;
    }
    if (isValid) {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <div className="w-full max-w-md">
        <div className="card">
          <h1 className="text-3xl font-bold text-center mb-2">NovaX Edu</h1>
          <p className="text-center text-muted-foreground mb-8">Create your account</p>

          {/* Progress indicator */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                  s <= step
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Step 1 */}
            {step === 1 && (
              <>
                <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  />
                </div>
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
                <div>
                  <label className="block text-sm font-medium mb-2">NIC ID</label>
                  <input
                    type="text"
                    placeholder="1234567890V"
                    value={nicId}
                    onChange={(e) => setNicId(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Birthday</label>
                  <input
                    type="date"
                    value={birthday}
                    onChange={(e) => handleBirthdayChange(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  >
                    <option value="">Select gender</option>
                    {GENDERS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                {age && (
                  <div className="text-sm text-muted-foreground">
                    Age: {age} years
                  </div>
                )}
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <>
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="+94123456789"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telegram (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+94123456789"
                    value={telegramNumber}
                    onChange={(e) => setTelegramNumber(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  />
                </div>
              </>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <>
                <h2 className="text-lg font-semibold mb-4">Education Details</h2>
                <div>
                  <label className="block text-sm font-medium mb-2">District</label>
                  <input
                    type="text"
                    placeholder="Colombo"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Address</label>
                  <input
                    type="text"
                    placeholder="123 Main Street"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Grade</label>
                  <input
                    type="text"
                    placeholder="Grade 12"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Batch</label>
                  <input
                    type="text"
                    placeholder="2024"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    className="input-base w-full"
                    disabled={isLoading}
                  />
                </div>
              </>
            )}

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  disabled={isLoading}
                  className="btn-secondary flex-1"
                >
                  Back
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={isLoading}
                  className="btn-primary flex-1"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary flex-1"
                >
                  {isLoading ? 'Creating account...' : 'Register'}
                </button>
              )}
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="text-accent hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
