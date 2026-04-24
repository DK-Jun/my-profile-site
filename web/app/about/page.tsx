import type { Metadata } from "next";
import { Timeline } from "@/components/about/Timeline";
import { Section } from "@/components/ui/Section";
import { awards, educations } from "@/lib/data/educations";
import { experiences } from "@/lib/data/experiences";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: `${profile.name} 의 경력, 학력, 관심사를 소개합니다.`,
};

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="About" title="제품을 굴러가게 만드는 개발자" align="center">
        <div className="mx-auto max-w-2xl space-y-5 text-center">
          <p className="text-base leading-relaxed text-[var(--foreground)]/90 sm:text-lg">
            {profile.bio}
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">
            관심 분야: 개발자 경험(DX), 제품 분석, AI 도구 활용.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Experience"
        title="경력"
        description="최근에 몰입한 역할과 기여입니다."
        className="bg-[var(--muted)]/50"
      >
        <Timeline items={experiences} />
      </Section>

      <Section eyebrow="Background" title="학력 · 활동">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7">
            <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-[var(--primary)] uppercase">
              학력
            </h3>
            <ul className="space-y-4">
              {educations.map((edu) => (
                <li key={`${edu.school}-${edu.period}`}>
                  <p className="font-medium">{edu.school}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {edu.degree} · {edu.period}
                  </p>
                  {edu.description && (
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">{edu.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7">
            <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-[var(--primary)] uppercase">
              수상 · 활동
            </h3>
            <ul className="space-y-4">
              {awards.map((award) => (
                <li key={`${award.school}-${award.period}`}>
                  <p className="font-medium">{award.school}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {award.degree} · {award.period}
                  </p>
                  {award.description && (
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                      {award.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
