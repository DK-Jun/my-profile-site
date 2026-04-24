// TODO: 실제로 제공할 수 있는 서비스/역할로 교체하세요. 홈 About 프리뷰에서 3개 정도 노출하는 것을 권장합니다.
import type { Service, Stat } from "@/lib/types";

export const services: Service[] = [
  {
    title: "웹 프론트엔드",
    description: "Next.js · React 기반의 반응형 UI 와 디자인 시스템을 설계합니다.",
    icon: "code",
  },
  {
    title: "백엔드 · API",
    description: "Node.js · NestJS 로 확장 가능한 서비스와 데이터 파이프라인을 만듭니다.",
    icon: "server",
  },
  {
    title: "클라우드 · 배포",
    description: "AWS · Vercel · GitHub Actions 로 안정적인 배포 환경을 운영합니다.",
    icon: "cloud",
  },
];

export const stats: Stat[] = [
  { label: "경력", value: "5", suffix: "+" },
  { label: "대표 프로젝트", value: "12", suffix: "+" },
  { label: "기술 스택", value: "20", suffix: "+" },
];
