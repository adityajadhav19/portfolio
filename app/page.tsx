import Link from 'next/link';
import NextChapter from '@/components/NextChapter';
import Reveal from '@/components/Reveal';

const previews = [
  {
    n: '02',
    href: '/work',
    label: 'Work',
    desc: 'A schema-aware BI copilot that fixes its own broken SQL. A proctoring system built to run with no internet at all.',
  },
  {
    n: '03',
    href: '/experience',
    label: 'Experience',
    desc: 'Appointed team lead in my first week, then owned three production systems at once.',
  },
  {
    n: '04',
    href: '/about',
    label: 'About',
    desc: 'Skills, education, and what I\u2019m learning next.',
  },
];

export default function Home() {
  return (
    <Reveal>
      <section className="py-5 border-t border-line">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <Reveal>
            <section className="pt-14 pb-16 md:min-h-[80vh] md:flex md:flex-col md:justify-center md:py-20">
              <div className="eyebrow">BACKEND ENGINEER — PRODUCTION AI SYSTEMS</div>

              <h1 className="font-display text-[34px] md:text-[54px] leading-[1.1] mt-6 max-w-[24ch]">
                I build backend systems for production AI: pipelines that{' '}
                <em className="not-italic text-amber">repair their own SQL</em>, and real-time
                platforms that run offline.
              </h1>

              <p className="text-slate max-w-[58ch] mt-6 text-[15.5px] leading-relaxed">
                At EduDiagno I led a 5-person team across three production systems: an NL-to-SQL
                copilot over PostgreSQL, MySQL, MSSQL and Redshift, a real-time proctoring
                platform, and an AI interview copilot.
              </p>

              <p className="font-mono text-sm text-amber mt-6">
                Open to backend and AI engineering roles: Bengaluru, Hyderabad, Pune, or remote.
              </p>
              <div className="mt-14 flex flex-wrap items-center gap-6">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2.5 font-mono text-[13px] text-slate hover:text-amber transition-colors w-fit"
                >
                  There&rsquo;s more below — start with the work
                  <span className="inline-block animate-bounce">↓</span>
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="font-mono text-[13px] text-amber border border-amber/40 rounded-full px-4 py-2 hover:bg-amber/10 transition-colors"
                >
                  ↓ Résumé (PDF)
                </a>
              </div>
            </section>
          </Reveal>
          <Reveal>
            <section className="py-20 border-t border-line">
              <div className="eyebrow">KEEP GOING</div>
              <h2 className="font-display text-3xl md:text-4xl mt-4 mb-12">Three more entries in this log</h2>
              <Reveal>
                <div className="grid md:grid-cols-3 gap-6">
                  {previews.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="group border border-line rounded-md p-6 hover:border-amber/50 transition-colors flex flex-col justify-between min-h-[210px]"
                    >
                      <div>
                        <div className="font-mono text-[11px] text-slatedark">{p.n}</div>
                        <h3 className="font-display text-xl text-paper mt-2 group-hover:text-amber transition-colors">
                          {p.label}
                        </h3>
                        <p className="text-slate text-sm mt-3 leading-relaxed">{p.desc}</p>
                      </div>
                      <span className="font-mono text-xs text-trace mt-6 inline-flex items-center gap-1.5">
                        Read this entry
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </Reveal>
            </section>
          </Reveal>
          <Reveal>
            <NextChapter
              n="02"
              href="/work"
              label="Work"
              teaser="5 systems, each one an excuse to learn something the hard way."
            />
          </Reveal>
        </div>
      </section>
    </Reveal>
  );
}