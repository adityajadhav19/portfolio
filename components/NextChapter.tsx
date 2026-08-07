import Link from 'next/link';

export default function NextChapter({
  n,
  href,
  label,
  teaser,
}: {
  n: string;
  href: string;
  label: string;
  teaser: string;
}) {
  return (
    <Link
      href={href}
      className="group block border-t border-line py-10 mt-4"
    >
      <div className="font-mono text-[11px] text-slate mb-3">NEXT ENTRY — {n}</div>
      <div className="flex items-baseline justify-between gap-6">
        <div>
          <h3 className="font-display text-3xl md:text-4xl text-paper group-hover:text-amber transition-colors">
            {label}
          </h3>
          <p className="text-slate text-sm mt-2 max-w-md">{teaser}</p>
        </div>
        <span className="font-mono text-2xl text-slate group-hover:text-amber group-hover:translate-x-1 transition-all shrink-0">
          →
        </span>
      </div>
    </Link>
  );
}
