import clsx from "clsx";
import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "primary" | "soft";
};

// 기술 스택/태그 표기에 사용하는 라벨형 컴포넌트
export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
        variant === "default" && "bg-[var(--muted)] text-[var(--muted-foreground)]",
        variant === "outline" &&
          "border border-[var(--border)] text-[var(--foreground)]/80 hover:border-[var(--primary)]/60 hover:text-[var(--primary)]",
        variant === "primary" && "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm",
        variant === "soft" &&
          "bg-[var(--primary-soft)] text-[var(--primary)] ring-1 ring-[var(--primary)]/25",
        className,
      )}
      {...props}
    />
  );
}
