// 도메인 공통 타입 정의

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter" | "globe";
};

export type Profile = {
  name: string;
  title: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  socials: SocialLink[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  startDate: string; // ISO (YYYY-MM)
  endDate: string | null; // null 이면 현재 재직 중
  description: string;
  highlights: string[];
  stack: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  description?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  thumbnail: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  year: number;
};

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  category: string;
  description: string;
  items: Skill[];
};

// 홈 About 프리뷰에서 노출하는 제공 서비스 카드
export type Service = {
  title: string;
  description: string;
  icon: "code" | "server" | "cloud" | "sparkles";
};

// 홈 About 프리뷰 및 풋터에서 요약으로 노출할 수치 지표
export type Stat = {
  label: string;
  value: string;
  suffix: string;
};
