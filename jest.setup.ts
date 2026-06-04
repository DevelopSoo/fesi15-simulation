// jest.setup.ts
// 각 테스트 실행 전후로 MSW 서버를 실행하고 정리하는 설정 파일입니다.

import "@testing-library/jest-dom";
import { server } from "@/mocks/index";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
