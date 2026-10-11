import ProjectCard, { Project } from '@/components/ProjectCard';
import CompactProjectList, { CompactProject } from '@/components/CompactProjectList';
import NextChapter from '@/components/NextChapter';
import Reveal from '@/components/Reveal';

const projects: Project[] = [
  {
    tag: '01 — AI / Production',
    title: 'EduDiagno AI BI Copilot',
    stack: ['Vanna', 'Qdrant', 'RAG', 'FastAPI', 'Prisma', 'PostgreSQL / MySQL / MSSQL / Redshift'],
    summary:
      'A schema-aware natural-language-to-SQL system spanning PostgreSQL, MySQL, MSSQL and Redshift, built solo and shipped into production. The hard part was never generating SQL — it was recovering gracefully when the first attempt was wrong.',
    note: 'The self-healing pipeline came from watching how often a "wrong" query was only one column-name away from correct. Detecting the error class and re-prompting with the failure attached cut failed queries by 85% — a fix that looked obvious only in hindsight.',
    problem: 'Non-technical users needed direct, trustworthy analytics access across multiple database engines without writing SQL or risking destructive queries.',
    approach: 'Built RAG-based schema retrieval with schema-only embeddings (no client data stored) in Qdrant, a multi-database abstraction layer with encrypted credentials, role-based query enforcement (SUPER_ADMIN → USER) with read-only validation, and a self-healing SQL pipeline that detects failures and repairs the prompt automatically.',
    outcome: '85% reduction in failed queries (measured across 132 logged queries over 2 weeks); ...',
    screenshots: [
      {
        src: '/work/Edudiagno/data0.jpeg',
        alt: 'The EduDiagno BI Copilot interface, showing a natural language query and the generated SQL.',
      },
      {
        src: '/work/Edudiagno/data1.jpeg',
        alt: 'The EduDiagno BI Copilot interface, showing a dashboard with multiple visualizations.',
      },
    ],
  },
  {
    tag: '02 — AI / Retrieval',
    title: 'Voice RAG System',
    stack: ['Python', 'FastAPI', 'Qdrant', 'Redis', 'PostgreSQL', 'Next.js'],
    summary:
      'A voice-enabled retrieval system with a hand-built orchestrator: no LangChain or LlamaIndex, every stage timed.',
    note: 'Every stage is bespoke Python, so each one can be timed, swapped and explained. A live "Stage Rail" in the UI shows where each request spends its time.',
    problem: 'Voice questions need fast, grounded answers, and a demo-grade RAG pipeline cannot show where time or quality is lost.',
    approach: 'Hybrid dense + sparse retrieval with RRF fusion and cross-encoder reranking, four chunking strategies, a Redis semantic cache, and three-tier guardrails. Sarvam AI speech-to-text and the Anthropic API for generation.',
    outcome: 'Built for the HH Goa hackathon (Oct 2026).',
    screenshots: [],
  },
  {
    tag: '03 — Real-time / RBAC',
    title: 'Examination Platform',
    stack: ['Next.js', 'Socket.IO', 'PostgreSQL', 'RBAC', 'Offline/LAN Deployment'],
    summary:
      'Went from a one-line brief — "make it feel like a JEE/CET exam" — to a full multi-tenant platform with real-time AI-assisted proctoring, built to run entirely offline on college infrastructure.',
    note: 'The offline/LAN requirement forced a rethink of every assumption baked into a normal SaaS auth flow. Decoupling the proctoring server from the main app for independent scaling turned out to matter more than anything else in the design.',
    problem: 'Institutions needed a proctored exam platform that could run reliably on campus networks with unreliable or absent internet access.',
    approach: 'Designed a 4-level RBAC hierarchy (Super Admin → Institution Admin → Teacher → Student) with OTP auth and request-based enrollment, a standalone Socket.IO server for real-time proctoring (tab switches, copy-paste, multi-login detection), and a 15+ model normalized PostgreSQL schema covering the full exam lifecycle.',
    outcome: 'Fully functional offline/LAN deployment with independently scalable real-time proctoring, used across the full exam lifecycle from scheduling to grading.',
    screenshots: [
      {
        src: '/work/Edudiagno/data2.jpeg',
        alt: 'The Examination Platform interface, showing a proctoring dashboard with real-time monitoring.',
      },
      {
        src: '/work/Edudiagno/data3.jpeg',
        alt: 'The Examination Platform interface, showing a student taking an exam with a timer and question navigation.',
      },
      {
        src: '/work/Edudiagno/data4.jpeg',
        alt: 'The Examination Platform interface, showing an institution admin managing users and roles.',
      },
    ],
  },
  {
    tag: '04 — Personal / E-commerce',
    title: 'Active Products — Ayurvedic E-Commerce',
    stack: ['Next.js (App Router)', 'Prisma', 'PostgreSQL (Neon)', 'Razorpay', 'Upstash Redis'],
    summary:
      'A production e-commerce platform for Ayurvedic and Amla food products — full customer journey from catalog to checkout, with a legal framework built to actually hold up in India.',
    note: 'Writing DPDP Act-aligned Terms and a Privacy Policy from scratch — alongside FSSAI and Consumer Protection Act considerations — taught me more about payment webhook edge cases than any tutorial, because compliance forces you to think about every failure path.',
    problem: 'Needed a genuinely production-grade store, not a demo — real payments, real compliance, real customers.',
    approach: 'Razorpay integration with signature-verified webhooks, Upstash Redis rate-limiting and CORS on all API routes, transactional email via Resend, Cloudinary for images, and a legal framework aligned with DPDP Act 2023, the Consumer Protection Act 2019, and FSSAI regulations.',
    outcome: 'Live at activeproducts.in.',
    screenshots: [
      {
        src: '/work/personal/data0.jpeg',
        alt: 'The Active Products e-commerce platform interface, showing the product catalog with filters and search.',
      },
      {
        src: '/work/personal/data1.jpeg',
        alt: 'The Active Products e-commerce platform interface, showing the checkout page with payment options.',
      },
      {
        src: '/work/personal/data2.jpeg',
        alt: 'The Active Products e-commerce platform interface, showing the order confirmation page with order details.',
      }
    ],
  },
];

const moreProjects: CompactProject[] = [
  {
    tag: '05 — Solo / AI Voice',
    title: 'Parakeet — AI Interview Copilot',
    stack: ['OpenAI GPT-4o', 'Deepgram'],
    oneLiner: 'Real-time voice transcription with live answer suggestions during an actual conversation, not batch Q&A.',
    githubUrl: 'https://github.com/adityajadhav19/readme/blob/master/parakeet-README.md',
  },
  {
    tag: '06 — Infrastructure',
    title: 'BI Copilot CI/CD Pipeline',
    stack: ['GitHub Actions', 'EC2', 'Docker Compose'],
    oneLiner: 'Bastion-proxied deployment pipeline with pre-migration backups and selective service restarts.',
    githubUrl: 'https://github.com/adityajadhav19/readme/blob/master/bi-copilot-cicd-README.md',
  },
];

export default function WorkPage() {
  return (
    <Reveal>
      <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-20 lg:py-28">
        <div className="eyebrow">SPECIMENS</div>
        <h1 className="font-display text-[32px] md:text-[46px] mt-5">5 systems, shipped</h1>
        <p className="text-slate max-w-[56ch] mt-5 text-[15px] leading-relaxed">
          Four entries below get the full write-up: a production AI system, a retrieval
          pipeline, a real-time platform, and a full-stack product with real payments and
          compliance behind it. Two shorter entries follow.
        </p>
        <Reveal>
          <div className="mt-4">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Reveal>
        <Reveal>
          <section className="mt-24 pt-16 border-t border-line">
            <div className="eyebrow">SHORTER ENTRIES</div>
            <h2 className="font-display text-2xl md:text-3xl mt-4 mb-10">
              Two more, shorter versions
            </h2>
            <CompactProjectList projects={moreProjects} />
            <p className="text-slate text-sm mt-10">
              Earlier projects: ORB-SLAM3 navigation (Jetson Orin Nano), SafeLink GIS, Diet
              Recommendation API, Django Ninja Task API, Autonomous Floor Cleaning Robot.
            </p>
          </section>
        </Reveal>
        <Reveal>
          <NextChapter
            n="03"
            href="/experience"
            label="Experience"
            teaser="How six months turned into leading a team, and what that actually looked like."
          />
        </Reveal>
      </div>
    </Reveal>
  );
}