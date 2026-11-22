import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Backend engineering experience, production AI systems, technical leadership, achievements, and infrastructure work by Aditya Jadhav.',
  alternates: { canonical: '/experience' },
  openGraph: {
    title: 'Experience | Aditya Jadhav',
    description:
      'Production backend engineering, AI systems, technical leadership, and infrastructure.',
    url: '/experience',
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
