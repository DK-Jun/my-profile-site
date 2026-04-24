import { Cloud, Code2, Server, Sparkles } from "lucide-react";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { profile } from "@/lib/data/profile";
import { services, stats } from "@/lib/data/services";
import type { Service } from "@/lib/types";

const iconMap: Record<Service["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  code: Code2,
  server: Server,
  cloud: Cloud,
  sparkles: Sparkles,
};

// 홈 About 프리뷰: 좌측에 제공 서비스 타임라인, 우측에 바이오 + 통계.
// 레퍼런스 레이아웃을 따라 수직 라인 + 오렌지 포인트 도트로 서비스 항목을 구분한다.
export function AboutPreview() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          {/* 좌측: 서비스 리스트 */}
          <ol className="relative space-y-10 border-l border-[var(--border)] pl-8">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <li key={service.title} className="relative">
                  <span
                    aria-hidden
                    className="absolute top-3 -left-[37px] flex h-4 w-4 items-center justify-center"
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)] ring-4 ring-[var(--primary)]/20" />
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--primary)] shadow-sm">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                      <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  {idx < services.length - 1 && <span className="sr-only">, 그리고</span>}
                </li>
              );
            })}
          </ol>

          {/* 우측: 소개 + 스탯 */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--primary)] uppercase">
                <span aria-hidden className="h-px w-6 bg-[var(--primary)]" />
                About me
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                제품을 굴러가게 만드는 개발자
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted-foreground)]">
                {profile.bio}
              </p>
            </div>

            <ul className="grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-8">
              {stats.map((stat) => (
                <li key={stat.label} className="space-y-1">
                  <p className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                      {stat.value}
                    </span>
                    <span className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
                      {stat.suffix}
                    </span>
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)] sm:text-sm">{stat.label}</p>
                </li>
              ))}
            </ul>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:gap-2 hover:text-[var(--primary-hover)]"
              >
                더 알아보기
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
