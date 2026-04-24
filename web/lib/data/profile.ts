// TODO: 실제 정보로 교체하세요.
import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "홍길동",
  title: "Software Engineer",
  headline: "제품을 잘 굴러가게 만드는 풀스택 개발자",
  bio: [
    "안녕하세요, 5년 차 소프트웨어 엔지니어 홍길동입니다.",
    "웹 프론트엔드부터 백엔드, 데이터 파이프라인까지 다루며 작은 팀에서 빠르게 제품을 배포하고 개선하는 것을 좋아합니다.",
    "최근에는 AI 도구를 활용한 개발 생산성 향상에 관심이 많습니다.",
  ].join(" "),
  location: "Seoul, South Korea",
  email: "hello@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/example", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/example", icon: "linkedin" },
    { label: "Email", href: "mailto:hello@example.com", icon: "mail" },
  ],
};
