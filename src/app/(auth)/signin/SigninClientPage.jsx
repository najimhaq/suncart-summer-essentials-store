'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import authClient from '@/app/lib/auth-clint';

const SigninClientPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();


  useEffect(() => {

    const checkNavigationType = () => {
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const navEntry = navigationEntries[0];

        if (navEntry.type === 'back_forward') {
          setSocialLoading(null);
          setIsLoading(false);
          setError('');
        }
      }
    };


    checkNavigationType();

    const handlePageShow = (event) => {
      if (event.persisted) {
        setSocialLoading(null);
        setIsLoading(false);
        setError('');
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  // Email/Password Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formdata = new FormData(e.target);
    const userData = Object.fromEntries(formdata.entries());

    try {
      const result = await authClient.signIn.email({
        email: userData.email,
        password: userData.password,
        rememberMe: true,
      });

      if (result?.error) {
        setError(result.error.message || 'Invalid credentials');
        toast.error(result.error.message || 'Invalid credentials');
        return;
      }

      toast.success('Account login successfully');
      router.push('/my-profile');
    } catch (err) {
      console.error('Email sign in error:', err);
      setError('Something went wrong. Please try again.');
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Google Sign In
  const handleGoogleSubmit = async (e) => {
    e.preventDefault();
    if (socialLoading) return;

    setSocialLoading('google');
    setError('');

    try {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: window.location.origin + '/my-profile',
      });
    } catch (error) {
      console.error('Google sign in error:', error);

      let errorMessage = 'Google sign in failed. Please try again.';
      if (error.message?.includes('popup')) {
        errorMessage = 'Pop-up blocked. Please allow popups for this site.';
      } else if (error.message?.includes('redirect_uri')) {
        errorMessage = 'Configuration error. Please contact support.';
      }

      setError(errorMessage);
      toast.error(errorMessage);
      setSocialLoading(null);
    }
  };

  // GitHub Sign In
  const handleGithubSubmit = async (e) => {
    e.preventDefault();
    if (socialLoading) return;

    setSocialLoading('github');
    setError('');

    try {
      await authClient.signIn.social({
        provider: 'github',
        callbackURL: window.location.origin + '/my-profile',
      });
    } catch (error) {
      console.error('GitHub sign in error:', error);

      let errorMessage = 'GitHub sign in failed. Please try again.';
      if (error.message?.includes('popup')) {
        errorMessage = 'Pop-up blocked. Please allow popups for this site.';
      } else if (error.message?.includes('network')) {
        errorMessage = 'Network error. Please check your connection.';
      }

      setError(errorMessage);
      toast.error(errorMessage);
      setSocialLoading(null);
    }
  };

  const isButtonDisabled = isLoading || socialLoading !== null;

  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-sand px-4 py-12'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sunset/20 blur-[100px]' />
        <div className='absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-wave/20 blur-[100px]' />
        <div className='absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-mango/10 blur-[80px]' />
      </div>

      <div className='relative w-full max-w-md'>
        <div className='absolute -inset-0.5 rounded-2xl bg-linear-to-r from-sunset/50 via-wave/50 to-mango/50 opacity-50 blur-sm' />

        <div className='relative rounded-2xl border border-dusk/10 bg-white/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10'>
          <div className='mb-8 text-center'>
            <h1 className='text-3xl font-bold tracking-tight text-dusk sm:text-4xl'>
              Welcome Back
            </h1>
            <p className='mt-2 text-sm text-dusk/70'>
              Sign in to your account to continue
            </p>
            <div className='mx-auto mt-4 h-px w-24 bg-linear-to-r from-transparent via-sunset/50 to-transparent' />
          </div>

          {error && (
            <div className='mb-4 rounded-lg border border-sunset/20 bg-sunset/10 px-4 py-3 text-sm text-sunset'>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
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
                  disabled={isButtonDisabled}
                  placeholder='john@example.com'
                  className='w-full rounded-xl border border-dusk/10 bg-sand py-3 pl-10 pr-4 text-sm text-dusk placeholder-dusk/40 outline-none transition-all focus:border-sunset/50 focus:ring-2 focus:ring-sunset/20 disabled:opacity-50'
                />
              </div>
            </div>

            <div>
              <div className='mb-1.5 flex items-center justify-between'>
                <label className='text-xs font-semibold uppercase tracking-wider text-sunset'>
                  Password
                </label>
                <Link
                  href='/forgot-password'
                  className='text-xs text-wave transition hover:underline'
                >
                  Forgot password?
                </Link>
              </div>
              <div className='relative'>
                <FiLock className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dusk/50' />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  required
                  disabled={isButtonDisabled}
                  placeholder='Enter your password'
                  className='w-full rounded-xl border border-dusk/10 bg-sand py-3 pl-10 pr-10 text-sm text-dusk placeholder-dusk/40 outline-none transition-all focus:border-sunset/50 focus:ring-2 focus:ring-sunset/20 disabled:opacity-50'
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

            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                name='remember'
                id='remember'
                disabled={isButtonDisabled}
                className='h-4 w-4 rounded border-dusk/20 bg-sand text-sunset focus:ring-sunset/20 disabled:opacity-50'
              />
              <label htmlFor='remember' className='text-sm text-dusk/70'>
                Remember me for 30 days
              </label>
            </div>

            <button
              type='submit'
              disabled={isButtonDisabled}
              className='mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-sunset to-mango px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:from-mango hover:to-wave active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50'
            >
              {isLoading ? (
                <BeatLoader size={10} color='#ffffff' />
              ) : (
                <>
                  Sign In <FiArrowRight className='h-4 w-4' />
                </>
              )}
            </button>
          </form>

          <div className='my-6 flex items-center gap-3'>
            <div className='h-px flex-1 bg-dusk/10' />
            <span className='text-xs text-dusk/50'>or continue with</span>
            <div className='h-px flex-1 bg-dusk/10' />
          </div>

          <div className='flex flex-col gap-3'>
            <button
              onClick={handleGoogleSubmit}
              disabled={isButtonDisabled}
              className='flex w-full items-center justify-center gap-2 rounded-xl border border-dusk/10 bg-white py-3 text-sm font-medium text-dusk transition hover:border-wave hover:bg-wave/10 disabled:opacity-50'
            >
              {socialLoading === 'google' ? (
                <BeatLoader size={10} color='#FF7E36' />
              ) : (
                <>
                  <FcGoogle className='h-5 w-5' /> Sign in with Google
                </>
              )}
            </button>

            <button
              onClick={handleGithubSubmit}
              disabled={isButtonDisabled}
              className='flex w-full items-center justify-center gap-2 rounded-xl border border-dusk/10 bg-white py-3 text-sm font-medium text-dusk transition hover:border-sunset hover:bg-sunset/10 disabled:opacity-50'
            >
              {socialLoading === 'github' ? (
                <BeatLoader size={10} color='#FF7E36' />
              ) : (
                <>
                  <FaGithub className='h-5 w-5' /> Sign in with GitHub
                </>
              )}
            </button>
          </div>

          <p className='mt-6 text-center text-xs text-dusk/70'>
            Don&apos;t have an account?{' '}
            <Link
              href='/signup'
              className='text-sunset transition hover:underline'
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SigninClientPage;
