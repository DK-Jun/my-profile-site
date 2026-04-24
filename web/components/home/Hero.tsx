import { ArrowRight, FileText, MapPin } from "lucide-react";
import Link from "next/link";
import { profile } from "@/lib/data/profile";

// 주요 기술 노출용 스트립. 현재는 Skills 데이터와 별도로 히어로 아래 요약만 보여준다.
const HERO_TECHS = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind",
  "AWS",
  "GitHub",
] as const;

// 첫 화면: 좌측에 타이틀·CTA, 우측에 모노그램 비주얼을 배치한 2 컬럼 레이아웃.
export function Hero() {
  const initial = profile.name.slice(0, 1);

  return (
    <section className="relative isolate overflow-hidden">
      {/* 배경 그리드 */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

      {/* 배경 앰비언트 글로우 */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[-10%] h-[640px] w-[640px] -translate-y-1/2 rounded-full bg-[var(--primary)]/20 opacity-60 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 md:grid-cols-[1.15fr_1fr] md:gap-16 lg:py-28">
          {/* 좌측 텍스트 */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
              <span aria-hidden className="h-px w-10 bg-[var(--primary)]" />
              <MapPin className="h-4 w-4" aria-hidden />
              <span>{profile.location}</span>
            </div>

            <h1 className="space-y-3">
              <span className="block text-2xl font-medium tracking-tight text-[var(--foreground)] sm:text-3xl">
                Hello<span className="text-[var(--primary)]">.</span>
              </span>
              <span className="block text-xl font-medium text-[var(--muted-foreground)] sm:text-2xl">
                저는{" "}
                <span className="text-[var(--foreground)] underline decoration-[var(--primary)] decoration-2 underline-offset-8">
                  {profile.name}
                </span>{" "}
                입니다
              </span>
              <span className="block text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {profile.title}
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
              {profile.headline}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="shadow-primary-glow group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-[var(--primary-foreground)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
              >
                프로젝트 제안하기
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-transparent px-6 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <FileText className="h-4 w-4" aria-hidden />
                이력서 보기
              </Link>
            </div>
          </div>

          {/* 우측 비주얼: 원형 링 + 모노그램 + 데코 꺾쇠 */}
          <div className="relative mx-auto flex h-full w-full items-center justify-center">
            <div className="relative aspect-square w-full max-w-[420px]">
              {/* 래디얼 글로우 */}
              <div
                aria-hidden
                className="bg-radial-glow absolute inset-0 rounded-full opacity-90 blur-2xl"
              />
              {/* 외곽 링 */}
              <div
                aria-hidden
                className="absolute inset-2 rounded-full border border-[var(--primary)]/35"
              />
              <div
                aria-hidden
                className="absolute inset-8 rounded-full border-2 border-[var(--primary)]/55"
              />
              <div
                aria-hidden
                className="absolute inset-16 rounded-full border border-[var(--primary)]/25"
              />
              {/* 중앙 코어 */}
              <div className="absolute inset-20 rounded-full bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--card)] shadow-2xl shadow-black/40" />
              {/* 이니셜 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-gradient-to-br from-[var(--foreground)] to-[var(--muted-foreground)] bg-clip-text text-[7rem] leading-none font-black tracking-tighter text-transparent sm:text-[9rem]">
                  {initial}
                </span>
              </div>
              {/* 데코 꺾쇠 */}
              <span
                aria-hidden
                className="absolute top-1/2 left-[-8px] -translate-y-1/2 font-mono text-4xl font-bold text-[var(--primary)]/70 sm:text-5xl"
              >
                &lt;
              </span>
              <span
                aria-hidden
                className="absolute top-1/2 right-[-8px] -translate-y-1/2 font-mono text-4xl font-bold text-[var(--primary)]/70 sm:text-5xl"
              >
                /&gt;
              </span>
            </div>
          </div>
        </div>

        {/* 기술 스트립 */}
        <div className="border-t border-[var(--border)]">
          <ul className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-6">
            {HERO_TECHS.map((tech) => (
              <li
                key={tech}
                className="text-sm font-medium tracking-wide text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] sm:text-base"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
