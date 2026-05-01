
import { auth } from '@/app/lib/auth-server';
import { toNextJsHandler } from 'better-auth/next-js';


const handler = toNextJsHandler(auth);


export const GET = handler.GET;
export const POST = handler.POST;
console.log('🔍 Environment Check:', {
  googleId: process.env.GOOGLE_CLIENT_SUNCART_ID ? '✅ Set' : '❌ Missing',
  googleSecret: process.env.GOOGLE_CLIENT_SUNCART_SECRET
    ? '✅ Set'
    : '❌ Missing',
  authUrl: process.env.BETTER_AUTH_URL,
});
