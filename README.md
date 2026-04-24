# 개발자 포트폴리오 사이트

개인 이력서와 포트폴리오를 한눈에 보여주는 **웹 기반 프로필 사이트**입니다.

## 🚀 주요 기술

- **프레임워크**: Next.js 16 (App Router, Turbopack)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4
- **UI 라이브러리**: lucide-react
- **테마**: next-themes (다크모드 지원)

## 📂 프로젝트 구조

```
my-profile-site/
├── CLAUDE.md           # 개발 가이드 및 협업 규칙
├── ROADMAP.md          # 7주 개발 로드맵
├── README.md           # 이 파일
├── static-preview/     # 정적 HTML 프리뷰
└── web/                # Next.js 애플리케이션 (⭐ 실제 개발 영역)
    ├── app/            # 페이지: /, /about, /projects, /skills, /contact
    ├── components/     # UI 컴포넌트
    ├── lib/            # 데이터 · 타입 · 설정
    └── package.json
```

## 🛠️ 빠른 시작

**모든 npm 명령은 `web/` 디렉토리에서 실행합니다.**

```bash
cd web

# 의존성 설치
npm install

# 개발 서버 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 타입 체크 및 린트
npm run typecheck
npm run lint
```

## 📝 콘텐츠 수정

더미 데이터는 `web/lib/data/` 에 중앙 집중식으로 관리되어, 실제 이력으로 교체하기 간편합니다.

- `profile.ts` — 이름, 소개, 소셜 링크
- `experiences.ts` — 경력
- `educations.ts` — 학력, 수상
- `projects.ts` — 프로젝트 포트폴리오
- `skills.ts` — 기술 스택

UI 컴포넌트에는 텍스트를 하드코딩하지 않고, 위 파일을 통해 주입받도록 유지합니다.

## 📖 개발 문서

| 문서 | 내용 |
|------|------|
| [`CLAUDE.md`](./CLAUDE.md) | 언어 규칙, 아키텍처 메모, 커밋 컨벤션 |
| [`ROADMAP.md`](./ROADMAP.md) | 7주 개발 계획 (Phase 1~7) |
| [`web/README.md`](./web/README.md) | Next.js 기술 상세 가이드 |

## 🎯 현재 완성도

**Phase 2(셋업) + Phase 3(핵심 페이지 MVP)** 완료

- ✅ 레이아웃, 헤더, 푸터
- ✅ 홈, 소개, 프로젝트, 기술, 연락처 페이지
- ✅ 다크모드, SEO, 반응형 디자인
- ⏳ 콘텐츠 관리 시스템 (MDX) — Phase 4
- ⏳ 성능 최적화 — Phase 5

## 📱 브라우저 지원

- 모든 최신 브라우저 (Chrome, Firefox, Safari, Edge)
- 모바일 퍼스트 반응형 (≥320px)

## 📜 라이선스

개인 프로젝트입니다.
