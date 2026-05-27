"use client";

import { useState } from "react";

type Status = "idle" | "running" | "done";

export default function ProgressBar() {
  // 1. status: 현재 다운로드 진행 상황
  const [status, setStatus] = useState<Status>("idle");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <button
        // 2. 버튼 클릭 시 다운로드 시작
        onClick={() => {
          setStatus("running");
        }}
        // 다운로드 시작 후에는 disabled 처리
        disabled={status !== "idle"}
        className="rounded bg-blue-500 px-6 py-2 text-white disabled:opacity-50"
      >
        다운로드
      </button>

      {/* 프로그레스 바 */}
      <div className="h-6 w-80 overflow-hidden rounded-full bg-gray-200">
        <div
          // tailwind css로 duration을 따로 적용할 수 없어서 inline style로 적용
          style={{
            transitionProperty: "background-color, width",
            transitionDuration: "2s, 3s", // background-color는 0.8초, width는 3초
            transitionTimingFunction: "ease-in-out",
          }}
          className={`h-full rounded-full ${
            status === "idle" ? "w-0 bg-blue-500" : "w-full bg-green-500"
          }`}
          onTransitionEnd={(e) => {
            console.log("onTransitionEnd 이벤트 호출 횟수 확인하기");
            if (e.propertyName === "background-color") {
              // 2초 만에 색상만 먼저 변경 완료
              // 여기서 "done" 처리하면? -> 바가 아직 10%도 안 찼는데 완료 표시가 됨
              console.log(
                `색상 변경 완료 (${e.elapsedTime}초) - 아직 진행 중!`,
              );
            }

            if (e.propertyName === "width" && status === "running") {
              // 3초 후 width 변경 완료 = 진짜 다운로드 완료
              console.log(`다운로드 완료! (${e.elapsedTime}초 소요)`);
              setStatus("done");
            }
          }}
        />
      </div>

      <p className="text-lg font-medium">
        {status === "idle" && "대기 중"}
        {status === "running" && "다운로드 중..."}
        {status === "done" && "다운로드 완료!"}
      </p>
    </div>
  );
}
