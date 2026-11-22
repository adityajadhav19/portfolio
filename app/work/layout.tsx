import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected backend, AI, full-stack, e-commerce, and mobile projects built and shipped by Aditya Jadhav, including TripSplit and production AI systems.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Projects | Aditya Jadhav',
    description:
      'Case studies in production AI, backend systems, full-stack engineering, e-commerce, and Android.',
    url: '/work',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
