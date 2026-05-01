// app/lib/auth-server.js
import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

// এনভায়রনমেন্ট ভেরিয়েবল চেক
const MONGODB_URI = process.env.AUTH_DB_URI;
const AUTH_SECRET = process.env.BETTER_AUTH_SECRET;
const AUTH_URL = process.env.BETTER_AUTH_URL;

if (!MONGODB_URI) {
  console.error('❌ AUTH_DB_URI is missing');
  throw new Error('AUTH_DB_URI is required');
}

if (!AUTH_SECRET) {
  console.error('❌ BETTER_AUTH_SECRET is missing');
  throw new Error('BETTER_AUTH_SECRET is required');
}

console.log('✅ Environment check passed');
console.log('MongoDB URI exists:', !!MONGODB_URI);
console.log('Auth URL:', AUTH_URL);

// MongoDB ক্লায়েন্ট
const client = new MongoClient(MONGODB_URI, {
  ssl: true,
  tlsAllowInvalidCertificates: process.env.NODE_ENV === 'development',
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
});

let authInstance = null;

export async function getAuth() {
  if (authInstance) return authInstance;

  try {
    console.log('🔄 Connecting to MongoDB...');
    await client.connect();
    console.log('✅ MongoDB connected');

    const db = client.db('suncart');

    console.log('🔄 Initializing Better Auth...');
    authInstance = betterAuth({
      emailAndPassword: {
        enabled: true,
      },
      database: mongodbAdapter(db, { client }),
      secret: AUTH_SECRET,
      baseURL: AUTH_URL || 'http://localhost:3000',
      debug: process.env.NODE_ENV === 'development',
    });

    console.log('✅ Better Auth ready');
    return authInstance;
  } catch (error) {
    console.error('❌ Auth initialization failed:', error);
    throw error;
  }
}

// সিঙ্ক্রোনাস auth (API রাউটের জন্য)
export const auth = await getAuth().catch((err) => {
  console.error('Fatal: Could not initialize auth', err);
  throw err;
});
