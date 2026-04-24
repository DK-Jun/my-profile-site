import type { Metadata } from "next";
import { SkillCategory } from "@/components/skills/SkillCategory";
import { Section } from "@/components/ui/Section";
import { skillCategories } from "@/lib/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "카테고리별로 정리한 기술 스택과 숙련도입니다.",
};

export default function SkillsPage() {
  return (
    <Section
      eyebrow="Toolbox"
      title="기술 스택"
      description="숙련도는 5단계(입문 → 숙련) 기준의 주관적 평가입니다."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillCategory key={category.category} category={category} />
        ))}
      </div>
    </Section>
  );
}
