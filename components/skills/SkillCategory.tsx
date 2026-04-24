import clsx from "clsx";
import type { SkillCategory as SkillCategoryType } from "@/lib/types";

type SkillCategoryProps = {
  category: SkillCategoryType;
};

const LEVEL_LABEL: Record<number, string> = {
  1: "입문",
  2: "초급",
  3: "중급",
  4: "활용",
  5: "숙련",
};

// 기술 카테고리 1개를 블록으로 렌더링한다. 5단계 프로그레스 도트로 숙련도를 시각화.
export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <section className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--primary)]/40 sm:p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[var(--primary)]/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
      />
      <header className="relative mb-5">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--primary)] uppercase">
          {category.category}
        </p>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">{category.description}</p>
      </header>
      <ul className="relative space-y-3.5">
        {category.items.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium text-[var(--foreground)]">{skill.name}</span>
            <div className="flex items-center gap-3">
              <div
                role="img"
                aria-label={`숙련도 ${skill.level} / 5 (${LEVEL_LABEL[skill.level]})`}
                className="flex gap-1"
              >
                {[1, 2, 3, 4, 5].map((dot) => (
                  <span
                    key={dot}
                    aria-hidden
                    className={clsx(
                      "h-1.5 w-5 rounded-full transition-colors",
                      dot <= skill.level ? "bg-[var(--primary)]" : "bg-[var(--border)]",
                    )}
                  />
                ))}
              </div>
              <span className="w-9 text-right text-xs font-medium text-[var(--muted-foreground)]">
                {LEVEL_LABEL[skill.level]}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
