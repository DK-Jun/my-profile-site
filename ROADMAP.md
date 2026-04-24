# 개발자 웹 이력서 프로젝트 ROADMAP

개인 브랜딩과 포트폴리오를 겸하는 개발자용 웹 이력서를 단계적으로 구축하기 위한 로드맵입니다.

---

## 1. 프로젝트 개요

### 목표

- 나를 소개하는 **온라인 명함**이자 **포트폴리오 허브** 역할의 웹사이트 구축
- 채용 담당자 / 동료 개발자 / 잠재 협업자가 빠르게 내 역량을 파악할 수 있도록 제공
- 기술 학습과 실험의 **지속 가능한 플레이그라운드**로 활용

### 핵심 원칙

- **빠른 로딩**: 첫 화면 1.5초 이내 (Lighthouse 성능 90+ 목표)
- **모바일 퍼스트**: 반응형 UI 필수
- **접근성 우선**: WCAG 2.1 AA 수준 준수
- **SEO 최적화**: 검색 유입 및 링크 공유 대비
- **유지보수 용이성**: 콘텐츠 업데이트가 간단해야 함

---

## 2. 기술 스택

| 영역        | 선택지                              | 권장                          |
| ----------- | ----------------------------------- | ----------------------------- |
| 프레임워크  | Next.js / Astro / SvelteKit         | **Next.js (App Router)**      |
| 언어        | TypeScript                          | **TypeScript**                |
| 스타일링    | Tailwind CSS / CSS Modules          | **Tailwind CSS**              |
| 콘텐츠 관리 | MDX / Headless CMS                  | **MDX** (초기)                |
| 배포        | Vercel / Netlify / GitHub Pages     | **Vercel**                    |
| 분석        | Google Analytics / Vercel Analytics | **Vercel Analytics**          |
| 폼 처리     | Formspree / Resend                  | **Resend** (이메일 직접 발송) |

---

## 3. 사이트 구조 (Information Architecture)

```
/
├── /               홈 (Hero + 요약)
├── /about          자기소개 · 이력 타임라인
├── /projects       프로젝트 갤러리
│   └── /projects/[slug]   프로젝트 상세
├── /skills         기술 스택 · 숙련도
├── /blog           블로그 (선택)
│   └── /blog/[slug]
├── /contact        연락처 · 문의 폼
└── /resume.pdf     PDF 이력서 다운로드
```

---

## 4. 단계별 개발 로드맵

### Phase 1: 기획 & 디자인 (1주)

- [ ] 타겟 독자 정의 (국내 채용 담당자 / 해외 / 오픈소스 커뮤니티)
- [ ] 콘텐츠 초안 작성 (자기소개, 경력, 프로젝트 3~5개)
- [ ] 와이어프레임 제작 (Figma / 종이 스케치)
- [ ] 컬러 팔레트 · 타이포그래피 선정
- [ ] 도메인 구매 (예: `이름.dev`, `이름.me`)

**산출물**: 와이어프레임, 콘텐츠 초안 문서, 디자인 토큰 정의

---

### Phase 2: 프로젝트 초기 셋업 (2~3일)

- [ ] Next.js + TypeScript 프로젝트 생성
  ```bash
  npx create-next-app@latest my-resume --typescript --tailwind --app
  ```
- [ ] ESLint · Prettier · Husky + lint-staged 설정
- [ ] 폴더 구조 정리 (`components/`, `content/`, `lib/`, `app/`)
- [ ] Git 저장소 생성 및 GitHub 연동
- [ ] Vercel 프로젝트 연결 (자동 배포 확인)
- [ ] `.env.example` 작성, 환경 변수 관리 전략 수립

**산출물**: 최소 실행 가능한 배포 파이프라인 (main 브랜치 push → 자동 배포)

---

### Phase 3: 핵심 페이지 구현 (1~2주)

#### 3-1. 레이아웃 · 공통 컴포넌트

- [ ] 헤더 (네비게이션, 다크모드 토글)
- [ ] 푸터 (소셜 링크, 저작권)
- [ ] SEO 컴포넌트 (OpenGraph, Twitter Card, JSON-LD)
- [ ] 반응형 breakpoint 정의

#### 3-2. 홈 페이지

- [ ] Hero 섹션 (이름, 한 줄 소개, CTA 버튼)
- [ ] 대표 프로젝트 3개 카드
- [ ] 기술 스택 요약
- [ ] 연락처 바로가기

#### 3-3. About 페이지

- [ ] 자기소개 문단
- [ ] 경력 타임라인 (Timeline 컴포넌트)
- [ ] 학력 · 자격증 · 수상 이력
- [ ] 관심 분야 / 성장 스토리

#### 3-4. Projects 페이지

- [ ] 프로젝트 목록 카드 (썸네일, 제목, 기술 태그)
- [ ] 필터 기능 (기술 태그별)
- [ ] 상세 페이지: 문제 정의 → 해결 과정 → 결과 → 배운 점
- [ ] GitHub / 데모 링크, 스크린샷 갤러리

#### 3-5. Skills 페이지

- [ ] 카테고리별 기술 스택 (언어 / 프레임워크 / 인프라 / 도구)
- [ ] 숙련도 시각화 (뱃지 또는 그래프)

#### 3-6. Contact 페이지

- [ ] 이메일 / LinkedIn / GitHub 링크
- [ ] 문의 폼 (이름, 이메일, 메시지) + Resend 연동
- [ ] 스팸 방지 (reCAPTCHA / honeypot)

---

### Phase 4: 콘텐츠 관리 (3~5일)

- [ ] MDX 설정 (`@next/mdx` 또는 `contentlayer`)
- [ ] 프로젝트 · 블로그 글을 `content/` 디렉토리에서 관리
- [ ] 프론트매터 스키마 정의 (title, date, tags, thumbnail 등)
- [ ] 코드 하이라이팅 (`rehype-prism-plus` 또는 `shiki`)
- [ ] 목차(TOC) 자동 생성

---

### Phase 5: 품질 · 성능 최적화 (1주)

- [ ] 이미지 최적화 (`next/image`, WebP · AVIF)
- [ ] 폰트 최적화 (`next/font`, subset)
- [ ] Lighthouse 점수 측정 및 개선 (Performance / Accessibility / SEO / Best Practices)
- [ ] Core Web Vitals (LCP / INP / CLS) 측정
- [ ] 접근성 점검 (키보드 내비게이션, 스크린리더, 명도 대비)
- [ ] `sitemap.xml` / `robots.txt` 생성
- [ ] 다국어 지원 (선택: 한국어 / 영어)

---

### Phase 6: 부가 기능 (선택, 2주+)

- [ ] 블로그 기능 (RSS 피드 포함)
- [ ] 방문자 통계 대시보드
- [ ] 다크모드 / 라이트모드 토글 (시스템 설정 연동)
- [ ] 애니메이션 (Framer Motion / GSAP)
- [ ] 3D 인터랙션 (Three.js / React Three Fiber)
- [ ] 이력서 PDF 자동 생성 (Puppeteer / React-PDF)
- [ ] GitHub 활동 위젯 (Contribution Graph 연동)
- [ ] 방명록 (Giscus / Utterances)

---

### Phase 7: 운영 & 지속 개선 (상시)

- [ ] 월 1회 콘텐츠 업데이트 (새 프로젝트 · 경력)
- [ ] 분기별 성능 · SEO 점검
- [ ] 방문자 피드백 반영
- [ ] A/B 테스트로 CTA 개선
- [ ] 백업 전략 (Git 외 추가 백업)

---

## 5. 마일스톤 요약

| 마일스톤        | 목표 시점 | 완료 기준                              |
| --------------- | --------- | -------------------------------------- |
| M1. 기획 확정   | 1주 차    | 와이어프레임 + 콘텐츠 초안 확보        |
| M2. MVP 배포    | 3주 차    | 홈 · About · Projects 페이지 배포 완료 |
| M3. 콘텐츠 완성 | 5주 차    | 프로젝트 5개 · 연락처 폼 동작          |
| M4. 최적화 완료 | 6주 차    | Lighthouse 모든 항목 90+               |
| M5. 공식 오픈   | 7주 차    | 도메인 연결 + SNS 공유                 |

---

## 6. 체크리스트: 공개 전 최종 점검

- [ ] 모든 링크가 동작하는가? (404 없음)
- [ ] 모바일 · 태블릿 · 데스크톱에서 정상 표시되는가?
- [ ] OG 이미지가 공유 시 잘 보이는가?
- [ ] 연락처 폼 테스트 (실제 이메일 수신 확인)
- [ ] 개인정보(주민번호, 주소 등) 노출 없는가?
- [ ] HTTPS 적용 완료?
- [ ] `robots.txt` / `sitemap.xml` 제출 (Google Search Console)
- [ ] 다양한 브라우저 테스트 (Chrome / Safari / Firefox / Edge)

---

## 7. 참고 리소스

- **영감**: [awesome-developer-portfolios](https://github.com/emmabostian/developer-portfolios)
- **디자인**: Dribbble, Behance, Awwwards
- **Next.js**: [공식 문서](https://nextjs.org/docs)
- **Tailwind UI 컴포넌트**: [Tailwind UI](https://tailwindui.com/), [shadcn/ui](https://ui.shadcn.com/)
- **아이콘**: [Lucide](https://lucide.dev/), [Heroicons](https://heroicons.com/)
- **SEO 가이드**: [web.dev](https://web.dev/learn/)

---

> _"완벽한 이력서보다 꾸준히 업데이트되는 이력서가 낫다."_
>
> 먼저 MVP를 띄우고, 실제 공유하면서 피드백으로 다듬어 나가는 것을 권장합니다.
