import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
  preload: true,
  fallback: ['Georgia', 'serif'],
});

export const metadata: Metadata = {
  title: 'Flippay Global | Seamless Payments Anywhere',
  description: 'The world-class financial platform built for modern living. Move money across borders, pay bills instantly, and manage your wealth with total clarity.',
  icons: {
    icon: '/logo/favicon.png',
    shortcut: '/logo/favicon.png',
    apple: '/logo/favicon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://flippay.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Flippay',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
