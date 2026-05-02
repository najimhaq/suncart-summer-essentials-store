'use client';

import { createAuthClient } from 'better-auth/react';

const getBaseURL = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
};

const baseURL = getBaseURL();
console.log('🔍 Auth Client Base URL:', baseURL);

export const authClient = createAuthClient({
  baseURL: baseURL,
});

export const { signIn, signOut, useSession } = authClient;
export default authClient;
