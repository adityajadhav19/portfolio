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
  title: 'Aditya Jadhav — Backend & Full-Stack Engineer',
  description:
    'Backend & Full-Stack Engineer building AI-integrated production systems. Team Lead at EduDiagno. Schema-aware LLM pipelines, real-time systems, multi-tenant architecture.',
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
