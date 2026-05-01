import { createAuthClient } from 'better-auth/react';

const authClient = createAuthClient({
  baseURL: 'http://localhost:3000',
});

export default authClient;

// destructure from SAME instance
export const { signIn, signUp, signOut, useSession } = authClient;
