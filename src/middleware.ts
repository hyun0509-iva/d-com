import { auth } from "./auth"
import {NextResponse} from "next/server";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(`http://localhost:3000/i/flow/login`);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
  // nextjs에서 미들웨어로 페이지 접근 권한 설정 가능
  // 여기 matcher에 segments(경로)를 적으면 여기 segments(경로)에 해당하는 라우트 경우 
  // 위 미들웨어 함수가 먼저 실행되어 처리됨 -> 여기선 로그인이 안될 경우 로그인 모달창으로 이동
}
