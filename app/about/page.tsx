import NextChapter from '@/components/NextChapter';
import Reveal from '@/components/Reveal';
const toolkit = [
  {
    group: 'Languages',
    items: [
      ['Python', 'daily'],
      ['TypeScript / JavaScript', 'daily'],
      ['SQL', 'daily'],
      ['Rust', 'working'],
    ],
  },
  {
    group: 'Frontend',
    items: [
      ['Next.js (App Router)', 'daily'],
      ['React', 'daily'],
      ['Tailwind CSS', 'daily'],
    ],
  },
  {
    group: 'Backend',
    items: [
      ['FastAPI', 'daily'],
      ['Node.js / Express', 'daily'],
      ['Django', 'working'],
    ],
  },
  {
    group: 'Databases',
    items: [
      ['PostgreSQL', 'deep'],
      ['MySQL / MSSQL', 'working'],
      ['Redshift', 'working'],
      ['Prisma ORM', 'daily'],
    ],
  },
  {
    group: 'AI / LLM',
    items: [
      ['OpenAI GPT-4o', 'deep'],
      ['LangChain, Vanna', 'deep'],
      ['Qdrant (Vector DB / RAG)', 'deep'],
      ['Deepgram (voice)', 'working'],
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      ['AWS (EC2, RDS, VPC)', 'deep'],
      ['Docker', 'daily'],
      ['GitHub Actions / CI-CD', 'daily'],
      ['Vercel', 'daily'],
    ],
  },
  {
    group: 'Security',
    items: [
      ['RBAC frameworks', 'deep'],
      ['JWT, OTP auth', 'deep'],
      ['Rate limiting, CORS', 'daily'],
      ['SQL safety validation', 'deep'],
    ],
  },
  {
    group: 'Currently exploring',
    items: [
      ['eBPF & systems tracing', 'curious'],
      ['Formal verification', 'early'],
      ['RHCSA prep', 'scheduled'],
    ],
    highlight: true,
  },
];

export default function AboutPage() {
  return (
      <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-20 lg:py-28">
        <div className="eyebrow">ABOUT</div>
        <Reveal>
        <h1 className="font-display text-[32px] md:text-[46px] mt-5 max-w-[20ch]">
          Full-stack by necessity, backend by preference
        </h1>
        </Reveal>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start mt-7">
          <div className="shrink-0">
            <Reveal>
            <div className="w-[140px] sm:w-[160px] border border-line rounded-md p-2 bg-inksoft">
              <img
                src="/aditya.jpeg"
                alt="Aditya Jadhav"
                className="w-full aspect-[4/5] object-cover rounded"

              />
            </div>
            </Reveal>
            <Reveal>
            <div className="font-mono text-[10px] text-slatedark mt-2 text-center">
              FIG. 01 — remote, mostly
            </div>
            </Reveal>
          </div>
          <Reveal>
          <p className="text-paperdim text-[15.5px] leading-relaxed max-w-[64ch]">
            I&rsquo;m a backend and full-stack engineer who ended up specializing in
            AI-integrated systems mostly by chasing the hardest part of every project. I&rsquo;m
            comfortable across Next.js/React frontends, FastAPI/Node.js backends, four
            different SQL dialects, and AWS infrastructure — but the thing I actually
            enjoy is system design: multi-tenant architecture, offline-first deployment,
            real-time systems, and the security engineering that has to hold all of it
            together.
          </p>
          </Reveal>
        </div>

        <Reveal>
        <section className="mt-20 pt-14 border-t border-line">
          <div className="eyebrow">TOOLKIT</div>
          <h2 className="font-display text-2xl md:text-3xl mt-4 mb-10">What&rsquo;s actually in reach</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {toolkit.map((t) => (
              <div key={t.group}>
                <div className={`now-label ${t.highlight ? 'text-amber' : ''}`}>{t.group}</div>
                <ul className="mt-3.5 space-y-2.5">
                  {t.items.map(([name, level]) => (
                    <li
                      key={name}
                      className={`flex justify-between text-[14px] border-b border-line pb-2.5 ${t.highlight ? 'text-amber' : 'text-paperdim'
                        }`}
                    >
                      <span>{name}</span>
                      <span className="font-mono text-[11px] text-slate">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        </Reveal>
        <Reveal>
        <section className="mt-20 pt-14 border-t border-line grid sm:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">EDUCATION</div>
            <h3 className="font-display text-xl mt-4">B.Tech, Computer Science Engineering</h3>
            <p className="text-slate text-sm mt-2">MIT Chhatrapati Sambhajinagar</p>
            <p className="font-mono text-xs text-slatedark mt-1">2022 – 2026 · CGPA 8.54</p>
          </div>
          <div>
            <div className="eyebrow">CERTIFICATIONS</div>
            <ul className="mt-4 space-y-2 text-paperdim text-sm">
              <li>RHCSA <span className="text-slate font-mono text-xs ml-2">scheduled 2026</span></li>
              <li>Power BI &amp; Advanced Excel</li>
              <li>Tableau</li>
              <li>Automation Anywhere</li>
              <li>UiPath</li>
            </ul>
          </div>
        </section>
        </Reveal>
        <Reveal>
        <section className="mt-20 pt-14 border-t border-line">
          <div className="now-label">Currently</div>
          <div className="mt-5 bg-inksoft border border-line rounded-md px-8 py-7 max-w-[640px] relative">
            <div className="absolute left-0 top-[18px] bottom-[18px] w-[3px] bg-trace rounded" />
            <p className="text-paperdim text-[15px] leading-relaxed">
              Studying for RHCSA and pushing further into Rust after the hackathon HFT
              bot left me wanting a stronger grip on systems-level performance. Also
              reading into eBPF, mostly out of curiosity about what&rsquo;s actually
              happening below the application layer I usually live in.
            </p>
          </div>
        </section>
        </Reveal>
        <Reveal>
        <NextChapter
          n="05"
          href="/contact"
          label="Contact"
          teaser="If something here made you curious, this is where you tell me."
        />
        </Reveal>
      </div>
    
  );
}
