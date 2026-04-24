import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  containerClassName?: string;
  children: ReactNode;
};

// 페이지 내 큰 구획을 감싸는 레이아웃 컴포넌트.
// - 제목/설명을 선택적으로 표시하고, 정렬 모드(왼쪽/가운데)를 지원한다.
// - 가운데 정렬 모드에서는 제목 아래에 프라이머리 색상의 포인트 바가 들어간다.
export function Section({
  title,
  eyebrow,
  description,
  align = "left",
  containerClassName,
  className,
  children,
  ...props
}: SectionProps) {
  const centered = align === "center";

  return (
    <section className={clsx("py-20 sm:py-24 lg:py-28", className)} {...props}>
      <div className={clsx("mx-auto w-full max-w-6xl px-5 sm:px-8", containerClassName)}>
        {(title || description || eyebrow) && (
          <header
            className={clsx(
              "mb-12 space-y-3",
              centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl",
            )}
          >
            {eyebrow && (
              <p
                className={clsx(
                  "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--primary)] uppercase",
                  centered && "justify-center",
                )}
              >
                <span aria-hidden className="h-px w-6 bg-[var(--primary)]" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={clsx(
                  "text-3xl font-bold tracking-tight sm:text-4xl",
                  centered && "section-accent",
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={clsx(
                  "text-sm text-[var(--muted-foreground)] sm:text-base",
                  !centered && "max-w-2xl",
                )}
              >
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
