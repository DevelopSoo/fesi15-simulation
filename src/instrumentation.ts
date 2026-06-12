// src/instrumentation.ts

import * as Sentry from "@sentry/nextjs";
import { isMSWEnabled } from "./lib/isMSWEnabled";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("../sentry.server.config");

    // 목이 활성화될 때만 MSW 실행 (Edge Runtime에서는 실행되지 않음)
    if (isMSWEnabled()) {
      // msw/node는 Edge로 번들 불가 -> 가드 안 동적 import로 Edge 빌드에서 제거됨
      const { server } = await import("@/mocks/server");
      // onUnhandledRequest: "bypass" -> 처리되지 않은 요청은 실제 네트워크 요청으로 전달
      server.listen({ onUnhandledRequest: "bypass" });
    }
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("../sentry.edge.config");
  }
}

export const onRequestError = Sentry.captureRequestError;
