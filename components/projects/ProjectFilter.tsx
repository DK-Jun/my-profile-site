"use client";

import clsx from "clsx";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/lib/types";

type ProjectFilterProps = {
  projects: Project[];
};

const ALL_TAG = "전체";

// 태그(기술 스택) 기반 클라이언트 필터. 프로젝트 배열을 서버 컴포넌트에서 주입받는다.
export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeTag, setActiveTag] = useState<string>(ALL_TAG);

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => set.add(tag)));
    return [ALL_TAG, ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeTag === ALL_TAG) return projects;
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [projects, activeTag]);

  return (
    <div className="flex flex-col gap-10">
      <div
        role="toolbar"
        aria-label="태그 필터"
        className="flex flex-wrap gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)]/40 p-3 backdrop-blur"
      >
        {tags.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              aria-pressed={isActive}
              className={clsx(
                "rounded-full px-4 py-1.5 text-xs font-semibold transition-all",
                isActive
                  ? "shadow-primary-glow bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>
      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-[var(--border)] p-10 text-center text-sm text-[var(--muted-foreground)]">
          해당 태그에 맞는 프로젝트가 없습니다.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
