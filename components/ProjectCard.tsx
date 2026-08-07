'use client';

import { useState } from 'react';

export type Project = {
  tag: string;
  title: string;
  stack: string[];
  summary: string;
  note: string;
  problem: string;
  approach: string;
  outcome: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid md:grid-cols-[1fr_1.15fr] gap-8 md:gap-12 py-11 border-t border-line">
      <div>
        <div className="font-mono text-[11px] text-slate">{project.tag}</div>
        <h3 className="font-display text-2xl text-paper mt-2.5">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] text-slate border border-line rounded-full px-2.5 py-1"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-paperdim text-[15px] leading-relaxed">{project.summary}</p>

        <div className="mt-4 bg-amber/[0.06] border border-dashed border-amber/40 rounded px-4 py-3.5">
          <div className="font-mono text-[10px] tracking-widest text-amber/60 mb-1.5">
            FIELD NOTE
          </div>
          <p className="font-mono text-[12.5px] text-amber leading-relaxed">{project.note}</p>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="mt-4 flex items-center gap-2 font-mono text-xs text-trace"
        >
          <span
            className="inline-block transition-transform duration-200"
            style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            ›
          </span>
          {open ? 'Collapse log' : 'Read the full log'}
        </button>

        <div
          className="overflow-hidden transition-[max-height] duration-400 ease-in-out"
          style={{ maxHeight: open ? '320px' : '0px' }}
        >
          <div className="border-t border-line pt-4 mt-4 text-sm text-slate space-y-2.5">
            <p><strong className="text-paperdim">Problem:</strong> {project.problem}</p>
            <p><strong className="text-paperdim">Approach:</strong> {project.approach}</p>
            <p><strong className="text-paperdim">Outcome:</strong> {project.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
