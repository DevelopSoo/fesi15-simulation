// src/mocks/index.ts
// 테스트 환경에서 사용할 MSW 서버를 설정하는 파일입니다.

import { setupServer } from "msw/node";
import { postsHandlers } from "./handlers/posts";

export const server = setupServer(...postsHandlers);
