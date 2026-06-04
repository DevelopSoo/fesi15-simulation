// src/app/page.test.tsx
// 게시글 상세 페이지 테스트 파일입니다.

import { render, screen } from "@testing-library/react";
import PostDetailPage from "./page";

describe("게시글 상세 페이지", () => {
  test("게시글 상세 데이터를 불러와 화면에 렌더링한다", async () => {
    render(<PostDetailPage />);

    expect(await screen.findByText("1: 첫 번째 게시글")).toBeInTheDocument();
    expect(screen.getByText("내용 1")).toBeInTheDocument();
  });
});
