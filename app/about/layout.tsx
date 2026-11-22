import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Aditya Jadhav, a backend and full-stack engineer working across production AI, databases, real-time systems, and cloud infrastructure.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Aditya Jadhav',
    description:
      'Engineering background, technical toolkit, education, and interests.',
    url: '/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
