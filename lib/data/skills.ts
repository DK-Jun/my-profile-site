// TODO: 실제 역량으로 교체하세요. level 은 1(학습 중) ~ 5(숙련) 기준입니다.
import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Language",
    description: "업무와 사이드 프로젝트에서 가장 자주 사용하는 프로그래밍 언어",
    items: [
      { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "Python", level: 4 },
      { name: "Go", level: 3 },
      { name: "SQL", level: 4 },
    ],
  },
  {
    category: "Framework & Library",
    description: "주로 사용하는 프레임워크와 라이브러리",
    items: [
      { name: "Next.js", level: 5 },
      { name: "React", level: 5 },
      { name: "Tailwind CSS", level: 4 },
      { name: "NestJS", level: 4 },
      { name: "React Query", level: 4 },
      { name: "Zustand", level: 3 },
    ],
  },
  {
    category: "Infrastructure",
    description: "배포와 운영을 위한 인프라 스택",
    items: [
      { name: "AWS (ECS, S3, RDS)", level: 4 },
      { name: "Docker", level: 4 },
      { name: "Terraform", level: 3 },
      { name: "GitHub Actions", level: 4 },
      { name: "Vercel", level: 4 },
    ],
  },
  {
    category: "Tool & Workflow",
    description: "생산성과 협업을 위한 도구",
    items: [
      { name: "Git & GitHub", level: 5 },
      { name: "Figma", level: 3 },
      { name: "Notion", level: 4 },
      { name: "Linear", level: 4 },
      { name: "Claude Code", level: 4 },
    ],
  },
];
