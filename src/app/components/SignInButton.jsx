// app/components/SignInButton.jsx
'use client';

import { signIn, signOut, useSession } from '@/app/lib/auth-client';

export default function SignInButton() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <button
      onClick={() =>
        signIn('email', {
          email: 'najim@email.com',
          password: 'N12345678',
          callbackURL: '/',
        })
      }
    >
      Sign In
    </button>
  );
}
