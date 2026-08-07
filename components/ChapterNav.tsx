'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const chapters = [
  { n: '01', href: '/', label: 'Home', teaser: 'Start of the log' },
  { n: '02', href: '/work', label: 'Work', teaser: '11 systems, shipped' },
  { n: '03', href: '/experience', label: 'Experience', teaser: 'Team lead, week one' },
  { n: '04', href: '/about', label: 'About', teaser: 'Skills & how I got here' },
  { n: '05', href: '/contact', label: 'Contact', teaser: 'Leave a note' },
];

export default function ChapterNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop: fixed left rail */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-[248px] flex-col justify-between border-r border-line px-8 py-10 z-30">
        <div>
          <Link href="/" className="block mb-14">
            <div className="font-display text-lg text-paper">Aditya Jadhav</div>
            <div className="font-mono text-[11px] text-slate mt-1 tracking-wide">
              BACKEND / FULL-STACK
            </div>
          </Link>

          <div className="relative pl-1">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden />
            <ul className="space-y-8">
              {chapters.map((c) => {
                const active = pathname === c.href;
                return (
                  <li key={c.href} className="relative pl-7">
                    <span
                      className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border transition-colors duration-300 ${active
                          ? 'bg-amber border-amber trail-pulse'
                          : 'bg-ink border-slatedark'
                        }`}
                      aria-hidden
                    />
                    <Link href={c.href} className="group block">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-[11px] text-slatedark">{c.n}</span>
                        <span
                          className={`font-display text-[17px] transition-colors ${active ? 'text-amber' : 'text-paper group-hover:text-amber'
                            }`}
                        >
                          {c.label}
                        </span>
                      </div>
                      <div className="font-mono text-[11px] text-slate mt-0.5">{c.teaser}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="font-mono text-[11px] text-slatedark leading-relaxed">
          <div>Jalna, IN</div>
          <a href="mailto:adityajadhav11193@gmail.com" className="hover:text-amber transition-colors">
            adityajadhav11193@gmail.com
          </a>
        </div>
      </nav>

      {/* Mobile: sticky top bar */}
      <nav className="lg:hidden sticky top-0 z-30 bg-ink/95 backdrop-blur border-b border-line">
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-base text-paper">
            Aditya Jadhav
          </Link>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto px-5 pb-3 gap-5 no-scrollbar">
            {chapters.map((c) => {
              const active = pathname === c.href;
              return (
                <Link
                  key={c.href}
                  href={c.href}
                  className={`flex items-center gap-2 whitespace-nowrap font-mono text-xs pb-1 border-b-2 transition-colors ${active
                      ? 'text-amber border-amber'
                      : 'text-slate border-transparent'
                    }`}
                >
                  <span>{c.n}</span>
                  <span>{c.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-3 w-10 bg-gradient-to-l from-ink to-transparent" />
        </div>
      </nav>
    </>
  );
}