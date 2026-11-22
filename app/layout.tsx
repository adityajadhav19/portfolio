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

const siteUrl = 'https://adityajadhav19-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aditya Jadhav | Backend & AI Engineer',
    template: '%s | Aditya Jadhav',
  },
  description:
    'Aditya Jadhav is a backend and full-stack engineer building production AI systems, backend platforms, real-time applications, and reliable web products.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Aditya Jadhav | Backend & AI Engineer',
    description:
      'Engineering portfolio featuring production AI, backend systems, full-stack products, and technical case studies.',
    url: siteUrl,
    siteName: 'Aditya Jadhav Portfolio',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Aditya Jadhav | Backend & AI Engineer',
    description:
      'Production AI, backend systems, full-stack products, and engineering case studies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aditya Jadhav',
  url: siteUrl,
  jobTitle: 'Backend and Full-Stack Engineer',
  sameAs: [
    'https://github.com/adityajadhav19',
    'https://www.linkedin.com/in/adityajadhav119',
  ],
  knowsAbout: [
    'Backend Engineering',
    'Artificial Intelligence',
    'Retrieval-Augmented Generation',
    'Natural Language to SQL',
    'PostgreSQL',
    'Next.js',
    'TypeScript',
    'Distributed and Real-Time Systems',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body className="font-body bg-ink text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <div className="lg:flex">
          <ChapterNav />
          <main className="lg:ml-[248px] w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
