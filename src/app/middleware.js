import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // Better Auth-এর জন্য সঠিক হোস্ট সেট করুন
  const url = request.nextUrl.clone();
  if (url.pathname.startsWith('/api/auth')) {
    response.headers.set('x-forwarded-host', request.headers.get('host') || '');
  }

  return response;
}

export const config = {
  matcher: '/api/auth/:path*',
};
