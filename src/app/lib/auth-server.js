// app/lib/auth-server.js
console.log('🔍 BETTER_AUTH_URL:', process.env.BETTER_AUTH_URL);
console.log('🔍 NODE_ENV:', process.env.NODE_ENV);
console.log('🔍 VERCEL_URL:', process.env.VERCEL_URL);

import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

const client = new MongoClient(process.env.AUTH_DB_URI);
await client.connect();
const db = client.db('suncart');

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_SUNCART_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SUNCART_SECRET,
    },
  },
  database: mongodbAdapter(db, { client }),
  secret: process.env.BETTER_AUTH_SECRET,

  // 👇 এই লাইনটি গুরুত্বপূর্ণ (যোগ করুন বা চেক করুন)
  baseURL: 'https://najimhub.xyz',

  trustedOrigins: ['http://localhost:3000', 'https://najimhub.xyz'],
});
