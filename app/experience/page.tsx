import NextChapter from '@/components/NextChapter';

const achievements = [
  {
    title: 'Appreciation Letter — EduDiagno',
    detail: 'Formal recognition for independent backend architecture and production contributions.',
  },
  {
    title: 'National Hackathon Runner-Up',
    detail: 'Built a Rust-based high-frequency trading bot for liquidity management, at YCCE Nagpur.',
  },
  {
    title: 'ISRO ASCEND 2026',
    detail: "Selected for India's aerospace and autonomous drone engineering challenge.",
  },
  {
    title: 'Student Head — SIH Hackathon',
    detail: 'Coordinated 600+ participants across evaluation and operational logistics.',
  },
];

const leadership = [
  {
    title: 'Department Events — Technical Lead',
    period: '2nd Year – Final Year',
    detail:
      'Independently owned end-to-end execution — poster design through on-ground delivery — for every department event, including Faculty Development Programs, without a team.',
  },
  {
    title: 'Kalavihangam (College Cultural Fest) — Scrutiny Team',
    period: '2nd Year',
    detail: 'Technical Lead for scrutiny of performance submissions at the college-level cultural event.',
  },
  {
    title: 'Kalavihangam — Event Lead',
    period: '3rd Year',
    detail:
      'Promoted to lead both Scrutiny and the main event; managed timing, playlists, and live issue resolution to keep the whole thing on schedule.',
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-20 lg:py-28">
      <div className="eyebrow">EXPERIENCE</div>
      <h1 className="font-display text-[32px] md:text-[46px] mt-5 max-w-[16ch]">
        Team lead within the first week — for reasons I didn&rsquo;t expect
      </h1>

      <div className="mt-14 border-l-2 border-line pl-8 relative">
        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber" />
        <div className="font-mono text-xs text-slate">JAN 2026 – JUN 2026</div>
        <h2 className="font-display text-2xl md:text-3xl mt-2">
          Backend Engineer &amp; Team Lead
        </h2>
        <div className="text-slate text-sm mt-1">EduDiagno Pvt. Ltd. — Bengaluru (Remote)</div>

        <p className="text-paperdim text-[15px] leading-relaxed mt-6 max-w-[64ch]">
          Joined as one of five engineers on a new AI hiring platform initiative. The
          original team-lead appointment didn&rsquo;t work out — and within the first week,
          I was appointed lead instead, taking ownership of technical direction and
          delivery across three production systems at once.
        </p>

        <div className="mt-10 space-y-9">
          <div>
            <div className="now-label">AI BI Copilot</div>
            <p className="text-paperdim text-[15px] leading-relaxed mt-2 max-w-[64ch]">
              Architected a schema-aware AI system (Vanna-based) supporting five database
              engines with RAG-based schema retrieval and natural-language-to-SQL generation.
              Built a self-healing SQL pipeline with automatic error detection and prompt
              repair — reducing failed queries by 85% — plus role-based query enforcement
              and AI safety guardrails blocking destructive operations.
            </p>
          </div>
          <div>
            <div className="now-label">Examination Platform</div>
            <p className="text-paperdim text-[15px] leading-relaxed mt-2 max-w-[64ch]">
              Took a single product requirement and turned it into a complete multi-tenant
              platform: 4-level RBAC, OTP authentication, flexible exam scheduling, and a
              standalone Socket.IO server for real-time AI-assisted proctoring — engineered
              to run entirely offline on college infrastructure.
            </p>
          </div>
          <div>
            <div className="now-label">Infrastructure</div>
            <p className="text-paperdim text-[15px] leading-relaxed mt-2 max-w-[64ch]">
              Led the AWS migration from on-premise infrastructure (EC2, RDS, VPC),
              containerized every service with Docker, and stood up a full CI/CD pipeline
              with GitHub Actions.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-24 pt-16 border-t border-line">
        <div className="eyebrow">ACHIEVEMENTS</div>
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          {achievements.map((a) => (
            <div key={a.title} className="border border-line rounded-md p-6">
              <h3 className="font-display text-lg text-paper">{a.title}</h3>
              <p className="text-slate text-sm mt-2.5 leading-relaxed">{a.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 pt-16 border-t border-line">
        <div className="eyebrow">LEADERSHIP & EXTRACURRICULAR</div>
        <div className="mt-8 space-y-8">
          {leadership.map((l) => (
            <div key={l.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6">
              <div className="font-mono text-xs text-slatedark shrink-0 sm:w-32">{l.period}</div>
              <div>
                <h3 className="font-display text-lg text-paper">{l.title}</h3>
                <p className="text-slate text-sm mt-1.5 leading-relaxed max-w-[60ch]">{l.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NextChapter
        n="04"
        href="/about"
        label="About"
        teaser="The toolkit behind all of this, plus education and what I'm learning next."
      />
    </div>
  );
}
