import { Github, Globe, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { profile } from "@/lib/data/profile";
import { siteConfig } from "@/lib/siteConfig";
import type { SocialLink } from "@/lib/types";

const iconMap: Record<SocialLink["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  globe: Globe,
};

// 푸터: 간단한 브랜드 영역 + 탐색 링크 + 소셜 아이콘으로 구성한다.
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 border-b border-[var(--border)] pb-10 sm:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-lg font-semibold tracking-tight"
            >
              {siteConfig.shortTitle}
              <span className="text-[var(--primary)]">.</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-[var(--muted-foreground)]">
              {profile.headline}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[var(--muted-foreground)] uppercase">
              탐색
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-[var(--foreground)]/80 hover:text-[var(--primary)]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-[var(--foreground)]/80 hover:text-[var(--primary)]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-[var(--foreground)]/80 hover:text-[var(--primary)]"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--foreground)]/80 hover:text-[var(--primary)]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[var(--muted-foreground)] uppercase">
              연결
            </h3>
            <ul className="mt-4 flex items-center gap-2">
              {profile.socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <p className="pt-6 text-center text-xs text-[var(--muted-foreground)] sm:text-left">
          © {year} {siteConfig.author}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
