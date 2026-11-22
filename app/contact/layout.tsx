import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Aditya Jadhav about backend engineering, AI engineering opportunities, software projects, or technical collaboration.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Aditya Jadhav',
    description: 'Get in touch with Aditya Jadhav.',
    url: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
