// TODO: 실제 프로젝트로 교체하세요. thumbnail 은 /public 경로 또는 외부 URL 로 바꿉니다.
import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "dev-resume",
    title: "개발자 웹 이력서",
    summary: "Next.js + Tailwind 로 구축한 개인 포트폴리오 사이트",
    description:
      "이 사이트 자체입니다. MDX 기반 콘텐츠 관리와 접근성 · SEO 최적화를 목표로 구성했습니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    thumbnail: "/projects/placeholder-1.svg",
    githubUrl: "https://github.com/example/dev-resume",
    demoUrl: "https://example.dev",
    featured: true,
    year: 2026,
  },
  {
    slug: "realtime-dashboard",
    title: "실시간 관제 대시보드",
    summary: "WebSocket + React Query 로 수천 건의 이벤트를 실시간으로 표시",
    description:
      "산업용 IoT 센서 데이터를 실시간으로 수집하고 시각화하는 대시보드입니다. 가상 스크롤과 웹워커로 렌더링을 최적화했습니다.",
    tags: ["React", "WebSocket", "D3.js", "Node.js"],
    thumbnail: "/projects/placeholder-2.svg",
    githubUrl: "https://github.com/example/realtime-dashboard",
    featured: true,
    year: 2025,
  },
  {
    slug: "smart-crawler",
    title: "지능형 크롤링 파이프라인",
    summary: "LLM 으로 웹 문서에서 구조화된 정보를 추출하는 시스템",
    description:
      "Playwright 로 수집한 HTML 을 LLM 에 넘겨 JSON 스키마에 맞춰 검증/교정하는 ETL 파이프라인을 구축했습니다.",
    tags: ["Python", "Playwright", "LLM", "PostgreSQL"],
    thumbnail: "/projects/placeholder-3.svg",
    githubUrl: "https://github.com/example/smart-crawler",
    featured: true,
    year: 2025,
  },
  {
    slug: "ci-time-saver",
    title: "CI 캐시 최적화 액션",
    summary: "GitHub Actions 캐시 키 전략 개선으로 빌드 시간 절반 단축",
    description:
      "모노레포 환경에서 변경된 워크스페이스만 재빌드하도록 캐시 키를 동적으로 구성하는 재사용 액션입니다.",
    tags: ["GitHub Actions", "Bash", "Node.js"],
    thumbnail: "/projects/placeholder-4.svg",
    githubUrl: "https://github.com/example/ci-time-saver",
    featured: false,
    year: 2024,
  },
  {
    slug: "study-together",
    title: "스터디 매칭 커뮤니티",
    summary: "관심사 기반으로 매주 스터디 그룹을 자동 구성해주는 웹 서비스",
    description:
      "토이 프로젝트로 시작한 사이드 서비스입니다. 약 300명이 가입하여 주간 스터디를 운영했습니다.",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    thumbnail: "/projects/placeholder-5.svg",
    githubUrl: "https://github.com/example/study-together",
    featured: false,
    year: 2023,
  },
];
