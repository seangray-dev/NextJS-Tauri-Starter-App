import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import DropboxProvider from 'next-auth/providers/dropbox';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    DropboxProvider({
      clientId: process.env.DROPBOX_CLIENT_ID as string,
      clientSecret: process.env.DROPBOX_CLIENT_SECRET as string,
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET as string,
  },
});
