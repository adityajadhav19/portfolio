import ProjectCard, { Project } from '@/components/ProjectCard';
import NextChapter from '@/components/NextChapter';
import Reveal from '@/components/Reveal';

const projects: Project[] = [
  {
    tag: '01 — AI / Production',
    title: 'EduDiagno AI BI Copilot',
    stack: ['Vanna', 'Qdrant', 'RAG', 'FastAPI', 'Prisma', 'PostgreSQL / MySQL / MSSQL / Redshift'],
    summary:
      'A schema-aware natural-language-to-SQL system spanning four database engines, built solo and shipped into production. The hard part was never generating SQL — it was recovering gracefully when the first attempt was wrong.',
    note: 'The self-healing pipeline came from watching how often a "wrong" query was only one column-name away from correct. Detecting the error class and re-prompting with the failure attached cut failed queries by 85% — a fix that looked obvious only in hindsight.',
    problem: 'Non-technical users needed direct, trustworthy analytics access across five different database engines without writing SQL or risking destructive queries.',
    approach: 'Built RAG-based schema retrieval with schema-only embeddings (no client data stored) in Qdrant, a multi-database abstraction layer with encrypted credentials, role-based query enforcement (SUPER_ADMIN → USER) with read-only validation, and a self-healing SQL pipeline that detects failures and repairs the prompt automatically.',
    outcome: '85% reduction in failed queries; FastAPI microservices with Prisma ORM now drive multi-widget dashboards with live Plotly visualizations in production.',
  },
  {
    tag: '02 — Real-time / RBAC',
    title: 'Examination Platform',
    stack: ['Next.js', 'Socket.IO', 'PostgreSQL', 'RBAC', 'Offline/LAN Deployment'],
    summary:
      'Went from a one-line brief — "make it feel like a JEE/CET exam" — to a full multi-tenant platform with real-time AI-assisted proctoring, built to run entirely offline on college infrastructure.',
    note: 'The offline/LAN requirement forced a rethink of every assumption baked into a normal SaaS auth flow. Decoupling the proctoring server from the main app for independent scaling turned out to matter more than anything else in the design.',
    problem: 'Institutions needed a proctored exam platform that could run reliably on campus networks with unreliable or absent internet access.',
    approach: 'Designed a 4-level RBAC hierarchy (Super Admin → Institution Admin → Teacher → Student) with OTP auth and request-based enrollment, a standalone Socket.IO server for real-time proctoring (tab switches, copy-paste, multi-login detection), and a 15+ model normalized PostgreSQL schema covering the full exam lifecycle.',
    outcome: 'Fully functional offline/LAN deployment with independently scalable real-time proctoring, used across the full exam lifecycle from scheduling to grading.',
  },
  {
    tag: '03 — Solo / AI Voice',
    title: 'Parakeet — AI Interview Copilot',
    stack: ['OpenAI GPT-4o', 'Deepgram', 'Voice Transcription'],
    summary:
      'A solo-built interview-preparation copilot that listens in real time and surfaces live answer suggestions — owned end-to-end from concept through deployment.',
    note: 'Latency was the whole game here. A suggestion that arrives half a second late is worse than no suggestion at all — that constraint shaped every architectural decision more than the AI logic did.',
    problem: 'Interview prep tools were either static question banks or too slow to feel like a real-time aid during an actual conversation.',
    approach: 'Combined Deepgram for low-latency voice transcription with GPT-4o for contextual answer generation, tuned for a live-conversation feedback loop rather than a batch Q&A pattern.',
    outcome: 'Fully deployed solo project, end-to-end from architecture to production.',
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
    outcome: 'Live on a custom domain with dark mode support via Tailwind v4 class-based theming; ongoing, real orders flowing through it.',
  },
  {
    tag: '05 — Applied ML',
    title: 'Diet Recommendation API',
    stack: ['FastAPI', 'Docker', 'scikit-learn', 'OpenAI'],
    summary:
      'A containerized backend that pairs a scikit-learn prediction model with GPT-driven personalization to turn raw nutrition data into meal suggestions that actually read like advice.',
    note: 'The interesting part wasn\u2019t the ML model — it was designing the handoff so GPT could rewrite scikit-learn\u2019s numeric output into something a person would actually want to read, without hallucinating the underlying numbers.',
    problem: 'Raw model output (macros, scores) needed to become something a non-technical user could actually act on.',
    approach: 'scikit-learn handles the prediction; GPT-4o handles the language layer strictly downstream of the model\u2019s numbers, wrapped in a Dockerized FastAPI service with production-grade error handling.',
    outcome: 'Fully containerized and deployable, with a clean separation between "the model decides" and "the model explains."',
  },
  {
    tag: '06 — Infrastructure',
    title: 'BI Copilot CI/CD Pipeline',
    stack: ['GitHub Actions', 'EC2', 'Docker Compose', 'Bash'],
    summary:
      'A production deployment pipeline built independently on top of the BI Copilot — bastion-proxied, backup-safe, and boring in exactly the ways infrastructure should be.',
    note: 'Chased a bind-mount bug for the better part of a day before realizing it was an environment-variable separation issue, not a Docker issue at all. Wrote the whole thing up afterward so I\u2019d never lose that afternoon again.',
    problem: 'Deployments to production EC2 instances were manual, unversioned, and risky around migrations.',
    approach: 'GitHub Actions with bastion proxy support, a custom deploy.sh implementing a git fetch/reset strategy, pre-migration pg_dump backups, and selective Docker Compose service restarts to avoid full-stack downtime.',
    outcome: 'Repeatable, backup-safe deployments; resolved bind-mount, Prisma auth, and SSH key parsing issues along the way, documented for the next person.',
  },
  {
  tag: '07 — AI Agents / Architecture',
  title: 'Multi-Agent Development Platform',
  stack: ['OpenAI', 'FastAPI', 'Next.js', 'RBAC', 'Tool Calling'],
  summary:
    'An agent orchestration platform designed to replace repetitive development workflows with specialized AI agents coordinated through a central orchestrator.',
  note:
    'The challenge was never building individual agents—it was designing clear boundaries between them so each could own a responsibility without creating unnecessary token usage or tight coupling.',
  problem:
    'General-purpose assistants become inefficient for large engineering tasks that require planning, implementation, validation, and deployment across multiple steps.',
  approach:
    'Designed a modular orchestrator coordinating specialized agents for planning, backend development, frontend generation, testing, deployment, documentation, and code review through structured tool-based communication.',
  outcome:
    'Created a scalable architecture that can automate significant portions of the software development lifecycle while remaining extensible for new tools and agents.',
},
{
  tag: '08 — Computer Vision / Robotics',
  title: 'ORB-SLAM3 Autonomous Navigation',
  stack: ['ROS', 'ORB-SLAM3', 'Jetson Orin Nano', 'OAK-D', 'C++'],
  summary:
    'Integrated stereo visual SLAM on NVIDIA Jetson hardware to provide real-time localization and mapping for robotic navigation.',
  note:
    'Most debugging time was spent on synchronization, calibration, and ROS integration rather than the SLAM algorithm itself.',
  problem:
    'Robots require accurate localization in environments where GPS is unavailable.',
  approach:
    'Configured ORB-SLAM3 with stereo cameras and IMU data, optimized ROS nodes, and deployed the full pipeline on Jetson Orin Nano for embedded execution.',
  outcome:
    'Achieved stable real-time visual localization suitable for autonomous robotics experiments.',
},
{
  tag: '09 — API Development',
  title: 'Django Ninja Task Management API',
  stack: ['Django', 'Django Ninja', 'SQLite', 'React'],
  summary:
    'A lightweight REST API demonstrating schema-first backend development with automatic validation and documentation.',
  note:
    'Using Django Ninja significantly reduced boilerplate while keeping type safety and API documentation synchronized.',
  problem:
    'Traditional Django REST implementations often require repetitive serializers and validation logic.',
  approach:
    'Built CRUD endpoints using Django Ninja schemas with authentication, validation, and React frontend integration.',
  outcome:
    'Delivered a clean, maintainable API architecture suitable as a foundation for larger backend services.',
},
{
  tag: '10 — GIS / Public Safety',
  title: 'SafeLink Neighborhood Safety Network',
  stack: ['SvelteKit', 'TypeScript', 'MapLibre GL', 'WebGL'],
  summary:
    'A location-aware public safety platform that visualizes incidents and emergency resources on an interactive GIS map.',
  note:
    'Rendering large map datasets smoothly required treating the browser as a graphics engine rather than simply a webpage.',
  problem:
    'Communities lacked an intuitive way to visualize neighborhood safety information geographically.',
  approach:
    'Built a WebGL-powered interactive mapping interface with MapLibre, layered incident visualization, and responsive UI components.',
  outcome:
    'Delivered a performant GIS application capable of visualizing large spatial datasets interactively.',
},
{
  tag: '11 — IoT / Embedded Systems',
  title: 'Autonomous Floor Cleaning Robot',
  stack: ['ESP8266', 'NodeMCU', 'Blynk', 'L293D', 'Embedded C'],
  summary:
    'An IoT-enabled floor cleaning robot with wireless control and autonomous movement capabilities.',
  note:
    'Working with constrained embedded hardware taught the importance of reliability over feature count.',
  problem:
    'Low-cost home automation projects often require balancing hardware limitations with practical functionality.',
  approach:
    'Designed the robot around ESP8266 with motor control through L293D, integrating wireless control using the Blynk platform.',
  outcome:
    'Delivered a functional embedded robotics prototype demonstrating remote operation and autonomous cleaning.',
},

];

export default function WorkPage() {
  return (
    <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-20 lg:py-28">
      <div className="eyebrow">SPECIMENS</div>
      <h1 className="font-display text-[32px] md:text-[46px] mt-5">11 systems, shipped</h1>
      <p className="text-slate max-w-[56ch] mt-5 text-[15px] leading-relaxed">
        Three production systems built as EduDiagno&rsquo;s team lead, and 8 personal
        projects built because a real constraint was more interesting than a tutorial.
        Each has a field note — the specific thing that went sideways, or the rabbit hole
        it sent me down.
      </p>

      <div className="mt-4">
        {projects.map((p, i) => (
           <Reveal key={p.title} delay={i * 60}>
          <ProjectCard key={p.title} project={p} />
          </Reveal>
        ))}
      </div>

      <NextChapter
        n="03"
        href="/experience"
        label="Experience"
        teaser="How six months turned into leading a team, and what that actually looked like."
      />
    </div>
  );
}
