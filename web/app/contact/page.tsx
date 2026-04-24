import { Github, Globe, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { profile } from "@/lib/data/profile";
import type { SocialLink } from "@/lib/types";

export const metadata: Metadata = {
  title: "Contact",
  description: "이메일 또는 폼을 통해 연락할 수 있습니다.",
};

const iconMap: Record<SocialLink["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  globe: Globe,
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Get in touch"
      title="연락하기"
      description="프로젝트 제안, 채용, 커피챗 모두 환영합니다. 이메일이 가장 빠릅니다."
      align="center"
    >
      <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] md:gap-10">
        <aside className="flex flex-col gap-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[var(--primary)] uppercase">
              바로 연결
            </h3>
            <p className="mt-3 text-sm text-[var(--muted-foreground)]">
              편한 채널로 연락 주세요. 보통 하루 이내에 답장드립니다.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
            <MapPin className="h-4 w-4 text-[var(--primary)]" aria-hidden />
            {profile.location}
          </div>
          <ul className="space-y-2 border-t border-[var(--border)] pt-6">
            {profile.socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-[var(--foreground)]/90 transition-colors hover:border-[var(--primary)]/40 hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--muted)] text-[var(--muted-foreground)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)]">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="font-medium">{social.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
