// app/lib/auth-server.js
import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

const client = new MongoClient(process.env.AUTH_DB_URI);
await client.connect();
const db = client.db('suncart');

// 🔥 ডায়নামিক baseURL - প্রোডাকশন ডিটেক্ট করুন
const baseURL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.BETTER_AUTH_URL || 'http://localhost:3000';

console.log('✅ Auth Server Base URL:', baseURL);

export const auth = betterAuth({
  emailAndPassword: { enabled: true },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_SUNCART_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SUNCART_SECRET,
    },
  },
  database: mongodbAdapter(db, { client }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: baseURL, // ডায়নামিক ভ্যালু ব্যবহার করুন
  trustedOrigins: [
    'http://localhost:3000',
    'https://suncart-summer-essentials-store-ten.vercel.app',
    /\.vercel\.app$/,
  ],
});
