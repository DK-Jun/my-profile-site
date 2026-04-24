# 개발자 웹 이력서

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 로 구축된 개인 포트폴리오/이력서 사이트입니다.
로드맵과 목표는 [`ROADMAP.md`](./ROADMAP.md) 를, 협업 규칙은 [`CLAUDE.md`](./CLAUDE.md) 를 참고하세요.

## 빠른 시작

```bash
# 의존성 설치
npm install

# 개발 서버 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 실행
npm start
```

## 품질 점검 명령어

| 명령                   | 설명                             |
| ---------------------- | -------------------------------- |
| `npm run lint`         | ESLint 실행                      |
| `npm run typecheck`    | `tsc --noEmit` 로 타입 오류 확인 |
| `npm run format`       | Prettier 로 전체 파일 포매팅     |
| `npm run format:check` | Prettier 스타일 준수 여부만 확인 |

## 콘텐츠 수정 위치

더미 데이터는 한 곳에 모여 있어 실제 이력으로 교체하기 쉽습니다.

- `lib/siteConfig.ts` — 사이트 제목, 설명, OG 정보
- `lib/data/profile.ts` — 이름, 한 줄 소개, 자기소개, 소셜 링크
- `lib/data/experiences.ts` — 경력
- `lib/data/educations.ts` — 학력 · 수상 내역
- `lib/data/projects.ts` — 프로젝트 카드 (`featured: true` 는 홈에 노출)
- `lib/data/skills.ts` — 기술 스택 · 숙련도

## 폴더 구조

```
app/          // Next.js App Router 페이지 (/, /about, /projects, /skills, /contact)
components/   // UI 컴포넌트 (layout, ui, home, about, projects, skills, contact)
lib/          // 도메인 데이터 · 타입 · 사이트 설정
public/       // 정적 파일 (파비콘, OG 이미지)
```

## 현재 범위

`ROADMAP.md` 기준 **Phase 2(셋업) + Phase 3(핵심 페이지 MVP)** 까지 구현되어 있습니다.
Contact 폼은 UI 까지 구현되어 있으며 실제 메일 발송은 Phase 6 에서 Resend API 로 연동할 예정입니다.

## 참고

- 환경 변수: `.env.example` 참고 (현재 MVP 에서는 `NEXT_PUBLIC_SITE_URL` 만 유의미)
- 모든 사용자용 텍스트 · 주석 · 문서 · 커밋 메시지는 한국어 (식별자는 영어)
