import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      {/* 하단 CTA: 프라이머리 톤의 풀블리드 배너 */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] px-8 py-14 text-center shadow-2xl shadow-black/20 sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="bg-radial-glow pointer-events-none absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--primary)] uppercase">
              <span aria-hidden className="h-px w-6 bg-[var(--primary)]" />
              Let&apos;s work together
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">같이 만들어요</h2>
            <p className="text-base text-[var(--muted-foreground)]">
              새로운 프로젝트나 협업 제안은 언제든 환영합니다. 궁금한 점이 있으면 편하게 연락
              주세요.
            </p>
            <Link
              href="/contact"
              className="shadow-primary-glow group mt-2 inline-flex h-12 items-center gap-2 rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-[var(--primary-foreground)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
            >
              연락하러 가기
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
