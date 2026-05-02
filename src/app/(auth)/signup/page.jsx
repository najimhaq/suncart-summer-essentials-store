'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FiMail,
  FiLock,
  FiUser,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import authClient from '@/app/lib/auth-clint';
import { FcGoogle } from 'react-icons/fc';
import { IoCloudUploadOutline } from 'react-icons/io5';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    const formdata = new FormData(e.target);
    const userData = Object.fromEntries(formdata.entries());


    let imageUrl = userData.image;
    if (imageUrl && !imageUrl.startsWith('http')) {
      imageUrl = undefined;
    }

    try {
      const result = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        image: imageUrl || undefined,
        password: userData.password,
      });

      if (result.error) {
        setError(result.error.message || 'Signup failed');
      } else {
        toast.success('Account created successfully');
        setTimeout(() => {
          router.push('/signin');
        }, 1500);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-sand px-4 py-12'>
      {/* Background blobs */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sunset/20 blur-[100px]' />
        <div className='absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-wave/20 blur-[100px]' />
        <div className='absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-mango/10 blur-[80px]' />
      </div>

      {/* Main card */}
      <div className='relative w-full max-w-md'>
        <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-sunset/50 via-wave/50 to-mango/50 opacity-50 blur-sm' />

        <div className='relative rounded-2xl border border-dusk/10 bg-white/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10'>
          {/* Header */}
          <div className='mb-8 text-center'>
            <h1 className='text-3xl font-bold tracking-tight text-dusk sm:text-4xl'>
              Create Account
            </h1>
            <p className='mt-2 text-sm text-dusk/70'>Sign up to get started</p>
            <div className='mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-sunset/50 to-transparent' />
          </div>

          {/* Error message */}
          {error && (
            <div className='mb-4 rounded-lg border border-sunset/20 bg-sunset/10 px-4 py-3 text-sm text-sunset'>
              {error}
            </div>
          )}

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            {/* Name Field */}
            <div>
              <label className='mb-1.5 block text-xs font-semibold uppercase tracking-wider text-sunset'>
                Full Name
              </label>
              <div className='relative'>
                <FiUser className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dusk/50' />
                <input
                  type='text'
                  name='name'
                  required
                  placeholder='John Doe'
                  className='w-full rounded-xl border border-dusk/10 bg-sand py-3 pl-10 pr-4 text-sm text-dusk placeholder-dusk/40 outline-none transition-all focus:border-sunset/50 focus:ring-2 focus:ring-sunset/20'
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className='mb-1.5 block text-xs font-semibold uppercase tracking-wider text-sunset'>
                Email Address
              </label>
              <div className='relative'>
                <FiMail className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dusk/50' />
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='john@example.com'
                  className='w-full rounded-xl border border-dusk/10 bg-sand py-3 pl-10 pr-4 text-sm text-dusk placeholder-dusk/40 outline-none transition-all focus:border-sunset/50 focus:ring-2 focus:ring-sunset/20'
                />
              </div>
            </div>
            {/* Image Field */}
            <div>
              <label className='mb-1.5 block text-xs font-semibold uppercase tracking-wider text-sunset'>
                Image
              </label>
              <div className='relative'>
                <IoCloudUploadOutline className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dusk/50' />

                <input
                  type='text'
                  name='image'
                  required
                  placeholder='https://example.com/image.jpg'
                  className='w-full rounded-xl border border-dusk/10 bg-sand py-3 pl-10 pr-4 text-sm text-dusk placeholder-dusk/40 outline-none transition-all focus:border-sunset/50 focus:ring-2 focus:ring-sunset/20'
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className='mb-1.5 block text-xs font-semibold uppercase tracking-wider text-sunset'>
                Password
              </label>
              <div className='relative'>
                <FiLock className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dusk/50' />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  required
                  placeholder='Enter your password'
                  className='w-full rounded-xl border border-dusk/10 bg-sand py-3 pl-10 pr-10 text-sm text-dusk placeholder-dusk/40 outline-none transition-all focus:border-sunset/50 focus:ring-2 focus:ring-sunset/20'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-dusk/50 transition hover:text-dusk'
                >
                  {showPassword ? (
                    <FiEyeOff className='h-4 w-4' />
                  ) : (
                    <FiEye className='h-4 w-4' />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={isLoading}
              className='mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sunset to-mango px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:from-mango hover:to-wave active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50'
            >
              {isLoading ? (
                <BeatLoader size={10} color='#ffffff' />
              ) : (
                <>
                  Sign Up
                  <FiArrowRight className='h-4 w-4' />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className='my-6 flex items-center gap-3'>
            <div className='h-px flex-1 bg-dusk/10' />
            <span className='text-xs text-dusk/50'>or sign up with</span>
            <div className='h-px flex-1 bg-dusk/10' />
          </div>

          {/* Social Sign Up */}
          <div className='flex flex-col gap-3'>
            <button className='flex w-full items-center justify-center gap-2 rounded-xl border border-dusk/10 bg-white py-3 text-sm font-medium text-dusk transition hover:border-wave hover:bg-wave/10'>
              <FcGoogle className='h-5 w-5 text-sunset' />
              Sign up with Google
            </button>
            <button className='flex w-full items-center justify-center gap-2 rounded-xl border border-dusk/10 bg-white py-3 text-sm font-medium text-dusk transition hover:border-sunset hover:bg-sunset/10'>
              <FaGithub className='h-5 w-5 text-dusk' />
              Sign up with GitHub
            </button>
          </div>

          {/* Footer */}
          <p className='mt-6 text-center text-xs text-dusk/70'>
            Already have an account?{' '}
            <Link
              href='/signin'
              className='text-sunset transition hover:underline'
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};;

export default SignUpPage;
