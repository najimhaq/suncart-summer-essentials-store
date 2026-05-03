'use client';

import authClient from '../lib/auth-clint';
import Avatar from '../components/AvatarPage';
import Link from 'next/link';
import { ModalForm } from '../components/ModalForm';

export default function MyProfileClientPage() {
  const { data, isPending, error } = authClient.useSession();
  const user = data?.user;

  if (isPending) {
    return (
      <div className='flex min-h-screen items-center justify-center max-w-7xl mx-auto'>
        <p className='text-gray-600 animate-pulse mr-5'>Loading profile...</p>
        <p>
          <span className='loading loading-spinner text-accent'></span>
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-linear-to-br from-red-100 to-pink-200'>
        <p className='text-red-600 font-semibold'>Failed to load session.</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-[radial-linear(circle_at_top,_rgba(255,126,54,0.12),_transparent_35%),linear-linear(to_bottom_right,_#fdf8f0,_#fffaf3,_#fdf8f0)] px-4'>
        <div className='w-full max-w-md rounded-[2rem] border border-[#2b2d42]/10 bg-white/85 p-8 text-center shadow-[0_20px_60px_rgba(43,45,66,0.12)] backdrop-blur-xl'>
          <div className='mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-mango via-sunset to-wave text-white shadow-lg'>
            <span className='text-3xl font-bold'>?</span>
          </div>

          <h2 className='mb-2 text-2xl font-bold text-[#2b2d42]'>
            No Session Found
          </h2>

          <p className='mx-auto mb-6 max-w-sm text-sm leading-6 text-[#2b2d42]/65'>
            You are not signed in yet. Please sign in to access your profile,
            manage your account, and continue shopping with SunCart.
          </p>

          <div className='flex flex-col gap-3 sm:flex-row sm:justify-center'>
            <Link
              href='/signin'
              className='inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-sunset to-sunset px-6 py-3 font-medium text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl'
            >
              Go to Sign In
            </Link>

            <Link
              href='/'
              className='inline-flex items-center justify-center rounded-2xl border border-dusk/12 px-6 py-3 font-medium text-dusk transition hover:border-wave hover:bg-dusk/5'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 p-6'>
      <div className='w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-gray-200'>
        {/* Avatar */}
        <div className='flex justify-center mb-6'>
          <Avatar name={user.name} image={user.image} size={70} />
        </div>

        {/* User Info */}
        <h2 className='mb-2 text-2xl font-bold text-gray-800'>{user.name}</h2>
        <p className='mb-6 text-gray-500'>{user.email}</p>

        {/* Sign Out Button */}
        <button
          onClick={() => authClient.signOut()}
          className='w-6/12 py-2 px-4 rounded-lg bg-dusk text-white cursor-pointer font-semibold shadow hover:bg-sunset hover:text-white transition-all duration-300'
        >
          Sign Out
        </button>
        <div className='mt-6'>
          <ModalForm />
        </div>
      </div>
    </div>
  );
}
