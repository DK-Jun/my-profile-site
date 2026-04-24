// TODO: 실제 경력으로 교체하세요.
import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    period: "2023.03 - 현재",
    startDate: "2023-03",
    endDate: null,
    description:
      "전사 공용 플랫폼의 프론트엔드 리드로서 디자인 시스템과 내부 개발자 도구를 구축하고 있습니다.",
    highlights: [
      "Next.js 기반 통합 대시보드 신규 설계 및 출시 (MAU 3만 → 8만)",
      "사내 디자인 시스템 2.0 론칭, 중복 UI 코드 40% 감소",
      "신규 엔지니어 온보딩 프로세스 정비로 첫 PR까지 소요 시간 60% 단축",
    ],
    stack: ["Next.js", "TypeScript", "React Query", "Tailwind CSS", "PostgreSQL"],
  },
  {
    company: "Beta Studio",
    role: "Full-Stack Engineer",
    period: "2021.01 - 2023.02",
    startDate: "2021-01",
    endDate: "2023-02",
    description:
      "B2C 커머스 서비스의 백오피스와 결제 흐름을 담당하며 MVP부터 스케일업까지 경험했습니다.",
    highlights: [
      "결제 재시도 로직 개선으로 실패율 12% → 3% 감소",
      "주문 검색 인덱스 재설계로 평균 응답 시간 820ms → 110ms",
      "AWS 비용 월 약 32% 절감 (ECS + Spot 도입)",
    ],
    stack: ["Node.js", "NestJS", "React", "AWS ECS", "MySQL"],
  },
  {
    company: "Gamma Lab",
    role: "Frontend Developer Intern",
    period: "2020.06 - 2020.12",
    startDate: "2020-06",
    endDate: "2020-12",
    description: "스타트업에서 랜딩 페이지와 사용자 온보딩 흐름을 구현했습니다.",
    highlights: ["A/B 테스트 인프라 도입으로 전환율 18% 개선", "Lighthouse 성능 점수 67 → 95"],
    stack: ["React", "TypeScript", "Styled Components"],
  },
];
