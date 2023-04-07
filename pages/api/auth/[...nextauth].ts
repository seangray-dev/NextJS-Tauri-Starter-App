import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

if (
  !process.env.GOOGLE_ID ||
  !process.env.GOOGLE_SECRET ||
  !process.env.JWT_SECRET
) {
  throw new Error(
    'Missing required environment variables: GOOGLE_ID, GOOGLE_SECRET, and/or JWT_SECRET'
  );
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET as string,
  },
});
