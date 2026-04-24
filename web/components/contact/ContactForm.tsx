"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

// Contact 폼: 현재는 로컬에서만 동작하며 실제 메일 전송은 Phase 6 에서 Resend 로 연동 예정.
export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    // TODO: Phase 6 - Resend API 로 메일 전송 연동
    // 현재는 네트워크 호출을 흉내만 내고 성공 상태로 전환한다.
    await new Promise((resolve) => setTimeout(resolve, 600));

    const form = event.currentTarget;
    form.reset();
    setState("success");
  }

  const inputClass =
    "h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/60 outline-none transition-colors focus-visible:border-[var(--primary)] focus-visible:ring-2 focus-visible:ring-[var(--primary)]/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            이름
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            placeholder="홍길동"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            이메일
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          메시지
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          minLength={10}
          placeholder="어떤 프로젝트를 함께 하고 싶으신가요?"
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-sm text-[var(--foreground)] transition-colors outline-none placeholder:text-[var(--muted-foreground)]/60 focus-visible:border-[var(--primary)] focus-visible:ring-2 focus-visible:ring-[var(--primary)]/30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="shadow-primary-glow group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-[var(--primary-foreground)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          {state === "submitting" ? "보내는 중..." : "메시지 보내기"}
        </button>
        {state === "success" && (
          <p role="status" className="text-sm text-[var(--muted-foreground)]">
            메시지가 기록되었습니다. (현재는 로컬 확인용이며 실제 발송은 준비 중입니다.)
          </p>
        )}
        {state === "error" && (
          <p role="alert" className="text-sm text-red-400">
            전송에 실패했습니다. 잠시 후 다시 시도해 주세요.
          </p>
        )}
      </div>
    </form>
  );
}
