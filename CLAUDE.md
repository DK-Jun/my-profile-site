# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어로 응답합니다.
- **코드 주석**: 한국어로 작성합니다.
- **커밋 메시지**: 한국어로 작성합니다.
- **문서화**: README, 가이드 등 모든 문서는 한국어로 작성합니다.
- **변수명/함수명**: 영어로 작성하여 코드 표준(camelCase, PascalCase 등)을 준수합니다.

예시:

```ts
// 사용자 프로필을 가져와 캐시에 저장한다
async function fetchUserProfile(userId: string): Promise<UserProfile> {
  // ...
}
```

## 프로젝트 현황

개발자 웹 이력서/포트폴리오 사이트입니다. `ROADMAP.md` 의 **Phase 2(셋업)** 과 **Phase 3(핵심 페이지 MVP)** 가 완료된 상태이며, Phase 4(콘텐츠 관리 · MDX)와 Phase 5(최적화)가 남아 있습니다.

- **프레임워크**: Next.js 16 (App Router · Turbopack) + React 19
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4 (`@theme inline` + CSS 변수로 라이트/다크 토큰 관리)
- **아이콘**: lucide-react (브랜드 아이콘 때문에 v0.x 계열을 고정)
- **테마**: next-themes (`class` 전략, ThemeProvider 래퍼)
- **폼 / 외부 서비스**: **아직 미연동**. Contact 폼 제출 핸들러는 TODO 주석과 함께 성공 상태만 흉내 냄. Resend 연동은 Phase 6 에서 진행.

## 저장소 구조

```
my-profile-site/
├── CLAUDE.md                 # 이 문서
├── ROADMAP.md                # 7주 로드맵 (작업 기준점)
├── README.md                 # 프로젝트 소개 (GitHub Pages 표시)
├── .claude/                  # Claude Code 로컬 설정
├── .github/workflows/        # GitHub Actions (자동 빌드 & 배포)
├── static-preview/
│   └── index.html            # 바닐라 HTML/CSS 정적 프리뷰 (Live Server 용)
├── app/                      # Next.js App Router 페이지
├── components/               # UI 컴포넌트
├── lib/                      # 데이터, 타입, 설정
├── public/                   # 정적 파일
└── package.json              # Node.js 설정
```

## 주요 디렉토리

| 경로              | 역할                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------- |
| `app/`            | App Router 페이지 (`/`, `/about`, `/projects`, `/skills`, `/contact`) + `sitemap.ts`, `robots.ts` |
| `components/`     | `layout/`, `ui/`, `home/`, `about/`, `projects/`, `skills/`, `contact/`                   |
| `lib/siteConfig.ts` | 사이트 메타 (제목/설명/OG)                                                                |
| `lib/types.ts`    | 도메인 타입 (`Profile`, `Experience`, `Project`, `SkillCategory` …)                       |
| `lib/data/*`      | **더미 콘텐츠의 단일 소스**. 실제 이력으로 교체할 때 이 디렉토리만 수정하면 됨            |

UI 컴포넌트 안에 이력 문자열을 하드코딩하지 말고, `lib/data/*` 를 통해 주입받도록 유지하세요.

## 개발 명령어

루트 디렉토리에서 실행합니다.

```bash
npm run dev           # 개발 서버 (http://localhost:3000)
npm run build         # 정적 HTML 빌드 (GitHub Pages용)
npm start             # 프로덕션 실행
npm run lint          # ESLint
npm run typecheck     # tsc --noEmit
npm run format        # Prettier 포매팅 적용
npm run format:check  # Prettier 스타일 준수 여부 확인
```

변경 후에는 **lint → typecheck → build → format:check** 순서로 확인합니다.

## 정적 프리뷰 (static-preview/)

`static-preview/index.html` 은 Next.js 와 별개로 **VS Code Live Server 등으로 바로 열어볼 수 있는 단일 HTML 파일**입니다. 빠른 디자인 시안 확인/공유용이며 동일한 더미 콘텐츠를 담고 있습니다. Next.js 코드와 동기화되는 것은 아니므로, 구조를 크게 바꿀 때는 양쪽을 함께 갱신하거나 한쪽을 정답(source of truth)으로 두고 다른 쪽은 일회성 산출물로 취급하세요.

## 아키텍처 메모

- **테마 연동**: Tailwind v4 는 `dark:` variant 에 `prefers-color-scheme` 를 기본값으로 쓰기 때문에, `app/globals.css` 에서 `@custom-variant dark (&:where(.dark, .dark *));` 로 **class 전략으로 재정의** 해두었습니다. next-themes 의 `attribute="class"` 와 짝을 이룹니다. 이 규칙을 제거하면 다크모드 토글이 UI 에 반영되지 않습니다.
- **CSS 변수**: 색상은 `--background`, `--foreground`, `--primary` 등 CSS 변수로 선언되어 있고, Tailwind 클래스에서는 `bg-[var(--primary)]` 형태로 참조합니다. 새 색상 도입 시 `app/globals.css` 의 `:root` / `.dark` 양쪽에 값을 추가하고, `@theme inline` 블록에 매핑을 더해야 합니다.
- **서버 vs 클라이언트 컴포넌트**: 상호작용이 필요한 `Header`, `ThemeToggle`, `ThemeProvider`, `ProjectFilter`, `ContactForm` 만 `"use client"` 로 선언되어 있습니다. 페이지(`app/*/page.tsx`)는 기본적으로 서버 컴포넌트로 유지하세요.
- **lucide-react 버전 고정**: v1.x 에서 `Github`, `Linkedin`, `Twitter` 등 브랜드 아이콘이 제거되었습니다. 업그레이드 전에 아이콘 대체 방안을 먼저 확인하세요.
- **SEO**: `app/layout.tsx` 의 정적 `metadata` 객체와 JSON-LD `<script>` 를 사용합니다. 페이지별 추가 metadata 는 각 `page.tsx` 의 `export const metadata` 로 오버라이드합니다.
- **배포**: GitHub Actions가 `npm run build` 시 `out/` 디렉토리를 생성하고 GitHub Pages에 배포합니다. `next.config.ts`의 `output: 'export'` 설정이 필수입니다.

## 로드맵 기반 작업 원칙

- 작업 시작 전 `ROADMAP.md` 의 현재 Phase 를 확인하고, 앞선 Phase 항목을 임의로 구현하지 않습니다.
- Phase 순서: **기획(P1) → 셋업(P2) → 핵심 페이지(P3) → 콘텐츠 관리(P4) → 최적화(P5) → 부가 기능(P6) → 운영(P7)**.
- 새 기능 제안은 Phase 6 이하로 분류하여, 남은 Phase (MDX/최적화) 완성을 우선시합니다.

## 핵심 품질 기준

- **성능**: Lighthouse 모든 카테고리 90+, LCP < 2.5s, CLS < 0.1, INP < 200ms
- **반응형**: 모바일 퍼스트 (≥320px), 브레이크포인트 `sm`(640) / `md`(768) / `lg`(1024)
- **접근성**: WCAG 2.1 AA — 시맨틱 태그, 키보드 내비게이션, `aria-*`, focus-visible 링 유지
- **SEO**: 모든 페이지에 `metadata` 지정, JSON-LD Person schema 는 루트 레이아웃이 담당

## 플랫폼 유의 사항

- 개발 환경은 **Windows 11 + bash 셸**입니다. 경로 구분자는 슬래시(`/`)를 사용하고, `NUL` 대신 `/dev/null`을 사용합니다.
- PowerShell이 필요한 작업은 PowerShell 도구로 분리해 실행합니다.
- **IDE가 파일을 잠그면 Bash `mv` 가 "Permission denied" 로 실패**할 수 있습니다(`app/`, `components/`, `.next/` 등). 이때는 PowerShell `Move-Item` 을 사용하세요.
- `create-next-app` 은 대상 디렉토리에 `.md` 파일이 있으면 충돌로 간주합니다. 재생성이 필요하면 기존 `CLAUDE.md`, `ROADMAP.md`, `.claude/` 를 임시 디렉토리로 이동 후 실행하세요.

## 파일 생성 정책

- 사용자가 명시적으로 요청하지 않는 한 새로운 최상위 문서(`*.md`)를 생성하지 않습니다. 기존 문서(`ROADMAP.md`, `CLAUDE.md`, `README.md`, `AGENTS.md`) 업데이트를 우선합니다.
- 이력 관련 문자열은 UI 에 하드코딩하지 않고 `lib/data/*` 에 추가합니다.
