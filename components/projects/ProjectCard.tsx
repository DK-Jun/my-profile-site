import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

// 프로젝트 요약 카드: 썸네일 대신 그라데이션 + 이니셜 플레이스홀더를 사용한다.
// 호버 시 프라이머리 보더 + 미세한 상승 효과.
// TODO: Phase 4 에서 상세 페이지(/projects/[slug]) 라우트 추가 시 카드 전체를 Link 로 감쌀 것
export function ProjectCard({ project }: ProjectCardProps) {
  const initials = project.title.trim().slice(0, 2);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] transition-all hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:shadow-xl hover:shadow-black/20">
      {/* 썸네일 플레이스홀더 */}
      <div
        aria-hidden
        className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary)]/20 via-[var(--primary)]/5 to-transparent"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--primary-soft),transparent_60%)]" />
        <span className="relative text-4xl font-bold tracking-tight text-[var(--foreground)]/40">
          {initials}
        </span>
        <span className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]/70 text-[var(--muted-foreground)] backdrop-blur transition-colors group-hover:border-[var(--primary)] group-hover:text-[var(--primary)]">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg leading-tight font-semibold tracking-tight">{project.title}</h3>
          <span className="shrink-0 rounded-full bg-[var(--muted)] px-2 py-0.5 text-xs font-medium text-[var(--muted-foreground)]">
            {project.year}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{project.summary}</p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="outline">{tag}</Badge>
            </li>
          ))}
        </ul>

        {(project.githubUrl || project.demoUrl) && (
          <div className="flex items-center gap-4 border-t border-[var(--border)] pt-4 text-sm">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                aria-label={`${project.title} GitHub 저장소 열기`}
              >
                <Github className="h-4 w-4" aria-hidden />
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
                aria-label={`${project.title} 데모 열기`}
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
