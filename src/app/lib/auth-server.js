// app/lib/auth-server.js
import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

const client = new MongoClient(process.env.AUTH_DB_URI);
await client.connect();
const db = client.db('suncart');

// ✅ সবচেয়ে গুরুত্বপূর্ণ: এক্সপ্লিসিট redirectURI
const PRODUCTION_URL = 'https://suncart-summer-essentials-store-ten.vercel.app';
const LOCAL_URL = 'http://localhost:3000';

export const auth = betterAuth({
  emailAndPassword: { enabled: true },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_SUNCART_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SUNCART_SECRET,
      // ✅ এক্সপ্লিসিট redirectURI - গুগল কনসোলের সাথে মিলিয়ে দিন
      redirectURI: `${PRODUCTION_URL}/api/auth/callback/google`,
    },
  },

  database: mongodbAdapter(db, { client }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: PRODUCTION_URL, // 🔥 লাইভ ডোমেইন (!! localshot নয় !!)

  // ✅ সব ডোমেইন trustedOrigins-এ যোগ করুন
  trustedOrigins: [
    LOCAL_URL,
    PRODUCTION_URL,
    /\.vercel\.app$/, // সব vercel.app সাবডোমেইন
    /.*localhost:3000/, // লোকাল ডোমেইন
  ],

  // ✅ ক্রস-ডোমেইন কুকি সেটিং
  advanced: {
    defaultCookieAttributes: {
      sameSite: 'lax',
      secure: true, // ✅ production এ true, localhost-এ false
      httpOnly: true,
      path: '/',
    },
    crossSubDomainCookies: {
      enabled: false,
    },
  },
});
