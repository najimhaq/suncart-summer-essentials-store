'use client';

import authClient from '../lib/auth-clint';
import Avatar from '../components/AvatarPage';
import Link from 'next/link';

export default function ProfilePage() {
  const { data, isPending, error } = authClient.useSession();
  const user = data?.user;

  if (isPending) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <p className='text-gray-600 animate-pulse mr-5'>Loading profile...</p>
        <p>
          <span className='loading loading-spinner text-accent'></span>
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-red-100 to-pink-200'>
        <p className='text-red-600 font-semibold'>Failed to load session.</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,126,54,0.12),_transparent_35%),linear-gradient(to_bottom_right,_#fdf8f0,_#fffaf3,_#fdf8f0)] px-4'>
        <div className='w-full max-w-md rounded-[2rem] border border-[#2b2d42]/10 bg-white/85 p-8 text-center shadow-[0_20px_60px_rgba(43,45,66,0.12)] backdrop-blur-xl'>
          <div className='mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#ffd166] via-[#ff7e36] to-[#4ecdc4] text-white shadow-lg'>
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
              className='inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#ff7e36] to-[#ff9a5c] px-6 py-3 font-medium text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl'
            >
              Go to Sign In
            </Link>

            <Link
              href='/'
              className='inline-flex items-center justify-center rounded-2xl border border-[#2b2d42]/12 px-6 py-3 font-medium text-[#2b2d42] transition hover:border-[#4ecdc4] hover:bg-[#4ecdc4]/5'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6'>
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
          className='w-full py-2 px-4 rounded-lg bg-gradient-to-r from-wave via-cyan-600 text-white font-semibold shadow hover:from-cyan-600 hover:to-wave transition-all duration-300'
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
