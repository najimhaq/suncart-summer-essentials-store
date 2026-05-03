import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

const client = new MongoClient(process.env.AUTH_DB_URI);

await client.connect();
const db = client.db('suncart');

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLINT_SUNCART_ID,
        clientSecret: process.env.GOOGLE_CLINT_SUNCART_SECRET,
      },
    },
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
});
