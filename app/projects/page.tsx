import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "지금까지 작업한 프로젝트 목록과 기술 스택을 소개합니다.",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <Section
      eyebrow="Selected work"
      title="프로젝트"
      description="기술 태그별로 필터링하여 볼 수 있습니다. 가장 최근 작업부터 정렬됩니다."
      align="center"
    >
      <ProjectFilter projects={sorted} />
    </Section>
  );
}
