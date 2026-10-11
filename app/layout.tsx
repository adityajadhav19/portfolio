import type { Metadata } from 'next';
import { Fraunces, Space_Mono, Inter } from 'next/font/google';
import './globals.css';
import ChapterNav from '@/components/ChapterNav';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adityajadhav19-portfolio.vercel.app'),
  title: 'Aditya Jadhav: Backend Engineer, Production AI Systems',
  description:
    'Backend engineer building production AI systems: self-healing NL-to-SQL, RAG pipelines, real-time and offline-first platforms. Team lead at EduDiagno.',
  openGraph: {
    title: 'Aditya Jadhav: Backend Engineer, Production AI Systems',
    description:
      'Self-healing NL-to-SQL, RAG pipelines, and real-time offline-first platforms. Team lead at EduDiagno.',
    url: '/',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body className="font-body bg-ink text-paper">
        <div className="lg:flex">
          <ChapterNav />
          <main className="lg:ml-[248px] w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
