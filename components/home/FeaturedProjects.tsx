import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/data/projects";

// 홈에서 featured=true 인 프로젝트 중 최대 3개를 노출한다.
export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <Section
      eyebrow="Selected work"
      title="Projects"
      description="최근에 가장 몰입했던 3개의 작업입니다."
      align="center"
      className="bg-[var(--muted)]/50"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
        >
          전체 프로젝트 보기
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </Section>
  );
}
