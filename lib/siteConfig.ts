// 사이트 전역 메타데이터. 실제 정보로 교체하여 사용하세요.
export const siteConfig = {
  title: "홍길동 | 개발자 포트폴리오",
  shortTitle: "홍길동",
  description: "웹과 데이터를 사랑하는 소프트웨어 엔지니어 홍길동의 이력서 · 포트폴리오입니다.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  author: "홍길동",
  locale: "ko_KR",
  keywords: ["포트폴리오", "이력서", "프론트엔드", "백엔드", "소프트웨어 엔지니어", "홍길동"],
  ogImage: "/og-image.png",
} as const;

export type SiteConfig = typeof siteConfig;
