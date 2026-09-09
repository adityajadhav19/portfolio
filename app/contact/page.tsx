import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
const links = [
  { label: 'adityajadhav11193@gmail.com', href: 'mailto:adityajadhav11193@gmail.com' },
  { label: 'GitHub — adityajadhav19', href: 'https://github.com/adityajadhav19' },
  { label: 'LinkedIn — adityajadhav119', href: 'https://linkedin.com/in/adityajadhav119' },
];

export default function ContactPage() {
  return (
    
    <Reveal>
    <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-20 lg:py-28">
      <div className="eyebrow">END OF LOG (FOR NOW)</div>
      <h1 className="font-display text-[32px] md:text-[52px] mt-5 max-w-[18ch]">
        Found something interesting? Leave a note.
      </h1>
      <p className="text-slate max-w-[52ch] mt-6 text-[15.5px] leading-relaxed">
        I reply to most things within a couple of days. If you&rsquo;re reaching out about
        a role, a project, or something you&rsquo;re debugging — tell me the weirdest
        detail first. That&rsquo;s usually the important one.
      </p>

      <div className="grid md:grid-cols-[1fr_1fr] gap-14 mt-14">
        <Reveal>
        <ContactForm />
        </Reveal>
        <div>
          <Reveal>
          <div className="font-mono text-[11px] text-slate mb-4">OR REACH ME DIRECTLY</div>
          </Reveal>
          <Reveal>
          <div className="flex flex-wrap gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="font-mono text-[13px] px-5 py-3 border border-line rounded-full text-paperdim hover:border-amber hover:text-amber transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          </Reveal>
        </div>
      </div>
      <Reveal>
      <div className="mt-24 pt-8 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-[11px] text-slatedark">
        <span>© 2026 Aditya Jadhav — built with curiosity</span>
        <Link href="/" className="hover:text-amber transition-colors">
          ← back to the start of the log
        </Link>
      </div>
      </Reveal>
    </div>
    </Reveal>
  );
}