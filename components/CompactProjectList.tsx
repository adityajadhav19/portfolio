export type CompactProject = {
  tag: string;
  title: string;
  oneLiner: string;
  stack: string[];
  href?: string;
};

export default function CompactProjectList({ projects }: { projects: CompactProject[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {projects.map((p) => (
        <div
          key={p.title}
          className="border border-line rounded-md p-5 hover:border-amber/40 transition-colors"
        >
          <div className="font-mono text-[10px] text-slatedark">{p.tag}</div>
          <h4 className="font-display text-[17px] text-paper mt-1.5">{p.title}</h4>
          <p className="text-slate text-[13px] mt-2 leading-relaxed">{p.oneLiner}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {p.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[10px] text-slate border border-line rounded-full px-2 py-0.5"
              >
                {s}
              </span>
            ))}
          </div>
          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-trace mt-3 hover:text-amber transition-colors"
            >
              View on GitHub →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}