
import { auth } from '@/app/lib/auth';
import { toNextJsHandler } from 'better-auth/next-js';

const handler = toNextJsHandler(auth);

export const GET = handler.GET;
export const POST = handler.POST;


if (process.env.NODE_ENV === 'development') {
  console.log('🔧 BetterAuth API Route Initialized');
}
