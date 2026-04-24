import { Badge } from "@/components/ui/Badge";
import type { Experience } from "@/lib/types";

type TimelineProps = {
  items: Experience[];
};

// 경력 사항을 수직 타임라인으로 시각화한다.
export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative space-y-12 border-l-2 border-[var(--border)] pl-8">
      {items.map((exp) => (
        <li key={`${exp.company}-${exp.startDate}`} className="relative">
          <span
            aria-hidden
            className="absolute top-2 -left-[41px] flex h-5 w-5 items-center justify-center"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary)] ring-4 ring-[var(--primary)]/15" />
          </span>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
              {exp.role}
              <span className="ml-2 text-sm font-medium text-[var(--muted-foreground)]">
                @ {exp.company}
              </span>
            </h3>
            <time className="rounded-full bg-[var(--muted)] px-2.5 py-0.5 font-mono text-xs text-[var(--muted-foreground)]">
              {exp.period}
            </time>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
            {exp.description}
          </p>
          {exp.highlights.length > 0 && (
            <ul className="mt-4 space-y-1.5 text-sm text-[var(--foreground)]/90">
              {exp.highlights.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {exp.stack.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {exp.stack.map((tech) => (
                <li key={tech}>
                  <Badge variant="outline">{tech}</Badge>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
