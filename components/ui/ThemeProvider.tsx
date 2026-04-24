"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

// next-themes 의 SSR/CSR 테마 동기화 래퍼. class 전략을 사용하여 Tailwind dark variant 와 연결합니다.
// 다크 모드를 기본값으로 제공하고, 사용자가 토글한 선택을 유지한다.
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
