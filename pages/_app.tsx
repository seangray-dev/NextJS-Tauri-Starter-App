import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Plus_Jakarta_Sans } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['500', '700'],
});

export default function App({ Component, pageProps, session }: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className={`${jakarta.variable} font-jakarta`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
