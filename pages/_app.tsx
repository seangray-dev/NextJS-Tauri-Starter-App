import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Plus_Jakarta_Sans } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={`${jakarta.variable} font-jakarta`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
