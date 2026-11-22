import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import NextChapter from '@/components/NextChapter';

export const metadata: Metadata = {
  title: 'Technical Highlights',
  description:
    'Engineering challenges and implementation notes from Aditya Jadhav’s production AI, backend, security, payment, and full-stack projects.',
  alternates: { canonical: '/technical-highlights' },
  openGraph: {
    title: 'Technical Highlights | Aditya Jadhav',
    description:
      'A collection of engineering problems, technical decisions, and solutions across production projects.',
    url: '/technical-highlights',
  },
};

const highlights = [
  {
    number: '01',
    category: 'AI / Data Engineering',
    title: 'Self-healing natural-language-to-SQL',
    project: 'EduDiagno AI BI Copilot',
    problem:
      'Generated SQL can fail because of schema mismatches, invalid columns, or dialect-specific syntax. A single failed generation should not end the user’s query.',
    solution:
      'Built a failure-aware SQL workflow that captures the error, feeds the failure context back into the repair step, and retries generation. Schema retrieval is based on database metadata rather than storing customer records in the vector index.',
    details: ['Schema-aware retrieval with Qdrant', 'Multi-database support', 'Error-informed SQL repair', 'Read-only query validation'],
    outcome:
      'The project write-up reports an 85% reduction in failed queries across 132 logged queries over two weeks.',
    href: '/work',
  },
  {
    number: '02',
    category: 'Backend / Real-time Systems',
    title: 'Offline-capable examination platform',
    project: 'EduDiagno Examination Platform',
    problem:
      'The platform needed to operate on institution infrastructure when internet access is unreliable or unavailable, while still supporting real-time proctoring events.',
    solution:
      'Designed the application around a multi-level RBAC model and a separately running Socket.IO proctoring service. Separating the real-time service supports independent operation and scaling from the main application.',
    details: ['Four-level role hierarchy', 'OTP authentication and enrollment', 'Standalone Socket.IO service', 'Offline / LAN deployment'],
    outcome:
      'A complete exam workflow designed for campus networks, from scheduling and student access through monitoring and grading.',
    href: '/work',
  },
  {
    number: '03',
    category: 'Security / Application Architecture',
    title: 'Group identity and duplicate prevention',
    project: 'TripSplit',
    problem:
      'A member who loses their browser session should be able to rejoin an existing group without being added as a new participant or creating duplicate records.',
    solution:
      'Implemented group-scoped normalized member names with a database uniqueness constraint, alongside group code and password validation. Rejoin logic can identify the same member within the group.',
    details: ['Normalized member identity', 'Unique constraint per group', 'Validated group join flow', 'Session rejoin behavior'],
    outcome:
      'Group membership is protected at both the API validation and database constraint levels.',
    href: '/work',
  },
  {
    number: '04',
    category: 'Security / Abuse Prevention',
    title: 'Progressive login lockouts and rate limiting',
    project: 'TripSplit and production APIs',
    problem:
      'Authentication endpoints need protection from repeated guessing and automated abuse without relying only on client-side checks.',
    solution:
      'Added server-side rate limits and progressive login lockout logic, with hashed keys and expiring strike state. Rate limits are applied by endpoint category.',
    details: ['Redis-backed rate limiting', 'Progressive lockout duration', 'Hashed limiter keys', 'Server-side enforcement'],
    outcome:
      'Repeated login attempts are constrained by server-managed limits and escalating temporary lockouts.',
    href: '/work',
  },
  {
    number: '05',
    category: 'Payments / Reliability',
    title: 'Payment webhook verification and reconciliation',
    project: 'Active Products',
    problem:
      'Payment provider callbacks can be delayed or missed, leaving an order pending even after the provider reports a captured payment.',
    solution:
      'Implemented signature verification for Razorpay webhooks and a protected reconciliation job that checks and repairs payment/order state when webhook delivery does not fully update the database.',
    details: ['Webhook signature validation', 'Timing-safe signature comparison', 'Protected reconciliation endpoint', 'Payment/order status consistency'],
    outcome:
      'The payment flow has both event-driven updates and a recovery path for stale pending records.',
    href: 'https://activeproducts.in',
  },
  {
    number: '06',
    category: 'Retrieval / Performance',
    title: 'Inspectable, staged RAG pipeline',
    project: 'Voice RAG System',
    problem:
      'A retrieval-augmented voice system needs grounded answers, but it is difficult to improve latency or quality when pipeline stages are opaque.',
    solution:
      'Built a custom orchestration pipeline with separately measurable retrieval stages, hybrid dense and sparse retrieval, reciprocal-rank fusion, reranking, semantic caching, and guardrails.',
    details: ['Hybrid retrieval and RRF', 'Cross-encoder reranking', 'Multiple chunking strategies', 'Redis semantic cache', 'Stage-level timing'],
    outcome:
      'The pipeline exposes where latency and retrieval quality can be tuned instead of hiding the workflow behind a single abstraction.',
    href: '/work',
  },
];

export default function TechnicalHighlightsPage() {
  return (
    <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-20 lg:py-28">
      <div className="eyebrow">ENGINEERING NOTES</div>
      <Reveal>
        <h1 className="font-display text-[32px] md:text-[46px] mt-5 max-w-[22ch]">
          Technical highlights
        </h1>
        <p className="text-slate max-w-[64ch] mt-6 text-[15.5px] leading-relaxed">
          A running collection of engineering problems, the decisions behind their
          implementation, and the lessons that came from building real systems. Each entry
          links back to the project where the work happened.
        </p>
      </Reveal>

      <div className="mt-14">
        {highlights.map((item) => (
          <Reveal key={item.number}>
            <article className="grid md:grid-cols-[150px_1fr] gap-5 md:gap-10 py-10 border-t border-line">
              <div>
                <div className="font-mono text-[11px] text-slatedark">{item.number}</div>
                <div className="font-mono text-[11px] text-amber mt-2">{item.category}</div>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-paper">{item.title}</h2>
                <p className="font-mono text-[11px] text-slate mt-2">PROJECT — {item.project}</p>
                <div className="mt-6 space-y-4 text-[14.5px] leading-relaxed">
                  <p className="text-slate"><strong className="text-paperdim">Challenge:</strong> {item.problem}</p>
                  <p className="text-slate"><strong className="text-paperdim">Implementation:</strong> {item.solution}</p>
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {item.details.map((detail) => (
                      <li key={detail} className="font-mono text-[10px] text-slate border border-line rounded-full px-3 py-1.5">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <p className="text-paperdim"><strong>Result:</strong> {item.outcome}</p>
                </div>
                <Link
                  href={item.href}
                  className="inline-block font-mono text-[11px] text-amber mt-5 hover:underline"
                >
                  View project details ↗
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <NextChapter
        n="06"
        href="/contact"
        label="Contact"
        teaser="Want to discuss an implementation or engineering decision? Get in touch."
      />
    </div>
  );
}
