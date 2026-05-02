// app/components/SignInButton.jsx
'use client';

import { signIn, signOut, useSession } from '@/app/lib/auth-client';
import authClient from '../lib/auth-clint';
import Link from 'next/link';
import { useEffect } from 'react';

export default function SignInButton() {
  const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

  const isActivePath = (path) => {
    if (!pathname || typeof pathname !== 'string') {
      return false;
    }

    if (path === '/') {
      return pathname === '/';
    }

    return pathname === path;
  };

  const isSignInPage = mounted && pathname === '/signin';
  const { result: session, isPending } = authClient.useSession();

    const result = session.data?.user
    console.log(result);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        <p>Welcome, {session?.user?.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <Link
      href='/signin'
      className={`rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-300 ${
        isSignInPage
          ? 'border-sunset bg-transparent text-sunset'
          : 'border-sunset text-sunset hover:bg-sunset hover:text-white'
      }`}
    >
      Sign In
    </Link>
  );
}
