import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/widgets/Header/Header';
import { Clocks } from '@/features/Clocks/Clocks';

import styles from './layout.module.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next JS playground',
  description: 'Learning by doing my dude',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header headerSlot={<Clocks init={Date.now()} type="server" />} />
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}
