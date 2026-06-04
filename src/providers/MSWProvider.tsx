// src/app/MSWProvider.tsx
"use client";
import { Suspense, use, type ReactNode } from "react";
import { isMSWEnabled } from "@/lib/isMSWEnabled";

const mockingReady: Promise<unknown> =
  typeof window === "undefined" || !isMSWEnabled() // 서버 사이드에서는 실행하지 않음
    ? Promise.resolve()
    : import("@/mocks/browser").then(({ worker }) =>
        worker.start({ onUnhandledRequest: "bypass" }),
      );

function MockingGate({ children }: { children: ReactNode }) {
  use(mockingReady); // mockingReady가 완료될 때까지 가장 가까운 Suspense에서 대기 (fallback이 표시)
  return <>{children}</>;
}

export function MSWProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <MockingGate>{children}</MockingGate>
    </Suspense>
  );
}
